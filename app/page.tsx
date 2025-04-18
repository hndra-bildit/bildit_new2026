import BelkResultsImage from '@/app/components/BelkResultImage'
import BodyTwo from '@/app/components/BodyTwo'
import DisplayOne from '@/app/components/DisplayOne'
import HeadingOne from '@/app/components/HeadingOne'
import HeadingTwo from '@/app/components/HeadingTwo'
import HomeSelectGroups from '@/app/components/HomeSelectGroups'
import IntroVideo from '@/app/components/IntroVideo'
import PrimaryButton from '@/app/components/PrimaryButton'
import SecondaryButton from '@/app/components/SecondaryButton'
import SubTitleFiveCaps from '@/app/components/SubTitleFiveCaps'
import SubTitleThree from '@/app/components/SubTitleThree'
import Image from 'next/image'

const cardgroup: Array<{ src: string; alt: string; title: string }> = [
  {
    src: '/images/home/BILDIT_Home_Campaign_Control.png',
    alt: 'Campaign_Control',
    title: 'Complete control over campaigns'
  },
  {
    src: '/images/home/BILDIT_Home_Advanced_Mobile_Capability.png',
    alt: 'BILDIT_Home_Advanced_Mobile_Capability',
    title: 'Advanced mobile app capabilities'
  },
  {
    src: '/images/home/BILDIT_Home_Easy_Cross_Channel.png',
    alt: 'BILDIT_Home_Easy_Cross_Channel',
    title: 'Easy cross-channel content management'
  }
]
const belkResults: Array<{ src: string; alt: string }> = [
  { src: '/images/home/BILDIT_Home_BelkResult_YOY.png', alt: 'BILDIT_Home_BelkResult_YOY.png' },
  { src: '/images/home/BILDIT_Home_BelkResult_AOV.png', alt: 'BILDIT_Home_BelkResult_AOV.png' },
  { src: '/images/home/BILDIT_Home_BelkResult_CVR.png', alt: 'BILDIT_Home_BelkResult_CVR.png' }
]
export default function Home() {
  return (
    <>
      <section className="pt-[160px] relative px-4">
        <Image
          src="/images/home/BILDIT_Home_BG.png"
          alt="BILDIT_Home_BG.png"
          className="top-0 left-0 absolute -z-1 w-full h-full"
          width={1200}
          height={0}
        />
        <div className="container mx-auto">
          <HeadingOne
            sub1={'Modern'}
            sub2={'CMS'}
            sub3={'Unified Storefront'}
            className1={'text-center lg:text-left'}
            className2={'bg-gradient-to-r from-cms-rose to-[#3B1EED] bg-clip-text text-transparent'}
          />
          <div className="lg:grid grid-cols-2 gap-6">
            <div>
              <SubTitleThree
                content={'Empowering Marketers with Cross-Channel Control'}
                className="text-center lg:text-left"
              />
              <div className="flex justify-center lg:justify-start space-x-7 mt-5 lg:mt-20">
                <SecondaryButton content="Learn More" />
                <PrimaryButton content="Watch Demo" />
              </div>
            </div>
            <div className="pt-6">
              <Image alt="BILDIT_Home_Intro.png " src="/images/home/BILDIT_Home_Intro.png" width={900} height={900} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-25 bg-gray-100 relative px-4">
        <Image
          src="/images/others/BILDIT_Dot_Line_Effect_BG.png"
          alt="BILDIT_Dot_Line_Effect_BG.png"
          width={1000}
          height={0}
          className="absolute top-0 left-0 -z-1 w-full h-auto"
        />
        <HeadingTwo content={"Belk's Results"} className={'text-center'} />
        <SubTitleThree content="After Switching to BILDIT CMS and App" className="!text-center" />
        <div className="container mx-auto flex justify-center lg:justify-between flex-wrap">
          {belkResults.map((item, key) => (
            <BelkResultsImage item={item} key={key} />
          ))}
        </div>
      </section>

      <section className="">
        <div className="container mx-auto mt-0 lg:mt-45 py-10 lg:py-20 lg:grid grid-cols-2 gap-10 px-4">
          <div>
            <SubTitleFiveCaps content={'Why BILDIT'} />
            <HeadingTwo content={'Build Anything You Want.'} className="text-center lg:text-left" />
            <SubTitleThree
              content={'No coding experience required. Without IT.'}
              className={'text-center lg:text-left mt-3 lg:mt-7'}
            />
          </div>
          <div className="mt-6 lg:mt-12 space-y-3">
            <p className="leading-normal text-lg text-zinc-600 font-normal text-center lg:text-left">
              BILDIT CMS was designed for e-commerce marketing teams striving to deliver highly personalized, targeted
              campaigns across web and mobile channels. It was born from the frustration of dealing with limited
              solutions that made creating engaging, effective campaigns unnecessarily slow or generic. Waiting weeks to
              launch on mobile or settling for cookie-cutter tools shouldn’t hold back your growth.
            </p>
            <p className="leading-normal text-lg text-zinc-600 font-normal  text-center lg:text-left">
              That’s why we built BILDIT CMS - to give you the freedom to launch anything you want, exactly how and when
              you want, on both web and mobile platforms..
            </p>
          </div>
        </div>
        <div className="flex justify-center relative">
          <IntroVideo src={'/images/others/BILDIT_Blank.png'} />
          <div className="h-1/2 w-full bg-gray-100 absolute bottom-0 left-0 z-[-1]"></div>
        </div>
      </section>

      <section className="pt-20 lg:pt-50 bg-gray-100">
        <div className="container mx-auto px-4">
          <SubTitleFiveCaps content={'BILDIT CMS overview'} className={'!text-center'} />
          <HeadingTwo
            content={'Deliver seamless cross-channel content that boosts revenue.'}
            className={'text-center'}
          />
          <SubTitleThree
            content={
              'Launch more, launch faster. On BILDIT CMS, you can line up your next campaign in hours, not weeks.'
            }
            className={'text-center mt-3 lg:mt-5'}
          />
          <div className="flex justify-center lg:justify-between flex-wrap pb-30">
            {cardgroup.map((item, key) => {
              return (
                <div className="max-w-[440px] w-full pt-12" key={key}>
                  <div className="flex justify-center py-[77] border border-gray-200 rounded-[14px] bg-gray-100 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)]">
                    <Image src={item.src} alt={item.alt} width={216} height={266} />
                  </div>
                  <div>
                    <p className="mt-3 lg:mt-12 text-xl lg:text-4xl font-bold text-center font-gt-walsheim leading-none">
                      {item.title}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-25 relative px-4">
        <Image
          src="/images/others/BILDIT_Dot_Line_Effect_BG.png"
          alt="BILDIT_Dot_Line_Effect_BG.png"
          width={1200}
          height={0}
          className="top-0 left-0 absolute -z-1 w-auto h-auto hidden lg:block"
        />
        <Image
          src="/images/home/BILDIT_Home_Mobile_BG.png"
          alt="BILDIT_Home_Mobile_BG.png"
          width={700}
          height={0}
          className="lg:hidden top-0 left-0 -z-1 absolute w-full h-auto"
        />
        <HomeSelectGroups />
      </section>

      <section className="py-25 relative px-4">
        <Image
          src="/images/home/BILDIT_Home_Unified_Solution_BG.png"
          alt="BILDIT_Home_Unified_Solution_BG.png"
          className="top-0 left-0 absolute -z-1 w-full h-full hidden lg:block"
          width={1200}
          height={0}
        />
        <Image
          src="/images/home/BILDIT_Home_Unified_Solution_Mobile_BG.png"
          alt="BILDIT_Home_Unified_Solution_Mobile_BG.png"
          className="top-0 left-0 absolute -z-1 w-full h-full lg:hidden"
          width={1200}
          height={0}
        />
        <div className="container mx-auto lg:grid grid-cols-[65%_auto] items-center justify-center">
          <div className="max-w-4xl">
            <SubTitleFiveCaps content={'One backend. One unified solution.'} className="text-center lg:text-left" />
            <DisplayOne
              content={'Effortlessly create sophisticated content for web and mobile'}
              className={'text-white mt-4 text-center lg:text-left'}
            />
            <BodyTwo
              content={
                'One CMS platform. Endless possibilities to create stunning images, banners, recommendations, animations and customized display configurations.'
              }
              className={'!text-gray-300 mt-8 text-center lg:text-left'}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/home/BILDIT_Home_Unified_Solution_Image.png"
              alt="BILDIT_Home_Unified_Solution_Image.png"
              width={471}
              height={0}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  )
}
