'use client'

import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import Link from 'next/link'

export function MarketersSolutionsCtaForm() {
  return (
    <form
      className="mt-4 w-full max-w-[480px] space-y-5"
      action="#"
      method="post"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="cta-full-name">
          Full name
        </label>
        <input
          id="cta-full-name"
          name="name"
          placeholder="Full name"
          className="rounded-xl border-[1.5px] border-[#d3d6db] px-[18px] py-3.5 text-base text-neutral-900 placeholder:text-[#757575]"
        />
        <label className="sr-only" htmlFor="cta-email">
          Work email
        </label>
        <input
          id="cta-email"
          name="email"
          type="email"
          placeholder="Work email"
          className="rounded-xl border-[1.5px] border-[#d3d6db] px-[18px] py-3.5 text-base text-neutral-900 placeholder:text-[#757575]"
        />
      </div>
      <Link
        href={BILDIT_SIGNUP_URL}
        className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-base font-bold text-white no-underline [background-image:var(--bildit-gradient-cta-short)] hover:opacity-95"
      >
        Start Free Trial
        <span aria-hidden>→</span>
      </Link>
      <p className="text-center text-[13px] text-[#737373]">
        No cost. No risk. We don&apos;t win unless you ship.
      </p>
    </form>
  )
}
