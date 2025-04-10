import BodyFour from '../components/BodyFour'
import BodyTwo from '../components/BodyTwo'
import CardFive from '../components/CardFive'
import { CardFiveItemType } from '../components/CardFive'
import CardFour from '../components/CardFour'
import CardSix, { CardSixItemType } from '../components/CardSix'
import DisplayOne from '../components/DisplayOne'
import HeadingOne from '../components/HeadingOne'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import SubTitleFive from '../components/SubTitleFive'
import SubTitleFiveCaps from '../components/SubTitleFiveCaps'
import SubTitleThree from '../components/SubTitleThree'
import Image from 'next/image'

const retailers = [
  { src: '/images/Belk_logo.svg', alt: 'Belk_logo.svg', width: 162, height: 69 },
  { src: '/images/Vector.svg', alt: 'Vector.svg', width: 296, height: 85 }
]

const CardFourItems = [
  { src: '/images/Image(5).png', alt: 'Image(5).png', width: 557, height: 557 },
  { src: '/images/Image(6).png', alt: 'Image(6).png', width: 557, height: 557 }
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
      <section className="px-[16px] lg:px-0 pt-[160px] pb-[260px] bg-[url('/images/BG_CMS.png')] bg-cover bg-center">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div>
            <HeadingOne
              sub1={'BILDIT'}
              sub2="CMS"
              className1="mt-[32px]"
              className2="bg-gradient-to-r from-pink-300 via-pink-500 to-purple-400 text-transparent bg-clip-text"
            />
            <SubTitleThree
              content="CMS software offering full control over digital marketing campaigns across web, mobile apps, email, and push notifications."
              className="mt-[20px]"
            />
            <PrimaryButton content="CMS Comparisons" className="mt-[24px] lg:mt-[48px] xl:mt-[80px]" />
          </div>
          <div className="flex item-center">
            <Image
              src="/images/Group19407.png"
              alt="Group19407.png"
              width={0}
              height={0}
              className="w-auto h-auto inline-block"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="bg-lighter-gray py-[55px]">
        <div className="container mx-auto">
          <h5 className="font-400 text-xl md:text-3xl lg:text-4xl leading-[100%] tracking-[-0.23px] text-grey text-center">
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

      <section className="px-4 lg:px-0">
        <div className="container mx-auto mt-[200px]">
          <div className="flex justify-between items-center gap-[60px] py-[100px]">
            <div className="w-[70%]">
              <SubTitleFiveCaps content="Single CMS Platform" />
              <DisplayOne content="Using  Code-As-Content  Snippets." />
              <SubTitleThree
                content="To craft relevant, personalized, and targeted campaigns across channels."
                className="my-7"
              />
              <BodyTwo content="Single e-commerce CMS platform for all of your content. Without higher deployment costs or having to hire new team members" />
            </div>
            <div className="w-[30%]">
              <CardFour item={CardFourItems[0]} />
            </div>
          </div>

          <div className="flex flex-row-reverse justify-between items-center gap-[60px] py-[100px]">
            <div className="w-[70%]">
              <SubTitleFiveCaps content="MakE Life Easier" />
              <DisplayOne content="No coding background?" />
              <DisplayOne content="No problem! " />
              <SubTitleThree content="Anyone can build content with ease." className="my-7" />
              <BodyTwo content="Stop missing out on higher retention, upsell and AOV increase opportunities. Build out sophisticated campaigns. Set up display and segmentation rules. Run A/B tests and continue improving your campaigns." />
            </div>
            <div className="w-[30%]">
              <CardFour item={CardFourItems[0]} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/images/Vector245.png')]  bg-[30%] bg-left bg-no-repeat px-4 lg:px-0">
        <div className="container mx-auto py-[100px]">
          <SubTitleFiveCaps content="Streamlined content editing and maintenance" />
          <DisplayOne content="Scale campaigns across all your channels. Without drowning in admin tasks." />
          <div className="pt-12 lg:flex space-x-10">
            <div className="flex-1">
              <BodyTwo
                content="Having too many pre-launch tasks across different content databases for each channel is slowing down your marketing team. In BILDIT CMS, this is no longer an issue."
                className="mt-0"
              />
              <PrimaryButton content="Get A Demo" className="mt-[32px] md:mt-0 lg:mt-[80px] mb-12" />
            </div>
            <div className="flex-2">
              {CardFiveItemsOne.map((item, key) => {
                return <CardFive item={item} key={key} />
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-[100px] px-4 lg:px-0">
        <SubTitleFiveCaps content="Complete control over content design and build" />
        <DisplayOne content="Launch in hours, improve targeting, boost e-commerce revenue" />
        <div className="pt-12 lg:flex space-x-10">
          <div className="flex-1">
            <BodyTwo
              content="In BILDIT content management system, your marketing team can build out all digital campaigns with code-as-content snippets included in your subscription. No wait time, no additional costs."
              className="mt-0"
            />
            <PrimaryButton content="Get A Demo" className="mt-8 md:mt-0 lg:mt-[80px] mb-12" />
          </div>
          <div className="flex-2">
            {CardFiveItemsTwo.map((item, key) => {
              return <CardFive item={item} key={key} />
            })}
          </div>
        </div>
      </section>

      <section className="bg-[url('/images/Vector246.png')] bg-[30%] bg-right bg-no-repeat px-4 lg:px-0">
        <div className="container mx-auto py-[100px]">
          <SubTitleFiveCaps content="Advanced content management and personalization" />
          <DisplayOne content="Fully realize your mobile app potential, without additional development costs" />
          <div className="pt-12 lg:flex space-x-10">
            <div className="flex-1">
              <BodyTwo
                content="Go beyond baseline app features and increase AOV and customer LTV with deep link targeting, personalization and seamless e-commerce platform integrations"
                className="mt-0"
              />
              <PrimaryButton content="Get A Demo" className="mt-[32px] md:mt-0 lg:mt-[80px] mb-12" />
            </div>
            <div className="flex-2">
              {CardFiveItemsThree.map((item, key) => {
                return <CardFive item={item} key={key} />
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#252340] px-4 lg:px-0">
        <div className="container mx-auto flex py-[81px]">
          <div className="flex-2">
            <Image src="/images/Img_ProductPage_last.png" alt="Img_ProductPage_last.png" width={544} height={643} />
          </div>
          <div className="flex-3 my-[81px]">
            <DisplayOne content="3x YoY revenue increase over 6 years" className="text-white" />
            <div className="mt-12">
              <Image src="/images/mark.svg" alt="mark.svg" width={56} height={40} />
            </div>
            <div className="mt-2">
              <BodyTwo
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sapien habitasse sapien ornare diam in at malesuada. Mauris, sed eget gravida sit blandit. Arcu dolor lacus hac enim, aliquet pretium in. Sit non cursus eu sagittis. Pretium et ac risus amet. Posuere sagittis quam tellus, nisl amet rhoncus, ullamcorper. "
                className="!text-light-gray"
              />
              <SubTitleFive content="John Doe" className="mt-4 lg:mt-8" />
              <BodyFour content="CEO BELK" />
              <SecondaryButton content="Case Study" className="mt-[80px] font-gt-walsheim" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lighter-gray px-4 lg:px-0">
        <div className="container mx-auto py-[180px]">
          <SubTitleFiveCaps content="BILDIT add-on products and services" className="text-center" />
          <DisplayOne content="If you need it, we can BILDIT" className="text-center" />
          <DisplayOne content="Or have built it already." className="text-center" />
          <SubTitleThree content="Enhance your customer's checkout experience," className="text-center mt-12" />
          <SubTitleThree content="refresh your web storefront or get a brand-new custom app" className="text-center" />
          <div className="flex justify-center flex-wrap gap-10">
            {CardSixItems.map((item, key) => {
              return <CardSix item={item} key={key} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
