import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const cardGroups = [
  {
    src: '/images/home/bildit-home-campaign-control.png',
    alt: 'Campaign_Control',
    title: 'Complete control over campaigns'
  },
  {
    src: '/images/home/bildit-home-advanced-mobile-capability.png',
    alt: 'bildit-home-advanced-mobile-capability',
    title: 'Advanced mobile app capabilities'
  },
  {
    src: '/images/home/bildit-home-easy-cross-channel.png',
    alt: 'bildit-home-easy-cross-channel',
    title: 'Easy cross-channel content management'
  }
];

const title = $(title:String="")
const heading = $(heading:String="")
const content = $(content:String="")

export default function HomeContentCmsOverView(){
  return (
    <section className="pt-20 lg:pt-50 bg-gray-100">
      <div className="container mx-auto px-4">
        <p className='text-cms-rose text-xl font-medium font-gt-walsheim leading-none uppercase text-center'>
          {title}
        </p>
        <h2 className='text-4xl md:text-5xl lg:text-7xl  text-neutral-900 mt-3 font-gt-walsheim leading-none font-extrabold text-center'>
          {heading}
        </h2>
        <p className='text-xl lg:text-2xl xl:text-3xl font-medium text-zinc-600 leading-none font-gt-walsheim text-center mt-3 lg:mt-5'>
          {content}
        </p>
        <div className="flex justify-center lg:justify-between flex-wrap pb-30">
          {
            cardGroups.map((item, key) => {
              return (
                <div className="max-w-[440px] w-full pt-12" key={key}>
                  <div className="flex justify-center py-20 border border-gray-200 rounded-xl bg-gray-100 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)]">
                    <div className="w-54 h-auto">
                      <Image src={item.src} alt={item.alt} width={1200} height={1200} className="w-full" />
                    </div>
                  </div>
                  <div>
                    <p className="mt-3 lg:mt-12 text-xl lg:text-4xl font-bold text-center font-gt-walsheim leading-none">
                      {item.title}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}