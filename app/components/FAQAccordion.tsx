'use client'

import React, { useState } from 'react'
import SubTitleFour from './SubTitleFour'
import { Plus, Minus } from 'lucide-react'

const questions = [
  'Question one goes here',
  'Question two goes here',
  'Question three goes here',
  'Question four goes here',
  'Question five goes here'
]

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full mx-auto px-4 bg-white">
      {questions.map((question, index) => (
        <div key={index} className="border-b border-gray-200 py-[30px] cursor-pointer">
          <div className="flex items-center justify-between text-black-one font-medium" onClick={() => toggle(index)}>
            <SubTitleFour content={`${index + 1}. ${question}`} />
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-gray-500" />
            ) : (
              <Plus className="w-5 h-5 text-gray-500" />
            )}
          </div>
          {openIndex === index && (
            <div className="text-sm text-gray-600 mt-2">This is the answer or content for the question.</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
