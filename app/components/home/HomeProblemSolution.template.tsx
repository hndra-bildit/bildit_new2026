// @template v2

import { homeSectionTitleClassName } from "@/cmsDependencies";
import { BilditLogo } from "@/cmsDependencies";
import { cn } from "@/cmsDependencies";
import { AlertTriangle, Check } from "@/cmsDependencies";
const PROBLEM_POINTS = ['Dev tickets. Release cycles. Missed windows.', 'Death by delay.', 'Slow sites kill momentum.', 'Slow teams lose revenue.'] as const;
const PUSH_OUT_ITEMS = ['Campaigns', 'Personalized experiences', 'Brand upgrades', 'Conversion experiments'] as const;
const IMMEDIATE_POINTS = ['No engineering bottleneck.', 'No performance regression.', 'No deployments.'] as const;
const gradientImmediately = {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text' as const,
  backgroundImage: 'linear-gradient(167.8deg, rgb(200, 80, 240) 0%, rgb(232, 69, 144) 50%, rgb(244, 114, 182) 100%)'
};
const gradientJustControl = {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text' as const,
  backgroundImage: 'linear-gradient(169.13deg, rgb(237, 30, 121) 54.93%, rgb(59, 30, 237) 94.96%)'
};

/**
 * Figma “Problem / Solution” (5119:16641): two-column narrative — broken workflow vs BILDIT.
 */
export function HomeProblemSolution({
  className
}: {
  className?: string;
}) {
  return <section className={cn('home-scheme-light relative w-full overflow-hidden bg-white text-neutral-900', className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className={`absolute left-[10%] top-[20%] size-[400px] bg-[rgba(255,68,102,0.05)] blur-[100px] md:left-[150px] ${sectionDivRoundedCornersToggle ? "rounded-full" : ""}`} />
        <div className="absolute right-[5%] top-[60px] h-[649px] w-[min(584px,90vw)] md:right-[170px]">
          <div className={`absolute left-[-40%] top-[149px] size-[500px] bg-[rgba(200,80,240,0.08)] blur-[120px] md:left-[-184px] ${sectionDivRoundedCornersToggle ? "rounded-full" : ""}`} />
          <div className={`absolute right-0 top-8 size-[400px] bg-[rgba(232,69,144,0.06)] blur-[100px] ${sectionDivRoundedCornersToggle ? "rounded-full" : ""}`} />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1512px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 md:gap-14 md:py-20 lg:grid-cols-2 lg:gap-[60px] lg:px-[116px] lg:py-[100px] xl:px-[216px]">
        {/* Problem */}
        <div className="flex min-w-0 flex-col">
          <div className="flex flex-col gap-8 md:gap-[30px]">
            <h2 className={cn('max-w-[855px]', homeSectionTitleClassName)}>
              {divH2Text}
            </h2>
            <div className="flex flex-wrap items-center gap-2.5">
              <AlertTriangle className="size-6 shrink-0 text-[#ff4466]" strokeWidth={2} aria-hidden />
              <p className="font-[family-name:var(--font-uncut-sans)] text-lg font-bold text-[#ff4466] md:text-xl md:leading-[32.5px]">
                {divPText}
              </p>
            </div>
            <p className="font-[family-name:var(--font-uncut-sans)] text-base font-light leading-7 text-neutral-600 md:text-[17px] md:leading-[28px]">
              {divPText}
              <br />
              {divPText}
            </p>
            <ul className="flex flex-col gap-2.5 font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-[#595959]">
              {PROBLEM_POINTS.map(line => <li key={line}>{line}</li>)}
            </ul>
          </div>
        </div>

        {/* Solution */}
        <div className="flex min-w-0 flex-col lg:justify-center lg:pt-[140px]">
          <div className="flex flex-col gap-8 md:gap-[30px]">
            <h2 className={cn('max-w-[855px] flex flex-wrap items-center gap-x-3 gap-y-2 [--header-logo-bild:#0d0118] [--header-logo-it:#ed1e79]', homeSectionTitleClassName)}>
              <span>{h2SpanText}</span>
              <span className="inline-flex items-center">
                <span className="sr-only">{h2SpanText}</span>
                <BilditLogo className="h-9 w-auto sm:h-10 md:h-11" />
              </span>
            </h2>
            <div className="flex flex-col gap-0 font-[family-name:var(--font-uncut-sans)] text-base md:text-[17px]">
              <p className="font-bold leading-[32.5px] text-[#171717]">{divPText}</p>
              <p className="font-light leading-[32.5px] text-neutral-600">
                {divPText}
              </p>
            </div>

            <div className={`flex flex-col gap-2.5 ${sectionDivRoundedCornersToggle ? "rounded-3xl" : ""}`}>
              <p className="font-[family-name:var(--font-uncut-sans)] text-base font-light text-neutral-600">
                {divPText}
              </p>
              <ul className="space-y-1 font-[family-name:var(--font-uncut-sans)] text-lg font-medium leading-7">
                {PUSH_OUT_ITEMS.map(item => <li key={item} className="flex gap-2 ps-1">
                    <span className="shrink-0 text-[#c850f0]" aria-hidden>
                      {liSpanText}
                    </span>
                    <span className="bg-gradient-to-br from-[#c850f0] via-[#e84590] to-[#f472b6] bg-clip-text text-transparent">
                      {item}
                    </span>
                  </li>)}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="inline-block font-[family-name:var(--font-uncut-sans)] text-2xl font-bold" style={gradientImmediately}>
                {divPText}
              </p>
              <ul className="flex flex-col gap-4">
                {IMMEDIATE_POINTS.map(line => <li key={line} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-6 shrink-0 text-[#ed1e79]" strokeWidth={2.25} aria-hidden />
                    <span className="font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-[#171717]">
                      {line}
                    </span>
                  </li>)}
              </ul>
            </div>

            <p className="inline-block font-[family-name:var(--font-uncut-sans)] text-lg leading-7 md:text-xl" style={gradientJustControl}>
              {divPText}
            </p>
          </div>
        </div>
      </div>
    </section>;
}