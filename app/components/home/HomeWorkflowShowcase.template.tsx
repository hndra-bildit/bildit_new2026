'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Right-hand panel art: add PNGs (or WebP — update extensions below) exported from Figma.
 *
 * - panel-build: frame `5028:28094` (browser mock in “Build visually”) — or crop from `5028:28054`
 * - panel-preview: frame `5076:18759` (“Preview instantly”)
 * - panel-publish: frame `5076:19001` (“Publish immediately”)
 *
 * Place files in `public/home-workflow/`. Export at 2× if you want sharp retina output.
 */
import { cmsDependencies } from "@/cmsDependencies";
const {
  cn
} = cmsDependencies["@/utils/cn"].module;
const {
  Eye,
  PenLine,
  Rocket
} = cmsDependencies["lucide-react"].module;
// group { 1. STEPS (build) }
const firstId = $(firstId:String='build');
const firstTitle = $(firstTitle:RichText='Build visually');
const firstDescription = $(firstDescription:RichText='Templates with real brand control. Type. Color. Layout. Precision.');
const firstPanelSource = $(firstPanelSource:String='/home-workflow/panel-build.png');
const firstPanelAlt = $(firstPanelAlt:String='BILDIT live editor: build storefront content visually');
const firstPanelWidth = $(firstPanelWidth:Number=1004);
const firstPanelHeight = $(firstPanelHeight:Number=644); // endgroup
// group { 2. STEPS (preview) }
const secondId = $(secondId:String='preview');
const secondTitle = $(secondTitle:RichText='Preview instantly');
const secondDescription = $(secondDescription:RichText='See exactly what users see. Before it goes live. No surprises.');
const secondPanelSource = $(secondPanelSource:String='/home-workflow/panel-preview.png');
const secondPanelAlt = $(secondPanelAlt:String='Storefront preview across desktop, tablet, and mobile');
const secondPanelWidth = $(secondPanelWidth:Number=920);
const secondPanelHeight = $(secondPanelHeight:Number=562); // endgroup
// group { 3. STEPS (publish) }
const thirdId = $(thirdId:String='publish');
const thirdTitle = $(thirdTitle:RichText='Publish immediately');
const thirdDescription = $(thirdDescription:RichText='No deploy cycle. No coordination overhead. No waiting.');
const thirdPanelSource = $(thirdPanelSource:String='/home-workflow/panel-publish.png');
const thirdPanelAlt = $(thirdPanelAlt:String='Publish changes to the live site without a dev ticket');
const thirdPanelWidth = $(thirdPanelWidth:Number=920);
const thirdPanelHeight = $(thirdPanelHeight:Number=562); // endgroup
const STEPS = [{
  id: firstId,
  title: firstTitle,
  description: firstDescription,
  Icon: PenLine,
  panelSrc: firstPanelSource,
  panelAlt: firstPanelAlt,
  panelWidth: firstPanelWidth,
  panelHeight: firstPanelHeight
}, {
  id: secondId,
  title: secondTitle,
  description: secondDescription,
  Icon: Eye,
  panelSrc: secondPanelSource,
  panelAlt: secondPanelAlt,
  panelWidth: secondPanelWidth,
  panelHeight: secondPanelHeight
}, {
  id: thirdId,
  title: thirdTitle,
  description: thirdDescription,
  Icon: Rocket,
  panelSrc: thirdPanelSource,
  panelAlt: thirdPanelAlt,
  panelWidth: thirdPanelWidth,
  panelHeight: thirdPanelHeight
}] as const;
export function HomeWorkflowShowcase({
  className
}: {
  className?: string;
}) {
  // group { 1. General }
  const divSpanRoundedCornersToggle = $(divSpanRoundedCornersToggle:Boolean=true); // endgroup
  // group { 2. div }
  const sectionDivRoundedCornersToggle = $(sectionDivRoundedCornersToggle:Boolean=true); // endgroup
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  return <section className={cn('home-scheme-light relative overflow-hidden bg-white', className)}>
      <div className="relative mx-auto max-w-[1286px] px-6 py-16 md:px-10 md:py-24 lg:px-[116px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[60px] lg:items-start">
          <div className="flex w-full shrink-0 flex-col gap-10 lg:w-[300px] lg:gap-[50px]" role="tablist" aria-label="Workflow steps">
            {STEPS.map((s, index) => {
            const selected = index === active;
            const Icon = s.Icon;
            return <button key={s.id} type="button" role="tab" id={`workflow-tab-${s.id}`} aria-selected={selected} aria-controls={`workflow-panel-${s.id}`} tabIndex={selected ? 0 : -1} onClick={() => setActive(index)} className={cn('relative w-full rounded-2xl border border-[rgba(200,80,240,0.15)] p-2.5 text-left backdrop-blur-[10px] transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-[#c850f0] focus-visible:ring-offset-2', selected ? 'bg-[#f3f0ff] shadow-[0px_0px_20px_rgba(200,80,240,0.12)]' : 'bg-white/70 hover:bg-white')}>
                  <div className="flex flex-col gap-2.5 pr-10">
                    <div className="flex items-center gap-2.5">
                      <span className={`flex p-2.5 text-[#431782] ${divSpanRoundedCornersToggle ? "rounded-xl" : ""}`}>
                        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="font-[family-name:var(--font-uncut-sans)] text-lg font-bold leading-7 text-[#171717]">
                        {s.title}
                      </span>
                    </div>
                    <p className="font-[family-name:var(--font-uncut-sans)] text-base font-light leading-6 text-neutral-600">
                      {s.description}
                    </p>
                  </div>
                  <span className="pointer-events-none absolute right-2 top-2 font-[family-name:var(--font-uncut-sans)] text-5xl font-bold leading-none text-[rgba(23,23,23,0.15)]" aria-hidden>
                    {index + 1}
                  </span>
                </button>;
          })}
          </div>

          <div className="min-w-0 flex-1" role="tabpanel" id={`workflow-panel-${step.id}`} aria-labelledby={`workflow-tab-${step.id}`}>
            <div className={`overflow-hidden -[22px] border border-[rgba(200,80,240,0.16)] bg-white shadow-[0px_0px_25px_0px_rgba(200,80,240,0.1),0px_0px_40px_0px_rgba(232,69,144,0.08)] ${sectionDivRoundedCornersToggle ? "rounded" : ""}`}>
              <Image src={step.panelSrc} alt={step.panelAlt} width={step.panelWidth} height={step.panelHeight} className="h-auto w-full object-contain object-top" sizes="(max-width: 1024px) 100vw, min(924px, 100vw)" priority={active === 0} />
            </div>
          </div>
        </div>
      </div>
    </section>;
}
export default HomeWorkflowShowcase;