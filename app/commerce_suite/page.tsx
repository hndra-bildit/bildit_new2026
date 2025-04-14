import BILDIT_CommerceSuite_BG from '../../public/images/commerce_suite/BILDIT_CommerceSuite_BG.png'
import BILDIT_CommerceSuite_Mobile_BG from '../../public/images/commerce_suite/BILDIT_CommerceSuite_Mobile_BG.png'
import BILDIT_Commerce_Suite_Why_BG from '../../public/images/commerce_suite/BILDIT_Commerce_Suite_Why_BG.png'
import BILDIT_Commerce_Suite_Why_Bildit_Mobile_BG from '../../public/images/commerce_suite/BILDIT_Commerce_Suite_Why_Bildit_Mobile_BG .png'
import BILDIT_Dot_Left_Middle_Effect_BG from '../../public/images/others/BILDIT_Dot_Left_Middle_Effect_BG.png'
import BILDIT_Dot_Right_Middle_Effect_BG from '../../public/images/others/BILDIT_Dot_Right_Middle_Effect_BG.png'
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
    src: '/images/commerce_suite/BILDIT_Integration_With_Other_Platforms.png',
    alt: 'BILDIT_Integration_With_Other_Platforms.png',
    dir: false
  },
  {
    title: 'Native Checkout',
    head: 'One-Tap Checkout in Your App',
    content:
      "Offer your customers a seamless one-tap checkout solution that's fast, intuitive, and built for conversions-on both mobile apps and websites.",
    src: '/images/commerce_suite/BILDIT_Native_Checkout.png',
    alt: 'BILDIT_Native_Checkout.png',
    dir: true
  },
  {
    title: 'Apple App Clips SDK',
    head: 'App Clips for Instant Access',
    content:
      'Enable users to engage with your store immediately, without downloading a full app, creating frictionless experiences that boost engagement.',
    src: '/images/commerce_suite/BILDIT_App_Clips.png',
    alt: 'BILDIT_App_Clips.png',
    dir: false
  },
  {
    title: 'BILDIT CMS',
    head: 'Content Management System Made Simple',
    content:
      'Manage your promotions, banners, contents, product listings, and more in one place. Updates sync instantly across both your mobile app and website, delivering a unified brand experience.',
    src: '/images/commerce_suite/BILDIT_CMS_Benefit.png',
    alt: 'BILDIT_CMS_Benefit.png',
    dir: true
  }
]

export default function CommerceSuite() {
  return (
    <div className="text-center lg:text-left">
      <section className="pt-[175px] lg:pb-[100px] px-[16px] lg:px-0">
        <Image
          src={BILDIT_CommerceSuite_BG}
          className="absolute hidden lg:block top-0 left-0 z-[-1]"
          alt="BILDIT_CommerceSuite_BG.png"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={BILDIT_CommerceSuite_Mobile_BG}
          className="absolute block lg:hidden top-0 left-0 z-[-1]"
          alt="BILDIT_CommerceSuite_Mobile_BG.png"
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
              className="text-cms-grey my-[20px]"
              content="Say goodbye to the hassle of juggling multiple tools. Our cutting-edge CMS brings everything you need into one seamless platform, designed for modern e-commerce businesses."
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/commerce_suite/BILDIT_CommerceSuite_Intro.png"
              alt="BILDIT_CommerceSuite_Intro.png"
              width={604}
              height={493}
            />
          </div>
        </div>

        {CardItems.map((item, key) => {
          return (
            <div className="relative" key={key}>
              {key === 1 && (
                <Image
                  src={BILDIT_Dot_Right_Middle_Effect_BG}
                  className="hidden lg:block absolute bottom-0 right-0 z-[-1]"
                  alt="BILDIT_Dot_Right_Middle_Effect_BG.png"
                  style={{ width: 'auto', height: 'auto' }}
                />
              )}
              {key === 2 && (
                <Image
                  src={BILDIT_Dot_Left_Middle_Effect_BG}
                  className="hidden lg:block absolute top-50 left-0 z-[-1]"
                  alt="BILDIT_Dot_Left_Middle_Effect_BG.png.png"
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
          src={BILDIT_Commerce_Suite_Why_BG}
          className="hidden lg:block absolute top-0 left-0 z-[-1]"
          alt="BILDIT_Commerce_Suite_Why_BG.png"
          style={{ width: '100%', height: '100%' }}
        />
        <Image
          src={BILDIT_Commerce_Suite_Why_Bildit_Mobile_BG}
          className="block lg:hidden absolute top-0 left-0 z-[-1]"
          alt="BILDIT_Commerce_Suite_Why_Bildit_Mobile_BG"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="container mx-auto">
          <HeadingTwo content="Why Choose BILDIT?" className="text-center text-white lg:pt-[40px]" />
          <div className="lg:grid grid-cols-4 justify-center">
            <div className="py-12 lg:py-[100px] order-2 col-span-2 flex justify-center">
              <Image
                src="/images/commerce_suite/BILDIT_Why_Choose_BILDIT.png"
                alt="BILDIT_Why_Choose_BILDIT.png"
                width={600}
                height={575}
              />
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
