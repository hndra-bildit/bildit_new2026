import { cn } from '@/utils/cn'

/** Figma intro band (4729:27436). */
export function StorefrontIntroBand({ className }: { className?: string }) {
  return (
    <section
      className={cn('relative overflow-hidden bg-[#0d0118] py-12 md:py-14', className)}
      aria-labelledby="storefront-intro-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute right-[72px] top-[72px] size-[500px] rounded-full opacity-30 blur-[36px]"
          style={{
            background: 'radial-gradient(circle, rgba(237,30,121,0.35) 0%, rgba(237,30,121,0) 70%)'
          }}
        />
        <div
          className="absolute bottom-[20%] left-[72px] size-[400px] rounded-full opacity-25 blur-[36px]"
          style={{
            background: 'radial-gradient(circle, rgba(59,30,237,0.45) 0%, rgba(59,30,237,0) 70%)'
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-5 px-4 text-center sm:px-6">
        <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.08em] text-[#a07dc0]">
          mobile app storefront
        </p>
        <h2
          id="storefront-intro-heading"
          className="font-[family-name:var(--font-uncut-sans)] max-w-[630px] text-3xl font-bold leading-tight tracking-tight text-[#f0e6ff] sm:text-4xl md:text-[48px] md:leading-[58px]"
        >
          Managing Your Mobile Store Just Got Easier
        </h2>
        <p className="font-[family-name:var(--font-uncut-sans)] max-w-[634px] text-lg font-normal leading-relaxed text-[#d6c1ea]">
          Every tool your team needs for faster mobile app launches — designed to move as fast as your ideas.
        </p>
      </div>
    </section>
  )
}
