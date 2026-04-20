import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const title = $(title:String="One backend. One unified solution.")
const heading = $(heading:String="Effortlessly create sophisticated content for web and mobile")
const content = $(content:String="One CMS platform. Endless possibilities to create stunning images, banners, recommendations, animations and customized display configurations.")

export default function HomeContentCmsOverViewThird(){
  return(
    <section className="py-25 relative px-4">
      <Image
        src="/images/home/BILDIT_Home_Unified_Solution_BG.png"
        alt="BILDIT_Home_Unified_Solution_BG.png"
        className="top-0 left-0 absolute -z-1 w-full h-full hidden lg:block"
        width={1200}
        height={1200}
      />
      <Image
        src="/images/home/BILDIT_Home_Unified_Solution_Mobile_BG.png"
        alt="BILDIT_Home_Unified_Solution_Mobile_BG.png"
        className="top-0 left-0 absolute -z-1 w-full h-full lg:hidden"
        width={1200}
        height={1200}
      />
      <div className='container mx-auto lg:grid grid-cols-[65%_auto] items-center justify-center'>
        <div className="max-w-4xl">
          <p className='text-cms-rose text-xl font-medium font-gt-walsheim leading-none uppercase text-center lg:text-left'>
            {title}
          </p>
          <h2 className='text-4xl lg:text-7xl text-black font-gt-walsheim font-extrabold leading-none text-white mt-4 text-center lg:text-left'>
            {heading}
          </h2>
          <p className="text-lg leading-none lg:text-xl lg:leading-normal font-normal text-gray-300 mt-8 text-center lg:text-left">
            {content}
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/home/BILDIT_Home_Unified_Solution_Image.png"
            alt="BILDIT_Home_Unified_Solution_Image.png"
            className="w-full h-auto"
            width={1200}
            height={1200}
          />
        </div>
      </div>
    </section>
  )
}