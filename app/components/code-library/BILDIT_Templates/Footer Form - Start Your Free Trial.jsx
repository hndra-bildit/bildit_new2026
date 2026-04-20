import { useState, useEffect } from 'react';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const title = $(title:String="")
const content = $(content:String="")
const link = $(link:String="")
const linkTitle = $(linkTitle:String="")
const formTitle = $(formTitle:String="")
const submitButtonTitle = $(submitButtonTitle:String="")

export default function footerContent(){
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email);
    
  };
  
  return (
    <section className="py-20 lg:py-30 px-4">
      <div className="container mx-auto lg:grid grid-cols-2 gap-15 items-center">
        {/* Left Section */}
        <div className="space-y-4 text-center lg:text-left">
          <h3 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-none font-gt-walsheim mb-0'>
            {title}
          </h3>
          <p className='text-lg leading-none lg:text-xl lg:leading-normal font-normal text-neutral-700'>
            {content}
          </p>
          <Link href={link} className='transition-all duration-500 border-3 border-neutral-500 px-4 py-2 xl:px-8 xl:py-2 rounded-full text-black bg-white cursor-pointer hover:bg-neutral-900 hover:text-white text-sm lg:text-base inline-block'>
            {linkTitle}
          </Link>
        </div>
        {/* Right Section - Form */}
        <div className="mt-12 lg:mt-0 p-9 lg:p-12 bg-gray-50 rounded-xl shadow-lg round-xl border border-gray-300">
          <form className="space-y-4 lg:space-y-8" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                value={fullName}
                placeholder="Full Name" 
                className='w-full p-2 lg:p-5 border border-gray-600 rounded-sm focus:outline-none focus:border-blue-500 text-sm lg:text-xl' 
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className='w-full p-2 lg:p-5 border border-gray-600 rounded-sm focus:outline-none focus:border-blue-500 text-sm lg:text-xl' 
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="md:grid grid-cols-2 gap-4 items-center mt-8 lg:mt-12 text-center">
              <div className="text-sm text-black font-gt-walsheim tracking-wide font-[14px]">
                {formTitle}
              </div>
              <button className='transition-all duration-500 border-2 border-gray-200 px-4 py-2 xl:px-7 xl:py-2 rounded-full text-white bg-neutral-900 cursor-pointer hover:bg-gray-200 hover:text-black hover:text-neutral-900 text-base outline-2 outline-neutral-900 w-full md:w-auto mt-3 lg:mt-0 lg:mx-right'>
                {submitButtonTitle}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}