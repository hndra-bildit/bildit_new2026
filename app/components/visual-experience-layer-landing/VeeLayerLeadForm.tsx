'use client'

import { type FormEvent, useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

function sentStorageKey(source: string) {
  return `bildit-vee-lead-sent:${source}`
}

export type LeadSource =
  | 'figma-templates'
  | 'early-access'
  | 'early-access-program'
  | 'marketers-solutions'
  | 'tech-partners'
  | 'engineering-solutions'
  | 'contact-us'
  | 'home'
  | 'mobile-app-storefront'

type LeadFormVariant = 'default' | 'marketing' | 'dark'

type VeeLayerLeadFormProps = {
  source: LeadSource
  submitLabel: string
  className?: string
  submitButtonClassName?: string
  /** Field + success styling: default (Vee landing), marketing (light rounded-xl CTAs), dark (engineering band). */
  variant?: LeadFormVariant
  helperText?: string
  /** Short marketing forms (home, storefront, solutions) omit company; contact and long forms keep it. */
  showCompany?: boolean
}

const fieldClassByVariant: Record<LeadFormVariant, string> = {
  default:
    'w-full rounded-lg border border-[#e0e0e0] bg-white px-5 py-3 font-[family-name:var(--font-uncut-sans)] text-sm text-black placeholder:text-[#999] focus:border-[#bdbdbd] focus:outline-none',
  marketing:
    'w-full rounded-xl border-[1.5px] border-[#d3d6db] bg-white px-[18px] py-3.5 font-[family-name:var(--font-uncut-sans)] text-base text-neutral-900 placeholder:text-[#757575] focus:border-[#a8abb0] focus:outline-none',
  dark: 'w-full rounded-xl border-[1.5px] border-white/20 bg-[#07020f] px-[18px] py-3.5 font-[family-name:var(--font-uncut-sans)] text-base text-white placeholder:text-white/45 focus:border-white/35 focus:outline-none'
}

export function VeeLayerLeadForm({
  source,
  submitLabel,
  className,
  submitButtonClassName,
  variant = 'default',
  helperText,
  showCompany = true
}: VeeLayerLeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const fieldClass = fieldClassByVariant[variant]

  const isContactUs = source === 'contact-us'

  /** SlotPlaceholder / parent remounts after CMS hydration can reset state; persist success for this tab. */
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage.getItem(sentStorageKey(source)) === '1') {
        setStatus('sent')
      }
    } catch {
      // private mode / storage blocked
    }
  }, [source])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage(null)
    const form = e.currentTarget
    const data = new FormData(form)
    const fullName = String(data.get('fullName') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const company = showCompany ? String(data.get('company') ?? '').trim() : ''
    const message = isContactUs ? String(data.get('message') ?? '').trim() : ''

    try {
      const payload = isContactUs
        ? { source, fullName, email, company, message }
        : showCompany
          ? { source, fullName, email, company }
          : { source, fullName, email }
      const res = await fetch('/api/lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setStatus('error')
        setErrorMessage(json.error ?? 'Something went wrong. Please try again.')
        return
      }
      try {
        window.sessionStorage.setItem(sentStorageKey(source), '1')
      } catch {
        // ignore
      }
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  if (status === 'sent') {
    const isDark = variant === 'dark'
    return (
      <div
        className={cn(
          'rounded-xl px-5 py-8 text-center',
          isDark ? 'border border-white/10 bg-[#07020f]' : 'border border-black/10 bg-[#fafafa]',
          className
        )}
      >
        <div
          className={cn(
            'mx-auto flex size-12 items-center justify-center rounded-full text-2xl',
            isDark ? 'bg-[#ed1e79]/20 text-[#ed1e79]' : 'bg-[#ed1e79]/15 text-[#ed1e79]'
          )}
        >
          ✓
        </div>
        <h3
          className={cn(
            'mt-4 font-[family-name:var(--font-gt-walsheim)] text-xl font-bold',
            isDark ? 'text-[#f0e6ff]' : 'text-[#171717]'
          )}
        >
          Thank you!
        </h3>
        <p
          className={cn(
            'mt-2 font-[family-name:var(--font-uncut-sans)] text-base',
            isDark ? 'text-[#c4b5dc]' : 'text-[#666]'
          )}
        >
          We&apos;ll be in touch soon.
        </p>
        <button
          type="button"
          className={cn(
            'mt-6 font-[family-name:var(--font-uncut-sans)] text-sm font-medium underline underline-offset-4',
            isDark ? 'text-[#c4b5dc] hover:text-white' : 'text-[#595959] hover:text-neutral-900'
          )}
          onClick={() => {
            try {
              window.sessionStorage.removeItem(sentStorageKey(source))
            } catch {
              // ignore
            }
            setStatus('idle')
          }}
        >
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <form className={cn('flex flex-col gap-2.5', className)} onSubmit={onSubmit} noValidate>
      <label className="sr-only" htmlFor={`vee-lead-name-${source}`}>
        Full name
      </label>
      <input
        id={`vee-lead-name-${source}`}
        name="fullName"
        type="text"
        autoComplete="name"
        required
        placeholder="Full name"
        className={fieldClass}
      />
      <label className="sr-only" htmlFor={`vee-lead-email-${source}`}>
        Work email
      </label>
      <input
        id={`vee-lead-email-${source}`}
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="Work email"
        className={fieldClass}
      />
      {showCompany ? (
        <>
          <label className="sr-only" htmlFor={`vee-lead-company-${source}`}>
            Company (optional)
          </label>
          <input
            id={`vee-lead-company-${source}`}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company (optional)"
            className={fieldClass}
          />
        </>
      ) : null}
      {isContactUs ? (
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`vee-lead-message-${source}`}
            className={cn(
              'font-[family-name:var(--font-uncut-sans)] text-sm font-medium',
              variant === 'dark' ? 'text-white/80' : 'text-neutral-800'
            )}
          >
            Message
          </label>
          <textarea
            id={`vee-lead-message-${source}`}
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="Tell us how we can help. We will respond as soon as we can."
            className={cn(fieldClass, 'min-h-[120px] resize-y leading-relaxed')}
          />
        </div>
      ) : null}
      {status === 'error' && errorMessage ? (
        <p
          className={cn(
            'font-[family-name:var(--font-uncut-sans)] text-sm',
            variant === 'dark' ? 'text-red-400' : 'text-red-600'
          )}
          role="alert"
        >
          {errorMessage}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'mt-1 w-full rounded-full border-2 border-transparent bg-[#ed1e79] py-3 font-[family-name:var(--font-uncut-sans)] text-sm font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#d01a6b] disabled:opacity-60',
          submitButtonClassName
        )}
      >
        {status === 'loading' ? 'Sending…' : submitLabel}
      </button>
      {helperText ? (
        <p
          className={cn(
            'text-center font-[family-name:var(--font-uncut-sans)] text-[13px]',
            variant === 'dark' ? 'text-white/50' : 'text-[#737373]'
          )}
        >
          {helperText}
        </p>
      ) : null}
    </form>
  )
}
