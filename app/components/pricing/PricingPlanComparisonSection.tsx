import { Fragment } from 'react'
import type { CellValue, PlanKey } from '@/app/components/pricing/pricing-plan-comparison-data'
import { PRICING_PLAN_COMPARISON_GROUPS } from '@/app/components/pricing/pricing-plan-comparison-data'
import { cn } from '@/utils/cn'
import { FaCheckCircle } from 'react-icons/fa'

const PLANS: { key: PlanKey; label: string }[] = [
  { key: 'sandbox', label: 'Free Developer Sandbox' },
  { key: 'growth', label: 'Growth' },
  { key: 'multichannel', label: 'Multi-channel' },
  { key: 'enterprise', label: 'Enterprise' }
]

function ComparisonCell({ value }: { value: CellValue }) {
  if (value.kind === 'text') {
    return (
      <span className="font-[family-name:var(--font-inter)] text-sm leading-snug text-neutral-900">{value.value}</span>
    )
  }
  if (value.kind === 'unlimited') {
    return <span className="font-[family-name:var(--font-inter)] text-sm text-neutral-900">Unlimited</span>
  }
  if (value.kind === 'check') {
    return <FaCheckCircle className="size-6 text-[#50C12E]" aria-label="Included" />
  }
  return (
    <span className="font-[family-name:var(--font-inter)] text-sm text-neutral-400" aria-label="Not included">
      —
    </span>
  )
}

export function PricingPlanComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fa] px-4 py-16 md:px-8 md:py-24" data-node-id="4486:18262">
      <div
        className="pointer-events-none absolute -left-20 top-1/4 size-[500px] rounded-full bg-[rgba(200,80,240,0.06)] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-2/3 size-[500px] rounded-full bg-[rgba(200,80,240,0.06)] blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-10 md:gap-12">
        <header className="flex flex-col items-center gap-3 text-center">
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-neutral-900">
            Compare
          </p>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl md:leading-[1.05]">
            Everything, side by side.
          </h2>
          <p className="max-w-md font-[family-name:var(--font-inter)] text-base text-[#595959] md:text-[17px]">
            See exactly what&apos;s included in each plan.
          </p>
        </header>

        <div className="overflow-x-auto rounded-[20px] border border-black/8 bg-white shadow-[0px_20px_40px_0px_rgba(0,0,0,0.08)]">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/8 bg-[#f5f7fa]">
                <th className="font-[family-name:var(--font-inter)] px-4 py-4 text-sm font-bold text-neutral-900 md:px-5 md:py-5">
                  Feature
                </th>
                {PLANS.map(({ key, label }) => (
                  <th
                    key={key}
                    className="font-[family-name:var(--font-inter)] w-[min(22vw,220px)] px-3 py-4 text-center text-xs font-bold leading-tight text-neutral-900 md:w-auto md:px-4 md:py-5 md:text-sm"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICING_PLAN_COMPARISON_GROUPS.map((group) => (
                <Fragment key={group.title}>
                  <tr className="border-b border-black/8 bg-white">
                    <td
                      colSpan={5}
                      className="font-[family-name:var(--font-inter)] px-4 pb-4 pt-5 text-sm font-bold uppercase tracking-[0.05em] text-[#aaa] md:px-5"
                    >
                      {group.title}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-black/8">
                      <td className="max-w-[240px] px-4 py-4 align-top md:max-w-[280px] md:px-5">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-gt-walsheim text-sm font-medium text-neutral-900">{row.feature}</span>
                          {row.newBadge ? (
                            <span className="rounded-full bg-[rgba(237,30,121,0.1)] px-2 py-0.5 font-[family-name:var(--font-inter)] text-[11px] font-semibold text-[#ed1e79]">
                              New
                            </span>
                          ) : null}
                        </div>
                      </td>
                      {PLANS.map(({ key }) => (
                        <td
                          key={key}
                          className={cn(
                            'px-3 py-4 align-top text-left md:px-4',
                            key === 'growth' && 'bg-[rgba(23,23,23,0.03)]'
                          )}
                        >
                          <ComparisonCell value={row[key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
