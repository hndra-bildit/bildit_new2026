'use client'

import { type FormEvent, useMemo, useState } from 'react'
import { cn } from '@/utils/cn'

type FormStatus = 'idle' | 'loading' | 'sent' | 'error'

type CareerContactFormProps = {
  className?: string
}

function humanFileSize(bytes: number): string {
  const kb = bytes / 1024
  if (kb < 1024) return `${Math.round(kb)} KB`
  const mb = kb / 1024
  return `${mb.toFixed(1)} MB`
}

export function CareerContactForm({ className }: CareerContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [selectedFileInfo, setSelectedFileInfo] = useState<string | null>(null)

  const inputClassName = useMemo(
    () =>
      'w-full rounded-xl border-[1.5px] border-[#d3d6db] bg-white px-[18px] py-3.5 font-[family-name:var(--font-uncut-sans)] text-base text-neutral-900 placeholder:text-[#757575] focus:border-[#a8abb0] focus:outline-none',
    []
  )

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage(null)

    const form = e.currentTarget
    const data = new FormData(form)

    const fullName = String(data.get('fullName') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const resume = data.get('resume')

    if (!fullName || fullName.length < 2) {
      setStatus('error')
      setErrorMessage('Please enter your full name.')
      return
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }
    if (!(resume instanceof File) || !resume.name) {
      setStatus('error')
      setErrorMessage('Please attach your resume.')
      return
    }

    try {
      const res = await fetch('/api/career/', {
        method: 'POST',
        body: data
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setStatus('error')
        setErrorMessage(json.error ?? 'Something went wrong. Please try again.')
        return
      }
      setStatus('sent')
      form.reset()
      setSelectedFileInfo(null)
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
        <h3 className="mt-4 font-[family-name:var(--font-gt-walsheim)] text-xl font-bold text-[#171717]">
          Thanks — we got it
        </h3>
        <p className="mt-2 font-[family-name:var(--font-uncut-sans)] text-base text-[#666]">
          We&apos;ll review your resume and follow up soon.
        </p>
        <button
          type="button"
          className="mt-6 font-[family-name:var(--font-uncut-sans)] text-sm font-medium text-[#595959] underline underline-offset-4 hover:text-neutral-900"
          onClick={() => setStatus('idle')}
        >
          Submit another resume
        </button>
      </div>
    )
  }

  return (
    <form className={cn('flex flex-col gap-3', className)} onSubmit={onSubmit} noValidate>
      <div>
        <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-neutral-700">
          Full name
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

      <div>
        <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-neutral-700">
          Email
        </label>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className={inputClassName}
        />
      </div>

      <div>
        <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-neutral-700">
          Resume
        </label>
        <input
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className={cn(
            inputClassName,
            'py-[11px] file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-neutral-800 hover:file:bg-neutral-200'
          )}
          onChange={(ev) => {
            const f = ev.currentTarget.files?.[0]
            setSelectedFileInfo(f ? `${f.name} (${humanFileSize(f.size)})` : null)
          }}
        />
        {selectedFileInfo ? (
          <p className="mt-2 font-[family-name:var(--font-uncut-sans)] text-sm text-neutral-600">{selectedFileInfo}</p>
        ) : null}
      </div>

      <div>
        <label className="mb-1 block font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-wide text-neutral-700">
          Message (optional)
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Anything you'd like us to know?"
          className={cn(inputClassName, 'min-h-[110px] resize-y leading-relaxed')}
        />
      </div>

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
        {status === 'loading' ? 'Sending…' : 'Send'}
      </button>

      <p className="text-center font-[family-name:var(--font-uncut-sans)] text-[13px] text-[#737373]">
        By submitting, you agree we can contact you about career opportunities.
      </p>
    </form>
  )
}
