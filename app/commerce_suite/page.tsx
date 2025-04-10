import BG_CommerceSuite from '../../public/images/BG_CommerceSuite.png'
import BG_CommerceSuite_Mobile from '../../public/images/BG_CommerceSuite_Mobile.png'
import BG_Commerce_Suite_Why_Bildit from '../../public/images/BG_Commerce_Suite_Why_Bildit.png'
import BG_Commerce_Suite_Why_Bildit_Mobile from '../../public/images/BG_Commerce_Suite_Why_Bildit_Mobile.png'
import BG_Left_Circle from '../../public/images/BG_Left_Circle.png'
import BG_Right_Circle from '../../public/images/BG_Right_Circle.png'
import BodyOne from '../components/BodyOne'
import HeadingOne from '../components/HeadingOne'
import HeadingTwo from '../components/HeadingTwo'
import SectionCard, { SectionCardType } from '../components/SectionCard'
import SubTitleThree from '../components/SubTitleThree'
import Image from 'next/image'

// @todo: should come from cms
const CardItems: Array<SectionCardType> = [
  {
    title: 'Integrations',
    head: 'Integrations That Work Effortlessly',
    content:
      'Connect your CMS with popular platforms, payment gateways, and tools, ensuring a smooth workflow tailored to your needs.',
    src: 'Group19533.png',
    alt: 'Group19533.png',
    dir: false
  },
  {
    title: 'Native Checkout',
    head: 'One-Tap Checkout in Your App',
    content:
      "Offer your customers a seamless one-tap checkout solution that's fast, intuitive, and built for conversions-on both mobile apps and websites.",
    src: 'Group19479.png',
    alt: 'Group19479.png',
    dir: true
  },
  {
    title: 'Apple App Clips SDK',
    head: 'App Clips for Instant Access',
    content:
      'Enable users to engage with your store immediately, without downloading a full app, creating frictionless experiences that boost engagement.',
    src: 'Group19478.png',
    alt: 'Group19478.png',
    dir: false
  },
  {
    title: 'BILDIT CMS',
    head: 'Content Management System Made Simple',
    content:
      'Manage your promotions, banners, contents, product listings, and more in one place. Updates sync instantly across both your mobile app and website, delivering a unified brand experience.',
    src: 'Group19477.png',
    alt: 'Group19477.png',
    dir: true
  }
]

export default function CommerceSuite() {
  return (
    <div className="text-center lg:text-left">
      <section className="pt-[175px] lg:pb-[100px] px-[16px] lg:px-0">
        <Image
          src={BG_CommerceSuite}
          className="absolute hidden lg:block top-0 left-0 z-[-1]"
          alt="BG_CommerceSuite.png"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={BG_CommerceSuite_Mobile}
          className="absolute block lg:hidden top-0 left-0 z-[-1]"
          alt="BG_CommerceSuite_Mobile.png"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="container mx-auto lg:grid grid-cols-2 gap-[60px] items-center">
          <div>
            <HeadingOne
              sub1="Commerce"
              sub2="Suite"
              className1="tracking-[2%]"
              className2="bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 bg-clip-text text-transparent" //from-[#3B1EED] via-[#ED1E79] via-[#EB67A1] via-[#ED1E79] to-[#ED1E79] bg-clip-text text-transparent
            />
            <SubTitleThree content="Unleash the Power of Commerce Suite with Our CMS" className="mt-[30px]" />
            <BodyOne
              className="text-grey my-[20px]"
              content="Say goodbye to the hassle of juggling multiple tools. Our cutting-edge CMS brings everything you need into one seamless platform, designed for modern e-commerce businesses."
            />
          </div>
          <div className="flex justify-center">
            <Image src="/images/Hero_Image.png" alt="Hero_Image.png" width={604} height={493} />
          </div>
        </div>

        {CardItems.map((item, key) => {
          return (
            <div className="relative" key={key}>
              {key === 1 && (
                <Image
                  src={BG_Right_Circle}
                  className="hidden lg:block absolute bottom-0 right-0 z-[-1]"
                  alt="BG_Right_Circle.png"
                  style={{ width: 'auto', height: 'auto' }}
                />
              )}
              {key === 2 && (
                <Image
                  src={BG_Left_Circle}
                  className="hidden lg:block absolute top-50 left-0 z-[-1]"
                  alt="BG_Left_Circle.png"
                  style={{ width: 'auto', height: 'auto' }}
                />
              )}
              <SectionCard item={item} key={key} />
            </div>
          )
        })}
      </section>

      <section className="mt-[90px] lg:mt-[200px] py-12 lg:py-[100px] bg-center px-4 lg:px-0 relative">
        <Image
          src={BG_Commerce_Suite_Why_Bildit}
          className="hidden lg:block absolute top-0 left-0 z-[-1]"
          alt="BG_Commerce_Suite_Why_Bildit.png"
          style={{ width: '100%', height: '100%' }}
        />
        <Image
          src={BG_Commerce_Suite_Why_Bildit_Mobile}
          className="block lg:hidden absolute top-0 left-0 z-[-1]"
          alt="BG_Commerce_Suite_Why_Bildit_Mobile"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="container mx-auto">
          <HeadingTwo content="Why Choose BILDIT?" className="text-center text-white lg:pt-[40px]" />
          <div className="lg:grid grid-cols-4 justify-center">
            <div className="py-12 lg:py-[100px] order-2 col-span-2 flex justify-center">
              <Image src="/images/Group19470.png" alt="Group19470.png" width={600} height={575} />
            </div>
            <div className="flex flex-col justify-around items-end order-1col-span-1">
              <p className="font-400 text-[20px] lg:text-[24px] leading-[24px] mt-[44px] lg:leading-[34px] text-white">
                Future-Ready Technology: Designed to scale with your business and adapt to evolving e-commerce trends.
              </p>
              <p className="font-400 text-[20px] lg:text-[24px] leading-[24px] mt-[44px] leading-[34px] text-white">
                Customer-Centric Features: From native checkout to App Clips, we prioritize enhancing your customer
                experience.
              </p>
            </div>
            <div className="flex flex-col justify-around order-2 col-span-1 text-center lg:text-left">
              <p className="font-400 text-[20px] lg:text-[24px] leading-[24px] mt-[44px] lg:leading-[34px] text-white">
                Seamless Integration: A unified platform that effortlessly bridges mobile apps and websites..
              </p>
              <p className="font-400 text-[20px] lg:text-[24px] leading-[24px] mt-[44px] lg:leading-[34px] text-white">
                Time-Saving Simplicity: Manage everything from content to commerce in one intuitive platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
