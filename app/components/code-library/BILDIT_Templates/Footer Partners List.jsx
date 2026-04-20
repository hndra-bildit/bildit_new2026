import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const title = $(title:String="")
const content = $(content:String="")
const partners = [
  { name: 'salesforce', src: '/images/footer/salesforce.svg', alt: 'salesforce.svg', width: 102, height: 80 , href:"#" },
  { name: 'shopify', src: '/images/footer/shopify.svg', alt: 'shopify.svg', width: 177, height: 45 , href:"#" },
  { name: 'sap', src: '/images/footer/sap.svg', alt: 'sap.svg', width: 112, height: 50 , href:"#" },
  { name: 'magento', src: '/images/footer/magento.svg', alt: 'magento.svg', width: 167, height: 46 , href:"#" },
  { name: 'apple-pay', src: '/images/footer/apple-pay.svg', alt: 'apple-pay.svg', width: 91, height: 37 , href:"#" },
  { name: 'after-pay', src: '/images/footer/after-pay.svg', alt: 'after-pay.svg', width: 166, height: 31 , href:"#" },
  { name: 'aci', src: '/images/footer/aci.svg', alt: 'aci.svg', width: 208, height: 32 , href:"#" }
]
export default function FooterContent(){
  return (
    <section className="py-25 bg-gray-100 px-4">
      <div className="container mx-auto">
        <h3 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-none font-gt-walsheim mb-0 text-center'>
          {title}
        </h3>
        <p className='py-12 uppercase text-zinc-600 text-center font-base lg:text-2xl leading-none font-gt-walsheim'>
          {content}
        </p>
        <div className="flex justify-center">
          <div className="text-center grid  2xl:flex 2xl:item-center grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((item, key) => {
              return (
                <div key={key} className="text-center flex items-center">
                  <Link href={item.href} className="inline-block">
                    <Image alt={item.alt} src={item.src} width={item.width} height={item.height} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}