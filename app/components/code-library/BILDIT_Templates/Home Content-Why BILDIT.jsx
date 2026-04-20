import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const title = $(title:String="");
const heading = $(heading:String="");
const subTitle= $(subTitle:String="");
const content= $(content:String="");
const videoLink = $(videoLink:String="")
export default function HomeContentWhyBildit(){
  return (
    <section className="px-4">
      <div className="container mx-auto mt-0 lg:mt-45 py-10 lg:py-20 lg:grid grid-cols-2 gap-10">
        <div>
          <p className='text-cms-rose text-xl font-medium font-gt-walsheim leading-none uppercase text-center lg:text-left'>
          {title}
          </p>
          <h2 className='text-4xl md:text-5xl lg:text-7xl  text-neutral-900 mt-3 font-gt-walsheim leading-none font-extrabold text-center lg:text-left'>
          {heading}
          </h2>
          <p className='text-xl lg:text-2xl xl:text-3xl font-medium text-zinc-600 leading-none font-gt-walsheim text-center lg:text-left'>
            {subTitle}
          </p>
        </div>
        <div className="mt-6 lg:mt-12 space-y-3">
          <p className="leading-normal text-lg text-zinc-600 font-normal text-center lg:text-left">
            {content}
          </p>
        </div>
      </div>
      <div className="flex justify-center relative">
        <video width="1085" controls>
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="h-1/2 w-full bg-gray-100 absolute bottom-0 left-0 -z-1"></div>
      </div>
    </section>
  )
}