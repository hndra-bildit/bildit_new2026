'use client'

import React, { useState } from 'react'
import TextBtnL from './TextBtnL'

const BillingToggle: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex rounded-full bg-white p-2 shadow-md">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-8 py-1 rounded-full transition-all duration-200 cursor-pointer ${
            billingCycle === 'monthly' ? 'bg-neutral-900 text-white' : 'text-gray-500 hover:text-neutral-900'
          }`}
        >
          <TextBtnL content="Monthly" />
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-8 py-2rounded-full transition-all duration-200 cursor-pointer ${
            billingCycle === 'yearly' ? 'bg-neutral-900 text-white' : 'text-gray-500 hover:text-neutral-900'
          }`}
        >
          <TextBtnL content="Yearly" />
        </button>
      </div>
    </div>
  )
}

export default BillingToggle
