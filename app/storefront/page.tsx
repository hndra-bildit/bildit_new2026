import BILDIT_Dot_Left_Middle_Effect_BG from '../../public/images/others/BILDIT_Dot_Left_Middle_Effect_BG.png'
import BILDIT_Dot_Line_Effect_BG from '../../public/images/others/BILDIT_Dot_Line_Effect_BG.png'
import BILDIT_Dot_Right_Middle_Effect_BG from '../../public/images/others/BILDIT_Dot_Right_Middle_Effect_BG.png'
import BILDIT_Store_Front_BG from '../../public/images/store_front/BILDIT_Store_Front_BG.png'
import BILDIT_Store_Front_Technical_Detail_BG from '../../public/images/store_front/BILDIT_Store_Front_Technical_Detail_BG.png'
import BenefitIcon, { IconItemsType } from '../components/BenefitIcon'
import BodyTwo from '../components/BodyTwo'
import CardOne from '../components/CardOne'
import { CardItemsType } from '../components/CardOne'
import CardTwo from '../components/CardTwo'
import DisplayOne from '../components/DisplayOne'
import DisplayThree from '../components/DisplayThree'
import HeadingOne from '../components/HeadingOne'
import IntroVideo from '../components/IntroVideo'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import SubTitleFiveCaps from '../components/SubTitleFiveCaps'
import SubTitleThree from '../components/SubTitleThree'
import SwiperCarousel from '../components/SwiperCarousel'
import Image from 'next/image'

// to-do: should come from CMS
const IconItems: Array<IconItemsType> = [
  {
    src: '/images/store_front/BILDIT_Repeat_Purchase.svg',
    alt: 'BILDIT_Repeat_Purchase.svg',
    content: 'Repeat Purchases'
  },
  {
    src: '/images/store_front/BILDIT_Increase_in_AOV.svg',
    alt: 'BILDIT_Increase_in_AOV.svg',
    content: 'Increase in AOV'
  },
  {
    src: '/images/store_front/BILDIT_Increase_in_CVR.svg',
    alt: 'BILDIT_Increase_in_CVR.svg',
    content: 'Increase in CVR'
  }
]
const CardItems: Array<CardItemsType> = [
  {
    src: '/images/store_front/BILDIT_Unified_Management.svg',
    alt: 'BILDIT_Unified_Management.svg',
    title: 'Unified Management',
    content: 'Manage content in one place both for mobile apps and websites.'
  },
  {
    src: '/images/store_front/BILDIT_Improved_Efficiency.svg',
    alt: 'BILDIT_Improved_Efficiency.svg',
    title: 'Improved Efficiency',
    content: 'Reduces friction, duplication, and saves time.'
  },
  {
    src: '/images/store_front/BILDIT_Consistency.svg',
    alt: 'BILDIT_Consistency.svg',
    title: 'Consistency',
    content: 'Ensures a cohesive user experience across platforms.'
  },
  {
    src: '/images/store_front/BILDIT_Scalability.svg',
    alt: 'BILDIT_Scalability.svg',
    title: 'Scalability',
    content: 'Effortlessly scales from SMEs to global enterprises.'
  }
]
const UnLockCardItems: Array<CardItemsType> = [
  {
    src: '/images/store_front/BILDIT_Content_Syncing.png',
    alt: 'BILDIT_Content_Syncing.png',
    title: 'Content Syncing',
    content:
      'Ensure real-time updates for products, promotions, and content across your website and mobile app, maintaining perfect synchronization.'
  },
  {
    src: '/images/store_front/BILDIT_Customizable_Templates.png',
    alt: 'BILDIT_Customizable_Templates.png',
    title: 'Customizable Templates',
    content:
      'Design storefronts and content layouts tailored to your brand, with easy-to-use templates that offer flexibility and control.'
  },
  {
    src: '/images/store_front/BILDIT_Analytics_Dashboard.png',
    alt: 'BILDIT_Analytics_Dashboard.png',
    title: 'Analytics Dashboard',
    content:
      'Gain valuable insights into your app and website performance with detailed analytics, including traffic, sales, and customer behavior.'
  },
  {
    src: '/images/store_front/BILDIT_Testing_Features.png',
    alt: 'BILDIT_Testing_Features.png',
    title: 'A/B Testing Features',
    content:
      'Optimize your e-commerce experience with A/B testing for banners, layouts, and promotions to see what works best for your audience.'
  },
  {
    src: '/images/store_front/BILDIT_Integration_with_Best.png',
    alt: 'BILDIT_Integration_with_Best.png',
    title: 'Integration with Best in Class ECommerce Platforms',
    content:
      'Seamlessly integrate with best in class platforms like payment gateways, CRMs, and marketing tools to enhance functionality.'
  }
]
const RealWorldCardItems: Array<CardItemsType> = [
  {
    src: '/images/store_front/BILDIT_Banner_Integration.png',
    alt: 'BILDIT_Banner_Integration.png',
    title: 'Banner Integration Across Platforms',
    content:
      'An online clothing retailer used our CMS to design and deploy promotional banners that instantly synced between their mobile app and website. As a result, they saw a 30% increase in user engagement during their seasonal sale.'
  },
  {
    src: '/images/store_front/BILDIT_Native_Checkout.png',
    alt: 'BILDIT_Native_Checkout.png',
    title: 'Native Checkout with One Tap',
    content:
      'A beauty brand streamlined their checkout process using our one-tap native checkout feature. Customers loved the seamless experience, leading to a 40% boost in mobile app conversions.'
  },
  {
    src: '/images/store_front/BILDIT_Customized_Storefront.png',
    alt: 'BILDIT_Customized_Storefront.png',
    title: 'Customized Storefront for Personalization',
    content:
      'A global electronics store used our CMS to create a highly customized storefront tailored to different customer segments. By delivering personalized recommendations, they improved their average order value by 20%.'
  },
  {
    src: '/images/store_front/BILDIT_App_Clips.png',
    alt: 'BILDIT_App_Clips.png',
    title: 'App Clips for Instant Shopping',
    content:
      'A local grocery chain leveraged our CMS-powered app clips to allow customers to shop instantly without downloading the full app. This convenience increased first-time user transactions by 50%.'
  }
]

export default function StoreFront() {
  return (
    <div>
      <section className="pt-[160px] text-center px-4 lg:px-0">
        <Image
          src={BILDIT_Store_Front_BG}
          alt="BILDIT_Store_Front_BG.png"
          className="top-0 left-0 absolute -z-1"
          style={{ width: '100%', height: 'auto' }}
        />
        <HeadingOne
          sub1={'BILDIT'}
          sub2={'Storefront'}
          className1={'text-center'}
          className2={'bg-gradient-to-r from-pink-300 via-pink-500 to-purple-400 text-transparent bg-clip-text'}
        />
        <SubTitleThree
          content={'Stop building, start launching—we`ve done the work for you!'}
          className={'text-center'}
        />
        <div className="mt-[80px] text-center">
          <PrimaryButton content="Get Started" />
        </div>
        <div className="mt-[73px] flex justify-center">
          <IntroVideo src={'/images/others/BILDIT_Blank.png'} />
        </div>
      </section>

      <section className="container mx-auto mt-[210px] mb-[200px] text-center px-4 lg:px-0">
        <SubTitleFiveCaps content={'Key Benefits'} className={'text-center'} />
        <div className="max-w-[928px] inline-block">
          <DisplayOne
            content={'Revolutionizing E-commerce Management: The Perks'}
            className={'text-cms-black-one text-center mt-[10px]'}
          />
        </div>
        <div className="flex justify-center flex-wrap">
          {CardItems.map((item, key) => {
            return <CardOne item={item} key={key} />
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-0">
        <DisplayOne content={'Why Mobile App is important?'} className="text-center" />
        <SubTitleThree content={'33% of daily waking hours spent in mobile app.'} className={'mt-5 text-center'} />
        <div className="flex flex-wrap justify-around pt-[80px]">
          {IconItems.map((item, key) => {
            return <BenefitIcon item={item} key={key} />
          })}
        </div>
        <div className="text-center my-[160px]">
          <PrimaryButton content={'Calculate ROI'} />
        </div>
      </section>
      <section className="py-[200px]  relative px-4 lg:px-0">
        <Image
          src={BILDIT_Dot_Left_Middle_Effect_BG}
          alt="BILDIT_Dot_Left_Middle_Effect_BG.png"
          className="absolute inset-y-0 left-0 -z-1"
          style={{ width: 'auto', height: 'auto' }}
        />
        <div className="container mx-auto">
          <SubTitleFiveCaps content={'App and Website'} />
          <DisplayOne content={'Unlock the Full Potential of Your Storefront'} className={'max-w-[1000px]'} />
          <div className="mt-12">
            <div className="lg:grid grid-cols-2 space-x-[60px]">
              <CardTwo item={UnLockCardItems[0]} />
              <CardTwo item={UnLockCardItems[1]} />
            </div>
            <div className="xl:grid grid-cols-3 space-x-10 mt-10">
              {[1, 2, 3].map((_, idx) => {
                return <CardTwo item={UnLockCardItems[Number(idx) + 2]} key={idx} />
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 lg:px-0">
        <Image
          src={BILDIT_Dot_Right_Middle_Effect_BG}
          alt="BILDIT_Dot_Right_Middle_Effect_BG.png"
          className="absolute bottom-0 right-0 right-0 -z-1"
          style={{ width: 'auto', height: 'auto' }}
        />
        <div className="container mx-auto py-[200px]">
          <SubTitleFiveCaps content={'Real-World Examples'} />
          <DisplayOne content={'Transforming E-commerce Operations'} className={'max-w-[879px]'} />
          <div className="grid grid-cols-2 gap-10 mt-12">
            {RealWorldCardItems.map((item, key) => {
              return <CardTwo item={item} className={'mb-8'} key={key} />
            })}
          </div>
        </div>
      </section>

      <section className="relative  py-[100px] px-4 lg:px-0">
        <Image
          src={BILDIT_Dot_Line_Effect_BG}
          alt="BILDIT_Dot_Line_Effect_BG.png"
          className="top-0 left-0 absolute -z-1"
          style={{ width: 'auto', height: '100%' }}
        />
        <div className="container mx-auto">
          <DisplayThree content={'Success Stories'} />
          <BodyTwo content={'What our clients have to say after using BILDIT'} className={'mt-[30px]'} />
          <SwiperCarousel />
        </div>
      </section>
      <section className="relative py-[100px] px-4 lg:px-0">
        <Image
          src={BILDIT_Store_Front_Technical_Detail_BG}
          alt="BILDIT_Store_Front_Technical_Detail_BG.png"
          className="top-0 left-0 absolute -z-1"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="container mx-auto">
          <SubTitleFiveCaps content="Technical Details for Experts" />
          <DisplayOne
            content="BILDIT: A Platform Empowering Developers, Solution Integrators, and Marketers"
            className={'text-white max-w-[1410px]'}
          />
          <div className="grid grid-cols-2 pt-[91px]">
            <div>
              <p className="text-cms-light-gray  text-2xl leading-[34px]">
                BILDIT understands that the entire team plays a role in the success of your app. Your marketing team
                must be able to give the customer what they want. Your system integrator must be able to start fast.
                Your engineering team needs flexibility. Ultimately you must give the customer a premium, high
                performing experience that converts. It takes the whole team!
              </p>
              <SecondaryButton content="Developer Docs" className={'mt-[80px]'} />
            </div>
            <div>
              <Image
                src="/images/store_front/BILDIT_Code Editor_BG.png"
                alt="BILDIT_Code Editor_BG.png"
                width={0}
                height={0}
                className="w-auto h-auto inline-block"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
