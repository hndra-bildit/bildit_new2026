import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Early Access Program | BILDIT',
  description:
    'Join the BILDIT Early Access program: free implementation, training, and a 180-day trial for select eCommerce brands.'
}

const GET_ITEMS = ['FREE Implementation', 'FREE Training', 'FREE 180 Day Trial'] as const

const BONUS_ITEMS = [
  'White-glove onboarding',
  'Direct access to our engineering team',
  'Elevated template starter pack'
] as const

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-16 pt-8 text-neutral-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="font-[family-name:var(--font-uncut-sans)] text-sm font-medium text-[#595959]">
          <Link href="/" className="text-[#431782] underline-offset-4 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-neutral-400" aria-hidden>
            /
          </span>
          Early Access
        </p>

        <header className="mt-8 flex flex-col gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#c850f0]">
            <Image src="/home-early-access/shield-icon.svg" alt="" width={28} height={28} className="size-7" />
          </div>
          <h1 className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Early Access Program
          </h1>
          <p className="font-[family-name:var(--font-uncut-sans)] text-lg leading-8 text-[#595959]">
            We&apos;re inviting a small group of eCommerce brands to shape the future of visual storefront content. If
            you want a visual editor with live previews and fewer deploys, we want to hear from you.
          </p>
        </header>

        <section className="mt-12 rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-uncut-sans)] text-xl font-semibold text-neutral-900">
            What&apos;s included
          </h2>
          <div className="mt-8 flex flex-col gap-10 md:flex-row md:gap-12">
            <div>
              <p className="font-[family-name:var(--font-uncut-sans)] text-sm font-semibold uppercase tracking-wide text-[#c850f0]">
                What you get
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 font-[family-name:var(--font-uncut-sans)] text-base leading-7 text-neutral-800">
                {GET_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-[family-name:var(--font-uncut-sans)] text-sm font-semibold uppercase tracking-wide text-[#c850f0]">
                Bonus
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {BONUS_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-[family-name:var(--font-uncut-sans)] text-base leading-7 text-neutral-800"
                  >
                    <Image
                      src="/home-everything/icon-check-primary.png"
                      alt=""
                      width={20}
                      height={20}
                      className="mt-1 size-5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="font-[family-name:var(--font-uncut-sans)] mt-10 text-center text-base font-semibold text-neutral-900">
            We&apos;re accepting a limited number of brands for this cohort. Reach out through your usual BILDIT contact
            or sales channel to request a spot.
          </p>
        </section>
      </div>
    </main>
  )
}
