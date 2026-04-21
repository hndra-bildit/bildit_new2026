'use client'

import { type FormEvent, useState } from 'react'
import { cn } from '@/utils/cn'

type LeadSource = 'figma-templates' | 'early-access' | 'early-access-program'

type VeeLayerLeadFormProps = {
  source: LeadSource
  submitLabel: string
  className?: string
  submitButtonClassName?: string
}

export function VeeLayerLeadForm({ source, submitLabel, className, submitButtonClassName }: VeeLayerLeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage(null)
    const form = e.currentTarget
    const data = new FormData(form)
    const fullName = String(data.get('fullName') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()

    try {
      const res = await fetch('/api/lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source, fullName, email, company })
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setStatus('error')
        setErrorMessage(json.error ?? 'Something went wrong. Please try again.')
        return
      }
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div className={cn('rounded-xl border border-black/10 bg-[#fafafa] px-5 py-8 text-center', className)}>
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#ed1e79]/15 text-2xl text-[#ed1e79]">
          ✓
        </div>
        <h3 className="mt-4 font-[family-name:var(--font-gt-walsheim)] text-xl font-bold text-[#171717]">Thank you!</h3>
        <p className="mt-2 font-[family-name:var(--font-uncut-sans)] text-base text-[#666]">
          We&apos;ll be in touch soon.
        </p>
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
        className="w-full rounded-lg border border-[#e0e0e0] bg-white px-5 py-3 font-[family-name:var(--font-uncut-sans)] text-sm text-black placeholder:text-[#999] focus:border-[#bdbdbd] focus:outline-none"
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
        className="w-full rounded-lg border border-[#e0e0e0] bg-white px-5 py-3 font-[family-name:var(--font-uncut-sans)] text-sm text-black placeholder:text-[#999] focus:border-[#bdbdbd] focus:outline-none"
      />
      <label className="sr-only" htmlFor={`vee-lead-company-${source}`}>
        Company (optional)
      </label>
      <input
        id={`vee-lead-company-${source}`}
        name="company"
        type="text"
        autoComplete="organization"
        placeholder="Company (optional)"
        className="w-full rounded-lg border border-[#e0e0e0] bg-white px-5 py-3 font-[family-name:var(--font-uncut-sans)] text-sm text-black placeholder:text-[#999] focus:border-[#bdbdbd] focus:outline-none"
      />
      {status === 'error' && errorMessage ? (
        <p className="font-[family-name:var(--font-uncut-sans)] text-sm text-red-600" role="alert">
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
    </form>
  )
}
