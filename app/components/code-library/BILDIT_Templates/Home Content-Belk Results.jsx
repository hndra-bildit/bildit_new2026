import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const belkResults = [
  { src: '/images/home/BILDIT_Home_BelkResult_YOY.png', alt: 'BILDIT_Home_BelkResult_YOY.png' },
  { src: '/images/home/BILDIT_Home_BelkResult_AOV.png', alt: 'BILDIT_Home_BelkResult_AOV.png' },
  { src: '/images/home/BILDIT_Home_BelkResult_CVR.png', alt: 'BILDIT_Home_BelkResult_CVR.png' }
];

const title = $(tile:String="Belk Results");
const subTitle = $(subTitle:String="After Switching to the Visual Experience Engine and App");

export default function HomeContentBelkResults(){
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/others/BILDIT_Dot_Line_Effect_BG.png"
        alt="BILDIT_Dot_Line_Effect_BG.png"
        className="absolute top-0 left-0 z-1 w-auto h-auto"
        width={1200}
        height={1200}
      />
      <div className="py-10 lg:py-25 bg-gray-100 relative px-4 z-2">
        <h2 className='text-4xl md:text-5xl lg:text-7xl  text-neutral-900 mt-3 font-gt-walsheim leading-none font-extrabold text-center'>{title}</h2>
        <p className='text-xl lg:text-2xl xl:text-3xl font-medium text-zinc-600 leading-none font-gt-walsheim text-center mt-3 lg:mt-7'> {subTitle} </p>
        <div className="container mx-auto w-full flex justify-center lg:justify-between flex-wrap">
          {
            belkResults.map((item, key) => (
              <div className="w-60 lg:w-70 mt-5 lg:mt-15 mx-3 rounded-full overflow-hidden shadow-[0px_7px_16px_2px_rgba(0,0,0,0.1)]" key={key}>
                <Image src={item.src} alt={item.alt} width={1200} height={1200} className="w-full h-auto" />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}