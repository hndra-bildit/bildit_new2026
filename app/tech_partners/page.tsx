import BILDIT_Tech_Partners_BG from '../../public/images/tech_partners/BILDIT_Tech_Partners_BG.png'
import BILDIT_Tech_Partners_Mobile_BG from '../../public/images/tech_partners/BILDIT_Tech_Partners_Mobile_BG.png'
import CardSeven, { CardSevenItemType } from '../components/CardSeven'
import DisplayOne from '../components/DisplayOne'
import HeadingTwo from '../components/HeadingTwo'
import SubTitleFour from '../components/SubTitleFour'
import Image from 'next/image'

const SolutionIntegrators: Array<CardSevenItemType> = [
  {
    src: '/images/tech_partners/Astound_Commerce_Logo.png',
    alt: 'Astound_Commerce_Logo',
    width: 293,
    height: 72,
    title: 'Astound Commerce',
    content: 'We create digital commerce experiences that engage consumers, increase sales & fuel exponential growth.'
  },
  {
    src: '/images/tech_partners/Wallop_Logo.png',
    alt: 'Wallop_Logo.png',
    width: 254,
    height: 89,
    title: 'Wallop',
    content:
      'Wallop is an independent creative and digital strategy firm generating growth and impact for hospitality and travel experiences.'
  },
  {
    src: '/images/tech_partners/Gringteq_Logo.png',
    alt: 'Gringteq_Logo.png',
    width: 335,
    height: 58,
    title: 'Grinteq',
    content:
      'Solving tech challenges for ecommerce brands worldwide: from the forefront payment services to giant web stores.'
  }
]

const PartnersNetworks: Array<CardSevenItemType> = [
  {
    src: '/images/tech_partners/FlyBuy_Logo.png',
    alt: 'FlyBuy_Logo.png',
    width: 270,
    height: 73,
    title: 'Flybuy',
    content:
      'Radius Networks is a location technology company that helps companies conduct location-based transactions with customers.'
  },
  {
    src: '/images/tech_partners/Brand_Airship_Logo.png',
    alt: 'Brand_Airship_Logo.png',
    width: 362,
    height: 49,
    title: 'Airship',
    content: 'Helping brands master Mobile App Experiences (MAX) to engage customers and win their loyalty.'
  },
  {
    src: '/images/tech_partners/Commerce_Cloud_Logo.png',
    alt: 'Commerce_Cloud_Logo.png',
    width: 260,
    height: 136,
    title: 'Commerce Cloud',
    content: 'Commerce Cloud powers commerce everywhere with AI, data, and CRM.'
  },
  {
    src: '/images/tech_partners/Commerce_Tools_Logo.png',
    alt: 'Commerce_Tools_Logo.png',
    width: 338,
    height: 65,
    title: 'Commercetools',
    content: 'Powerful E-Commerce Business — Deliver Seamless Customer Experiences Across Channels.'
  },
  {
    src: '/images/tech_partners/InsightGlobal_Logo.png',
    alt: 'InsightGlobal_Logo.png',
    width: 339,
    height: 77,
    title: 'Insight Global',
    content:
      'International staffing and services company specializing in sourcing IT, accounting, finance, healthcare, and engineering professionals.'
  }
]

export default function TechPartners() {
  return (
    <div className="text-center md:text-left pt-[160px] lg:mb-[100px]">
      <section>
        <div className="container mx-auto px-4 lg:px-0">
          <div className="lg:w-[576px] xl:w-[746px] lg:[100px] xl:mt-[198px] text-center lg:text-left">
            <h1 className="text-[64px] md:text-[96px] lg:text-[102px] xl:text-[134px] leading-none font-gt-walsheim font-extrabold">
              <span className="bg-gradient-to-r from-cms-rose via-cms-rose to-cms-purple text-transparent bg-clip-text">
                Tech
              </span>
              <span className="text-cms-black-one`"> Partners</span>
            </h1>
            <HeadingTwo content="Enable eCommerce in Mobile Apps." className="font-normal mt-5 hidden lg:block" />
            <SubTitleFour content="Enable eCommerce in Mobile Apps." className="lg:hidden text-cms-grey" />
          </div>
        </div>
        <Image
          src={BILDIT_Tech_Partners_BG}
          alt="BILDIT_Tech_Partners_BG.png"
          className="hidden lg:block top-0 right-0 -z-1 absolute lg:!w-4/5 2xl:w-auto"
          style={{ width: 'auto', height: 'auto' }}
        />
        <Image
          src={BILDIT_Tech_Partners_Mobile_BG}
          alt="BILDIT_Tech_Partners_Mobile_BG.png"
          className="lg:hidden"
          style={{ width: '100%', height: 'auto' }}
        />
      </section>
      <section className="lg:mt-[400px] container mx-auto px-4 lg:px-0">
        <DisplayOne content="Solutions Integrators" className="text-center" />
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center mt-10 lg:mt-[80px]">
          {SolutionIntegrators.map((item, key) => {
            return <CardSeven item={item} key={key} />
          })}
        </div>
      </section>

      <section className="mt-[200px] container mx-auto px-4 lg:px-0">
        <DisplayOne content="Partner Network" className="text-center" />
        <div className="grid grid-cols-1 ">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center xl:order-2 mt-10">
            {PartnersNetworks.slice(3, 5).map((item, key) => {
              return <CardSeven item={item} key={key} />
            })}
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center xl:order-1 mt-10">
            {PartnersNetworks.slice(0, 3).map((item, key) => {
              return <CardSeven item={item} key={key} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
