'use client'

import React, { useState } from 'react'
import TextBtnL from './TextBtnL'

const BillingToggle: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex rounded-full bg-white p-[10px] shadow-md">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-[30px] py-1 rounded-full transition-all duration-200 cursor-pointer ${
            billingCycle === 'monthly' ? 'bg-black-one text-white' : 'text-gray-500 hover:text-black-one'
          }`}
        >
          <TextBtnL content="Monthly" />
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-[30px] py-[8px] rounded-full transition-all duration-200 cursor-pointer ${
            billingCycle === 'yearly' ? 'bg-black-one text-white' : 'text-gray-500 hover:text-black-one'
          }`}
        >
          <TextBtnL content="Yearly" />
        </button>
      </div>
    </div>
  )
}

export default BillingToggle
