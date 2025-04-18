import BillingToggle from '@/app/components/BillingToggle'
import CMSFeaturesTable from '@/app/components/CMSFeatureTable'
import DisplayTwo from '@/app/components/DisplayTwo'
import FAQAccordion from '@/app/components/FAQAccordion'
import HeadingOne from '@/app/components/HeadingOne'
import PriceCard, { PriceCardItemType } from '@/app/components/PriceCard'
import SubTitleThree from '@/app/components/SubTitleThree'
import Image from 'next/image'

// To-do: should get from cms
const PriceCardItems: Array<PriceCardItemType> = [
  {
    isPopular: true,
    title: 'launch',
    content: 'For web sites or mobile apps with up to 600,000 visits annually. (10% discount for yearly).',
    url: '#',
    price: 500,
    subItems: [
      'Unlimited Users',
      'Unlimited Web Sites & Apps',
      'Unlimited Bandwidth',
      'Unlimited Storage',
      'Embedded DAM and Media Library',
      'Email Support'
    ]
  },
  {
    isPopular: false,
    title: 'Grow',
    content: 'For web sites or mobile apps with up to 4.5M visits annually. (10% discount for yearly).',
    url: '#',
    price: 3200,
    subItems: [
      'Unlimited Users',
      'Unlimited Web Sites & Apps',
      'Unlimited Bandwidth',
      'Unlimited Storage',
      'Embedded DAM and Media Library',
      'Email Support',
      'Dedicated Account Manager'
    ]
  },
  {
    isPopular: false,
    title: 'Pro',
    content: 'For web sites or mobile apps with up to 4.5M visits annually. (10% discount for yearly).',
    url: '#',
    price: 11000,
    subItems: ['All of the Features of Grow', 'Executive Sponsor', 'Uptime SLAs', 'Invoiced Billing', 'Slack Support']
  },
  {
    isPopular: false,
    title: 'Scale',
    content:
      'For large scale enterprises with a lot of traffic, we have custom options available with additional support hours, engineering, training, and implementation.',
    url: '#',
    subItems: [
      'All of the Features of Pro',
      'Discounted Implementation',
      '24 Hour Support',
      'Discounted Rate for Services',
      'Training'
    ]
  }
]

export default function Pricing() {
  return (
    <>
      <section className="pt-20 lg:pt-40 px-4">
        <Image
          src="/images/pricing/BILDIT_Pricing_BG.png"
          alt="BILDIT_Pricing_BG.png"
          width={1200}
          height={0}
          className="hidden lg:block absolute -z-1 top-0 left-0 w-full h-auto"
        />
        <Image
          src="/images/pricing/BILDIT_Pricing_Mobile_BG.png"
          className="lg:hidden absolute -z-1 top-0 left-0 w-full h-auto"
          alt="BILDIT_Pricing_Mobile_BG.png"
          width={1200}
          height={0}
        />
        <HeadingOne
          sub1="Launch"
          sub2="Faster"
          className1="text-center"
          className2="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-transparent bg-clip-text"
        />
        <SubTitleThree content="With Higher Impact Across Digital Marketing Channels." className="text-center" />
        <div className="py-10 lg:py-20">
          <BillingToggle />
        </div>
        <div className="container mx-auto grid justify-center md:grid-cols-2 xl:grid-cols-4 gap-[20px] flex-wrap">
          {PriceCardItems.map((item, key) => {
            return <PriceCard item={item} key={key} />
          })}
        </div>
      </section>

      <section className="container mx-auto py-10 lg:py-25 px-4">
        <CMSFeaturesTable />
      </section>
      <section className="relative py-10 lg:py-25 overflow-hidden px-4">
        <Image
          src="/images/pricing/BILDIT_Frequently_Ask_BG.png"
          className="lg:block hidden  absolute -z-1 top-0 w-full h-full"
          alt="BILDIT_Frequently_Ask_BG.png"
          width={1200}
          height={0}
        />
        <Image
          src="/images/pricing/BILDIT_Frequently_Ask_Mobile_BG.png"
          className="show lg:hidden absolute -z-1 top-0 left-0 w-full h-auto"
          alt="BILDIT_Frequently_Ask_Mobile_BG.png"
          width={1200}
          height={0}
        />
        <div className="container mx-auto xl:grid grid-cols-3">
          <div className="col-span-1">
            <DisplayTwo content="Frequently Ask Questions" className="text-center xl:text-left" />
          </div>
          <div className="col-span-2 pt-6 xl:pt-0">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  )
}
