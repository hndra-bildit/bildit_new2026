import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const title = $(title:String="")
const firstTypo = $(firstTypo:String="")
const lastTypo = $(lastTypo:String="")
const subTitle = $(subTitle:String="")
const blogBgImage = $(blogBgImage:String="/images/blog-main/bildit-blog-main-bg.png")

export default function blogsTitle(){
  return (
    <section className="pt-20 lg:pt-40 px-4">
      <Image
        data-bildit-var-name="blogBgImage"
        data-bildit-var-type="String"
        src={blogBgImage}
        alt="bildit-blog-main-bg.png"
        className="w-full h-auto absolute top-0 left-0 -z-1"
        width={1200}
        height={0}
        priority 
      />
      <p className='text-cms-rose text-xl font-medium font-gt-walsheim leading-none uppercase text-center'>{title}</p>
      <h1 className='text-6xl lg:text-8xl xl:text-9xl leading-none font-gt-walsheim font-extrabold text-neutral-900 text-center xl:text-9xl'>
        {firstTypo} 
        <span className='bg-gradient-to-r from-cms-rose to-purple-700 bg-clip-text text-transparent'> {lastTypo} </span>
      </h1>
      <p className='text-xl lg:text-2xl xl:text-3xl font-medium text-zinc-600 leading-none font-gt-walsheim text-center mt-8'>
        {subTitle}
      </p>
    </section>
  )
}