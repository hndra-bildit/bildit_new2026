import BodyFour from '@/app/components/BodyFour'
import BodyTwo from '@/app/components/BodyTwo'
import CardFive from '@/app/components/CardFive'
import { CardFiveItemType } from '@/app/components/CardFive'
import CardFour from '@/app/components/CardFour'
import CardSix, { CardSixItemType } from '@/app/components/CardSix'
import DisplayOne from '@/app/components/DisplayOne'
import HeadingOne from '@/app/components/HeadingOne'
import PrimaryButton from '@/app/components/PrimaryButton'
import SecondaryButton from '@/app/components/SecondaryButton'
import SubTitleFive from '@/app/components/SubTitleFive'
import SubTitleFiveCaps from '@/app/components/SubTitleFiveCaps'
import SubTitleThree from '@/app/components/SubTitleThree'
import Image from 'next/image'

const retailers = [
  { src: '/images/CMS/Belk_logo.svg', alt: 'Belk_Logo.svg', width: 162, height: 69 },
  { src: '/images/CMS/Hierro.svg', alt: 'Hierro.svg', width: 296, height: 85 }
]

const CardFourItems = [
  {
    src: '/images/CMS/BILDIT_Single_CMS_Platform_Intro.png',
    alt: 'BILDIT_Single_CMS_Platform_Intro.png',
    width: 557,
    height: 557
  },
  {
    src: '/images/CMS/BILDIT_Make_Life_Easier_Intro',
    alt: 'BILDIT_Make_Life_Easier_Intro.png',
    width: 557,
    height: 557
  }
]

const CardFiveItemsOne: Array<CardFiveItemType> = [
  {
    title: 'Before BILDIT CMS:',
    subitems: [
      {
        status: false,
        content: 'Multiple steps to edit, schedule and deploy content'
      },
      {
        status: false,
        content: 'Need developer help for mobile app campaign launches'
      },
      {
        status: false,
        content: 'Lack of multi-user access and editing delays'
      }
    ]
  },
  {
    title: 'On BILDIT CMS:',
    subitems: [
      {
        status: true,
        content: 'Built-it editing, automated archiving, content search and filtering'
      },
      {
        status: true,
        content: 'Easy drag-and-drop builder for code-as-content snippets'
      },
      {
        status: true,
        content: 'Multi-user access, ability to edit campaigns on snippet level'
      }
    ]
  }
]

const CardFiveItemsTwo: Array<CardFiveItemType> = [
  {
    title: 'Before BILDIT CMS:',
    subitems: [
      {
        status: false,
        content: 'Delayed launches due to long deployment turnaround'
      },
      {
        status: false,
        content: 'Separate, siloed campaigns for web and mobile'
      },
      {
        status: false,
        content: 'Simplified, low-conversions campaign content for mobile users'
      }
    ]
  },
  {
    title: 'On BILDIT CMS:',
    subitems: [
      {
        status: true,
        content: 'No deployment delays, real-time update capabilities'
      },
      {
        status: true,
        content: 'Unified, cross-channel campaigns with analytics and A/B testing'
      },
      {
        status: true,
        content: 'Advanced mobile content formats for enhanced buyer experience'
      }
    ]
  }
]
const CardFiveItemsThree: Array<CardFiveItemType> = [
  {
    title: 'Before BILDIT CMS:',
    subitems: [
      {
        status: false,
        content: 'Content display targeting only by product category'
      },
      {
        status: false,
        content: 'No category or product management features'
      },
      {
        status: false,
        content: 'No ability to customize product display'
      }
    ]
  },
  {
    title: 'On BILDIT CMS:',
    subitems: [
      {
        status: true,
        content: 'Content display based on product, category, and even customer group'
      },
      {
        status: true,
        content: 'Ability to hide, display, add or remove products and categories inside your CMS'
      },
      {
        status: true,
        content: 'Display customization based on product availability, search terms and user groups'
      }
    ]
  }
]

const CardSixItems: Array<CardSixItemType> = [
  {
    head: 'Native mobile checkout kit',
    title: 'Get higher point-of-sale conversions',
    subitems: [
      'Seamlessly move customers from shopping to checkout',
      'Enable one-tap checkout and payment to decrease cart abandonment rates',
      'Encourage repeat purchases with {{*****}}'
    ]
  },
  {
    head: 'Out-of-the-box mobile app kit',
    title: 'Build faster with customizable app components',
    subitems: [
      'Customize the app to fit your brand and provide custom brand experiences',
      'Add secure point-of-sales pages and native checkout to reduce abandoned cart rates',
      'Easily add products to pre-built detail pages'
    ]
  },
  {
    head: 'Out-of-the-box web storefront kit',
    title: 'Deploy platform-agnostic,  .       pre-built pages',
    subitems: [
      'Get immediate SEO improvements with out-of-the box SEO optimization',
      'Use pre-built pages and components to enhance customer experience',
      'Own the web code and customize as you grow'
    ]
  },
  {
    head: 'Custom app build',
    title: 'Launch a fully customized mobile app',
    subitems: [
      'Customize app snippets to bring your mobile app build ideas to life',
      'Get priority access to support and request new features as you increase app adoption',
      'Own and reuse plug-and-play elements'
    ]
  }
]
// const SectionItems:Array<Array<CardFiveItemType>> = [CardFiveItemsOne,CardFiveItemsTwo,CardFiveItemsThree];

export default function BilditCMS() {
  return (
    <>
      <section className="pt-20 lg:pt-40 pb-10 lg:pb-65 px-4 ">
        <Image
          src="/images/CMS/BILDIT_CMS_BG.png"
          alt="BILDIT_CMS_BG.png"
          className="top-0 left-0 absolute -z-1 w-full h-auto"
          width={1200}
          height={0}
        />
        <div className="container mx-auto grid lg:grid-cols-2 items-center">
          <div>
            <HeadingOne
              sub1={'BILDIT'}
              sub2="CMS"
              className1="text-center lg:text-left"
              className2="bg-gradient-to-r from-pink-300 via-pink-500 to-purple-400 text-transparent bg-clip-text"
            />
            <SubTitleThree
              content="CMS software offering full control over digital marketing campaigns across web, mobile apps, email, and push notifications."
              className="mt-5 text-center lg:text-left"
            />
            <div className="flex justify-center lg:block">
              <PrimaryButton content="CMS Comparisons" className="mt-6 lg:mt-12 xl:mt-20" />
            </div>
          </div>
          <div className="flex item-center">
            <Image
              src="/images/CMS/BILDIT_CMS_Comparision_Intro.png"
              alt="BILDIT_CMS_Comparision_Intro.png"
              width={0}
              height={0}
              className="w-auto h-auto inline-block"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-14 px-4">
        <div className="container mx-auto">
          <h5 className="font-400 text-xl md:text-3xl lg:text-4xl leading-none tracking-[-0.23px] text-zinc-600 text-center">
            Some of the retailers growing their revenue with BILDIT content management system
          </h5>
          <div className="mt-12 flex flex-wrap items-center justify-center">
            {retailers.map((item, key) => {
              return (
                <div className="mx-[15px] lg:mx-[50px]" key={key}>
                  <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
                </div>
              )
            })}
            <div></div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="container mx-auto  mt-20 lg:mt-50">
          <div className="md:grid grid-cols-[60%_auto] items-center gap-15 py-10 lg:py-25">
            <div>
              <SubTitleFiveCaps content="Single CMS Platform" className="text-center md:text-left" />
              <DisplayOne content="Using  Code-As-Content  Snippets." className="text-center md:text-left mt-1" />
              <SubTitleThree
                content="To craft relevant, personalized, and targeted campaigns across channels."
                className="my-3 lg:my-7 text-center md:text-left"
              />
              <BodyTwo
                content="Single e-commerce CMS platform for all of your content. Without higher deployment costs or having to hire new team members"
                className="text-center md:text-left my-3"
              />
            </div>
            <div className="flex items-center justify-center">
              <CardFour item={CardFourItems[0]} />
            </div>
          </div>

          <div className="md:grid grid-cols-[auto_60%] items-center gap-15 py-10 lg:py-25">
            <div className="order-2">
              <SubTitleFiveCaps content="MakE Life Easier" className="text-center md:text-left" />
              <DisplayOne content="No coding background?" className="text-center md:text-left mt-1" />
              <DisplayOne content="No problem!" className="text-center md:text-left" />
              <SubTitleThree
                content="Anyone can build content with ease."
                className="my-3 lg:my-7 text-center md:text-left"
              />
              <BodyTwo
                content="Stop missing out on higher retention, upsell and AOV increase opportunities. Build out sophisticated campaigns. Set up display and segmentation rules. Run A/B tests and continue improving your campaigns."
                className="text-center md:text-left my-3"
              />
            </div>
            <div className="order-1 flex items-center justify-center">
              <CardFour item={CardFourItems[0]} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4">
        <Image
          src="/images/others/BILDIT_Dot_Left_Middle_Effect_BG.png"
          alt="BILDIT_Dot_Left_Middle_Effect_BG.png"
          className="absolute inset-y-0 left-0 -z-1 w-auto h-auto"
          width={1200}
          height={0}
        />
        <div className="container mx-auto py-10 lg:py-25 px-4">
          <SubTitleFiveCaps
            content="Streamlined content editing and maintenance"
            className="text-center lg:text-left"
          />
          <DisplayOne
            content="Scale campaigns across all your channels. Without drowning in admin tasks."
            className="text-center lg:text-left mt-1"
          />
          <div className="pt-4 lg:pt-12 lg:flex space-x-10">
            <div className="flex-1">
              <BodyTwo
                content="Having too many pre-launch tasks across different content databases for each channel is slowing down your marketing team. In BILDIT CMS, this is no longer an issue."
                className="text-center lg:text-left"
              />
              <div className="flex lg:block justify-center">
                <PrimaryButton content="Get A Demo" className="mt-4 lg:mt-20 mb-12" />
              </div>
            </div>
            <div className="flex-2">
              {CardFiveItemsOne.map((item, key) => {
                return <CardFive item={item} key={key} />
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10 lg:py-25 px-4">
        <SubTitleFiveCaps
          content="Complete control over content design and build"
          className="text-center lg:text-left"
        />
        <DisplayOne
          content="Launch in hours, improve targeting, boost e-commerce revenue"
          className="text-center lg:text-left mt-1"
        />
        <div className="pt-4 lg:pt-12 lg:flex space-x-10">
          <div className="flex-1">
            <BodyTwo
              content="In BILDIT content management system, your marketing team can build out all digital campaigns with code-as-content snippets included in your subscription. No wait time, no additional costs."
              className="text-center lg:text-left"
            />
            <div className="flex lg:block justify-center">
              <PrimaryButton content="Get A Demo" className="mt-4 lg:mt-20 mb-12" />
            </div>
          </div>
          <div className="flex-2">
            {CardFiveItemsTwo.map((item, key) => {
              return <CardFive item={item} key={key} />
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4">
        <Image
          src="/images/others/BILDIT_Dot_Right_Middle_Effect_BG.png"
          alt="BILDIT_Dot_Right_Middle_Effect_BG.png"
          className="absolute inset-y-0 right-0 -z-1 w-auto h-auto"
          width={1200}
          height={0}
        />
        <div className="container mx-auto py-10 lg:py-25">
          <SubTitleFiveCaps
            content="Advanced content management and personalization"
            className="text-center lg:text-left"
          />
          <DisplayOne
            content="Fully realize your mobile app potential, without additional development costs"
            className="text-center lg:text-left mt-1"
          />
          <div className="pt-4 lg:pt-12 lg:flex space-x-10">
            <div className="flex-1">
              <BodyTwo
                content="Go beyond baseline app features and increase AOV and customer LTV with deep link targeting, personalization and seamless e-commerce platform integrations"
                className="text-center lg:text-left"
              />
              <div className="flex lg:block justify-center">
                <PrimaryButton content="Get A Demo" className="mt-4 lg:mt-20 mb-12" />
              </div>
            </div>
            <div className="flex-2">
              {CardFiveItemsThree.map((item, key) => {
                return <CardFive item={item} key={key} />
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-950 px-4 lg:px-0">
        <div className="container mx-auto lg:grid grid-cols-[30%_auto] items-center lg:gap-8 xl:gap-15 py-10 lg:y-20">
          <div className="order-2 my-10 lg:my-20">
            <DisplayOne
              content="3x YoY revenue increase over 6 years"
              className="text-white text-center lg:text-left"
            />
            <div className="mt-2 lg:mt-12 flex lg:block justify-center">
              <Image src="/images/CMS/mark.svg" alt="mark.svg" width={48} height={36} />
            </div>
            <div className="mt-2">
              <BodyTwo
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sapien habitasse sapien ornare diam in at malesuada. Mauris, sed eget gravida sit blandit. Arcu dolor lacus hac enim, aliquet pretium in. Sit non cursus eu sagittis. Pretium et ac risus amet. Posuere sagittis quam tellus, nisl amet rhoncus, ullamcorper. "
                className="!text-gray-300 text-center lg:text-left"
              />
              <SubTitleFive content="John Doe" className="mt-4 lg:mt-8 !text-gray-300 text-center lg:text-left" />
              <BodyFour content="CEO BELK" className="mt-2 text-center lg:text-left" />
              <div className="flex lg:block justify-center">
                <SecondaryButton content="Case Study" className="mt-10 font-gt-walsheim text-center lg:text-left" />
              </div>
            </div>
          </div>
          <div className="order-1 flex items-center">
            <Image
              src="/images/CMS/BILDIT_Other_Company_benefit_Intro.png"
              alt="BILDIT_Other_Company_benefit_Intro.png"
              width={544}
              height={0}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="lg:bg-gray-50 px-4">
        <div className="container mx-auto py-20 lg:py-50">
          <SubTitleFiveCaps content="BILDIT add-on products and services" className="text-center" />
          <DisplayOne content="If you need it, we can BILDIT" className="text-center" />
          <DisplayOne content="Or have built it already." className="text-center" />
          <SubTitleThree content="Enhance your customer's checkout experience," className="text-center lg:mt-12" />
          <SubTitleThree content="refresh your web storefront or get a brand-new custom app" className="text-center" />
          <div className="flex justify-center flex-wrap gap-5 lg:gap-10">
            {CardSixItems.map((item, key) => {
              return <CardSix item={item} key={key} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
