import { cn } from '@/utils/cn'

/** Soft purple glow used behind VEE “advantages” and similar sections. */
export function BilditPurpleGlowOrb({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute size-[500px] rounded-full bg-[rgba(200,80,240,0.08)] blur-[120px]',
        className
      )}
      aria-hidden
    />
  )
}

/** Paired purple + rose glows from the Early Access Figma block. */
export function BilditDualMarketingGlows() {
  return (
    <>
      <BilditPurpleGlowOrb className="left-1/2 top-1/3 -translate-x-1/2" />
      <div
        className="pointer-events-none absolute left-[55%] top-[40%] size-[400px] rounded-full bg-[rgba(232,69,144,0.06)] blur-[100px]"
        aria-hidden
      />
    </>
  )
}
