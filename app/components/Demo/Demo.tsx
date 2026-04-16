'use client'

import React from 'react'
import EditableBanner from './EditableBanner'

const Demo: React.FC = () => {
  return (
    <section className="home-scheme-light w-full bg-neutral-50 py-16 md:py-20">
      <div className="mx-auto max-w-[1286px] px-6 md:px-10 lg:px-[116px]">
        <h2 className="mb-4 text-center font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight text-neutral-900 md:text-4xl lg:text-[40px] lg:leading-tight">
          Try out Live Preview
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center font-[family-name:var(--font-uncut-sans)] text-base leading-7 text-[#595959] md:text-lg">
          Click any text to edit. Use the popover for formatting and background color — the same kind of control you get
          in the real editor.
        </p>
        <div className="mx-auto max-w-4xl">
          <EditableBanner />
        </div>
      </div>
    </section>
  )
}

export default Demo
