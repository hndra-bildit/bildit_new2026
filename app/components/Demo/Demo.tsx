'use client'

import React from 'react'

import EditableBanner from './EditableBanner'

const Demo: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="font-gt-walsheim mb-8 text-center text-3xl font-extrabold text-neutral-900">
          Demo: Editable Banner
        </h2>
        <p className="mb-10 text-center text-zinc-600">
          Click on any text to edit. Use the popover to change text, apply bold/italic/underline, and
          adjust the background color.
        </p>
        <EditableBanner />
      </div>
    </section>
  )
}

export default Demo
