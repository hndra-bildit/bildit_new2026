import BILDIT_Home_BG from '../public/images/home/BILDIT_Home_BG.png'
import BILDIT_Home_Unified_Solution_BG from '../public/images/home/BILDIT_Home_Unified_Solution_BG.png'
import BILDIT_Dot_Line_Effect_BG from '../public/images/others/BILDIT_Dot_Line_Effect_BG.png'
import BelkResultsImage from './components/BelkResultImage'
import BodyTwo from './components/BodyTwo'
import DisplayOne from './components/DisplayOne'
import HeadingOne from './components/HeadingOne'
import HeadingTwo from './components/HeadingTwo'
import HomeSelectGroups from './components/HomeSelectGroups'
import IntroVideo from './components/IntroVideo'
import PrimaryButton from './components/PrimaryButton'
import SecondaryButton from './components/SecondaryButton'
import SubTitleFiveCaps from './components/SubTitleFiveCaps'
import SubTitleThree from './components/SubTitleThree'
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
      <section className="pt-[160px] relative">
        <Image
          src={BILDIT_Home_BG}
          alt="BILDIT_Home_BG.png"
          className="top-0 left-0 absolute -z-1"
          style={{ width: 'auto', height: 'auto' }}
        />
        <div className="container mx-auto">
          <HeadingOne
            sub1={'Modern'}
            sub2={'CMS'}
            sub3={'Unified Storefront'}
            className1={''}
            className2={'bg-gradient-to-r from-cms-rose to-[#3B1EED] bg-clip-text text-transparent'}
          />
          <div className="grid grid-cols-2 gap-6">
            <div>
              <SubTitleThree content={'Empowering Marketers with Cross-Channel Control'} />
              <div className="flex space-x-7 mt-[80px]">
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
      <section className="py-[100px] bg-cms-lighter-gray">
        <HeadingTwo content={"Belk's Results"} className={'text-center'} />
        <p className="text-3xl font-600 leading-[40px] text-zinc-600 text-center">
          After Switching to BILDIT CMS and App
        </p>
        <div className="container mx-auto flex justify-between">
          {belkResults.map((item, key) => (
            <BelkResultsImage item={item} key={key} />
          ))}
        </div>
      </section>

      <section className="">
        <div className="container mx-auto mt-[180px] py-[80px] grid grid-cols-2 gap-10">
          <div>
            <SubTitleFiveCaps content={'Why BILDIT'} />
            <HeadingTwo content={'Build Anything You Want.'} />
            <SubTitleThree content={'No coding experience required. Without IT.'} className={'mt-7'} />
          </div>
          <div className="mt-12 space-y-3">
            <p className="leading-[26px] text-lg text-zinc-600 font-normal">
              BILDIT CMS was designed for e-commerce marketing teams striving to deliver highly personalized, targeted
              campaigns across web and mobile channels. It was born from the frustration of dealing with limited
              solutions that made creating engaging, effective campaigns unnecessarily slow or generic. Waiting weeks to
              launch on mobile or settling for cookie-cutter tools shouldn’t hold back your growth.
            </p>
            <p className="leading-[26px] text-lg text-zinc-600 font-normal">
              That’s why we built BILDIT CMS - to give you the freedom to launch anything you want, exactly how and when
              you want, on both web and mobile platforms..
            </p>
          </div>
        </div>
        <div className="flex justify-center relative">
          <IntroVideo src={'/images/others/BILDIT_Blank.png'} />
          <div className="h-1/2 w-full bg-cms-lighter-gray absolute bottom-0 left-0 z-[-1]"></div>
        </div>
      </section>

      <section className="pt-[212px] bg-cms-lighter-gray">
        <div className="container mx-auto">
          <SubTitleFiveCaps content={'BILDIT CMS overview'} className={'text-center'} />
          <HeadingTwo
            content={'Deliver seamless cross-channel content that boosts revenue.'}
            className={'text-center'}
          />
          <SubTitleThree
            content={
              'Launch more, launch faster. On BILDIT CMS, you can line up your next campaign in hours, not weeks.'
            }
            className={'text-center mt-5'}
          />
          <div className="flex justify-between flex-wrap pb-[122px]">
            {cardgroup.map((item, key) => {
              return (
                <div className="max-w-[440px] pt-12" key={key}>
                  <div className="flex justify-center py-[77] border border-gray-200 rounded-[14px] bg-cms-lighter-gray shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)]">
                    <Image src={item.src} alt={item.alt} width={216} height={266} />
                  </div>
                  <div>
                    <p className="mt-12 text-4xl font-bold text-center font-gt-walsheim leading-none">{item.title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-[100px] relative">
        <Image
          src={BILDIT_Dot_Line_Effect_BG}
          alt="BILDIT_Dot_Line_Effect_BG.png"
          className="top-0 left-0 absolute -z-1"
          style={{ width: 'auto', left: 'auto' }}
        />
        <HomeSelectGroups />
      </section>

      <section className="py-[100px] relative">
        <Image
          src={BILDIT_Home_Unified_Solution_BG}
          alt="BILDIT_Home_Unified_Solution_BG.png"
          className="top-0 left-0 absolute -z-1"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="container mx-auto flex justify-between items-center">
          <div className="max-w-[892px]">
            <SubTitleFiveCaps content={'One backend. One unified solution.'} />
            <DisplayOne
              content={'Effortlessly create sophisticated content for web and mobile'}
              className={'text-white'}
            />
            <BodyTwo
              content={
                'One CMS platform. Endless possibilities to create stunning images, banners, recommendations, animations and customized display configurations.'
              }
              className={'!text-cms-light-gray'}
            />
          </div>
          <div>
            <Image
              src="/images/home/BILDIT_Home_Unified_Solution_Image.png"
              alt="BILDIT_Home_Unified_Solution_Image.png"
              width={471}
              height={461}
            />
          </div>
        </div>
      </section>
    </>
  )
}
