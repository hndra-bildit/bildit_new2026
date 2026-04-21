'use client'

import { type FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/utils/cn'

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string
          callback: (token: string) => void
          'error-callback'?: () => void
          'expired-callback'?: () => void
        }
      ) => string
      remove: (widgetId: string) => void
      reset: (widgetId: string) => void
    }
  }
}

const TURNSTILE_SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

function loadTurnstileScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.turnstile) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Turnstile script failed')), { once: true })
      return
    }
    const s = document.createElement('script')
    s.src = TURNSTILE_SCRIPT
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Turnstile script failed'))
    document.head.appendChild(s)
  })
}

type FormStatus = 'idle' | 'loading' | 'sent' | 'error'

export function IntegrationPartnersLeadForm({ className }: { className?: string }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''
  const captchaEnabled = Boolean(siteKey)

  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [scriptReady, setScriptReady] = useState(false)

  const widgetContainerRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<string | null>(null)

  const renderWidget = useCallback(() => {
    if (!captchaEnabled || !widgetContainerRef.current || !window.turnstile) return
    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current)
      widgetIdRef.current = null
    }
    widgetIdRef.current = window.turnstile.render(widgetContainerRef.current, {
      sitekey: siteKey,
      callback: (t) => setTurnstileToken(t),
      'error-callback': () => setTurnstileToken(null),
      'expired-callback': () => setTurnstileToken(null)
    })
  }, [captchaEnabled, siteKey])

  useEffect(() => {
    if (!captchaEnabled) return
    let cancelled = false
    loadTurnstileScript()
      .then(() => {
        if (!cancelled) setScriptReady(true)
      })
      .catch(() => {
        if (!cancelled) setErrorMessage('Could not load verification. Check your connection or try again.')
      })
    return () => {
      cancelled = true
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [captchaEnabled])

  useEffect(() => {
    if (!scriptReady || !captchaEnabled) return
    renderWidget()
  }, [scriptReady, captchaEnabled, renderWidget])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage(null)

    if (captchaEnabled && !turnstileToken) {
      setStatus('error')
      setErrorMessage('Please complete the verification step.')
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)
    const fullName = String(data.get('fullName') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const website = String(data.get('website') ?? '').trim()
    const engineerCountRaw = String(data.get('engineerCount') ?? '').trim()
    const cmses = String(data.get('cmses') ?? '').trim()
    const buildsMobileApps = String(data.get('buildsMobileApps') ?? '').trim()

    try {
      const res = await fetch('/api/lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'integration-partners',
          fullName,
          email,
          company,
          website,
          engineerCount: engineerCountRaw,
          cmses,
          buildsMobileApps,
          turnstileToken: captchaEnabled ? turnstileToken : undefined
        })
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setStatus('error')
        setErrorMessage(json.error ?? 'Something went wrong. Please try again.')
        if (captchaEnabled && window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current)
          setTurnstileToken(null)
        }
        return
      }
      setStatus('sent')
      form.reset()
      if (captchaEnabled && window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current)
        setTurnstileToken(null)
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
      if (captchaEnabled && window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current)
        setTurnstileToken(null)
      }
    }
  }

  const inputClassName =
    'w-full rounded-lg border border-[#e0e0e0] bg-white px-5 py-3 font-[family-name:var(--font-uncut-sans)] text-sm text-black placeholder:text-[#999] focus:border-[#bdbdbd] focus:outline-none'

  if (status === 'sent') {
    return (
      <div className={cn('rounded-xl border border-black/10 bg-[#fafafa] px-5 py-8 text-center', className)}>
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#ed1e79]/15 text-2xl text-[#ed1e79]">
          ✓
        </div>
        <h3 className="mt-4 font-[family-name:var(--font-gt-walsheim)] text-xl font-bold text-[#171717]">
          Thanks for applying
        </h3>
        <p className="mt-2 font-[family-name:var(--font-uncut-sans)] text-base text-[#666]">
          We&apos;ll review your details and reach out soon.
        </p>
      </div>
    )
  }

  return (
    <form className={cn('flex flex-col gap-3', className)} onSubmit={onSubmit} noValidate>
      <p className="font-[family-name:var(--font-uncut-sans)] text-sm text-[#555]">
        Tell us about your practice so we can explore a partnership fit.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-[#444]">
            Contact name
          </label>
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="Jane Doe"
            className={inputClassName}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-[#444]">
            Work email
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={inputClassName}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-[#444]">
            Company name
          </label>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            required
            placeholder="Acme Digital"
            className={inputClassName}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-[#444]">
            Website
          </label>
          <input
            name="website"
            type="url"
            autoComplete="url"
            required
            placeholder="https://example.com"
            className={inputClassName}
          />
        </div>
        <div>
          <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-[#444]">
            Number of engineers
          </label>
          <input
            name="engineerCount"
            type="number"
            inputMode="numeric"
            min={0}
            required
            placeholder="e.g. 12"
            className={inputClassName}
          />
        </div>
        <div>
          <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-[#444]">
            Do you build mobile apps?
          </label>
          <select name="buildsMobileApps" required className={cn(inputClassName, 'appearance-auto')}>
            <option value="">Select…</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-[#444]">
            CMS platforms you work with
          </label>
          <textarea
            name="cmses"
            required
            rows={4}
            placeholder="e.g. Contentful, Sanity, custom headless, Shopify…"
            className={cn(inputClassName, 'min-h-[100px] resize-y')}
          />
        </div>
      </div>

      {captchaEnabled ? (
        <div className="pt-1">
          <span className="mb-2 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-[#444]">
            Verification
          </span>
          <div ref={widgetContainerRef} className="min-h-[65px]" />
        </div>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 font-[family-name:var(--font-uncut-sans)] text-sm text-amber-900">
          Captcha is not configured. Set{' '}
          <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_TURNSTILE_SITE_KEY</code> and{' '}
          <code className="rounded bg-amber-100 px-1">TURNSTILE_SECRET_KEY</code> for production.
        </p>
      )}

      {status === 'error' && errorMessage ? (
        <p className="font-[family-name:var(--font-uncut-sans)] text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-1 w-full rounded-full border-2 border-transparent bg-[#ed1e79] py-3 font-[family-name:var(--font-uncut-sans)] text-sm font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#d01a6b] disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Apply to partner'}
      </button>
    </form>
  )
}
