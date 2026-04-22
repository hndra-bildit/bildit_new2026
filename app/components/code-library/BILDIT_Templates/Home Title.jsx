import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const firstTypo  = $(firstTypo:String="Modern");
const middleTypo = $(middleTypo:String="CMS");
const lastTypo   = $(lastTypo:String="Unified Storefront");

export default function HomeTitle(){

  return (
    <section className="pt-20 lg:pt-40 relative">
        <Image
          src="/images/home/bildit-home-bg.png"
          alt="bildit-home-bg.png"
          className="top-0 left-0 absolute -z-1 w-full h-full"
          width={1200}
          height={1200}
          priority 
        />
        <div className="container mx-auto">
          <h1 className='text-6xl lg:text-8xl xl:text-9xl leading-none font-gt-walsheim font-extrabold text-center lg:text-left'>
            {firstTypo} <span className="bg-gradient-to-r from-cms-rose to-purple-500 bg-clip-text text-transparent"> {middleTypo} </span>
            <br /> {lastTypo}
          </h1>
          <div className="lg:grid grid-cols-2 gap-6">
            <div>
              <div className="flex justify-center lg:justify-start space-x-7 mt-5 lg:mt-20">
              </div>
            </div>
            <div className="pt-6">
              <img alt="bildit-home-intro.png " src="/images/home/bildit-home-intro.png" className="w-auto"/>
            </div>
          </div>
        </div>
      </section>
  )
}