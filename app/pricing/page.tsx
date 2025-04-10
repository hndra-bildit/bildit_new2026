import BG_Frequently_Ask_Mobile from '../../public/images/BG-Frequently-Ask-Mobile.png'
import BG_Frequently_Ask from '../../public/images/BG-Frequently-Ask.png'
import BG_Pricing from '../../public/images/BG_Pricing.png'
import BG_Pricing_Mobile from '../../public/images/BG_Pricing_Mobile.png'
import BillingToggle from '../components/BillingToggle'
import CMSFeaturesTable from '../components/CMSFeatureTable'
import DisplayTwo from '../components/DisplayTwo'
import FAQAccordion from '../components/FAQAccordion'
import HeadingOne from '../components/HeadingOne'
import PriceCard, { PriceCardItemType } from '../components/PriceCard'
import SubTitleThree from '../components/SubTitleThree'
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
      <section className="pt-[160px] px-4 lg:px-0">
        <Image
          src={BG_Pricing}
          className="hidden lg:block absolute z-[-1] top-0 left-0"
          alt="BG_Pricing.png"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={BG_Pricing_Mobile}
          className="lg:hidden absolute z-[-1] top-0 left-0"
          alt="BG_Pricing_Mobile.png"
          style={{ width: '100%', height: 'auto' }}
        />
        <HeadingOne
          sub1="Launch"
          sub2="Faster"
          className1="text-center"
          className2="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-transparent bg-clip-text"
        />
        <SubTitleThree content="With Higher Impact Across Digital Marketing Channels." className="text-center" />
        <div className="py-[80px]">
          <BillingToggle />
        </div>
        <div className="container mx-auto grid justify-center md:grid-cols-2 xl:grid-cols-4 gap-[20px] flex-wrap">
          {PriceCardItems.map((item, key) => {
            return <PriceCard item={item} key={key} />
          })}
        </div>
      </section>

      <section className="container mx-auto py-[100px] px-4 lg:px-0">
        <CMSFeaturesTable />
      </section>
      <section className="relative py-[100px] overflow-hidden px-4 lg:px-0">
        <Image
          src={BG_Frequently_Ask}
          className="lg:block hidden  absolute z-[-1] top-0 "
          alt="BG_Frequently_Ask.png"
          style={{ width: '100%', height: '100%' }}
        />
        <Image
          src={BG_Frequently_Ask_Mobile}
          className="show lg:hidden absolute z-[-1] top-0 left-0"
          alt="BG_Frequently_Ask.png"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="container mx-auto xl:grid grid-cols-3">
          <div className="col-span-1">
            <DisplayTwo content="Frequently Ask Questions" className="text-center xl:text-left" />
          </div>
          <div className="col-span-2 pt-[50px] xl:pt-0">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  )
}
