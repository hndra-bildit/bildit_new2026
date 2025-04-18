import BILDIT_Integration_Partners_BG from '../../public/images/integration_partners/BILDIT_Integration_Partners_BG.png'
import BILDIT_Integration_Partners_Effect from '../../public/images/integration_partners/BILDIT_Integration_Partners_Effect.png'
import BILDIT_Integration_Partners_Effect_Mobile_BG from '../../public/images/integration_partners/BILDIT_Integration_Partners_Effect_Mobile_BG.png'
import CardEight, { CardEightType } from '../components/CardEight'
import Image from 'next/image'

// @todo: should come from cms
const IntegrationPartnersItems: Array<CardEightType> = [
  {
    src: '/images/others/Commerce_Cloud_Logo.png',
    alt: 'Commerce_Cloud_Logo.png',
    width: 208,
    height: 110,
    title: 'Salesforce Commerce Cloud',
    content: 'SFCC cartridge to support native checkout & content Management for web'
  },
  {
    src: '/images/others/Commerce_Tools_Logo.png',
    alt: 'Commerce_Tools_Logo.png',
    width: 263,
    height: 54,
    title: 'Commercetools'
  },
  { src: '/images/others/Magento_Logo.png', alt: 'Magento_Logo.png', width: 245, height: 82, title: 'Magento' },
  {
    src: '/images/others/Shopify_Plus_Logo.png',
    alt: 'Shopify_Plus_Logo.png',
    width: 258,
    height: 53,
    title: 'Shopify Plus'
  },
  { src: '/images/others/SAP_Logo.png', alt: 'SAP_Logo.png', width: 199, height: 98, title: 'SAP Hybris' },
  {
    src: '/images/others/Apple_Pay_Logo.png',
    alt: 'Apple_Pay_Logo.png',
    width: 170,
    height: 71,
    title: 'Apple App Clips'
  },
  {
    src: '/images/others/ACI_Worldwide_Logo.png',
    alt: 'ACI_Worldwide_Logo.png',
    width: 244,
    height: 28,
    title: 'ACI PayOn'
  },
  { src: '/images/others/Syte_Logo.png', alt: 'Syte_Logo.png', width: 229, height: 63, title: 'Syte' },
  { src: '/images/others/Conscia_Logo.png', alt: 'Conscia_Logo.png', width: 264, height: 59, title: 'Conscia.ai' },
  {
    src: '/images/others/Cloudinary_Logo.png',
    alt: 'Cloudinary_Logo.png',
    width: 240,
    height: 47,
    title: 'Cloudinary'
  },
  {
    src: '/images/others/Clip_Path _Logo.png',
    alt: 'Clip_Path _Logo.png',
    width: 247,
    height: 42,
    title: 'ContentStack'
  },
  { src: '/images/others/PayPal_Logo.png', alt: 'PayPal_Logo.png', width: 222, height: 59, title: 'PayPal' }
]

export default function IntegrationPartners() {
  return (
    <div className="container mx-auto pt-[160px]">
      <Image
        src={BILDIT_Integration_Partners_Effect_Mobile_BG}
        alt="BILDIT_Integration_Partners_Effect_Mobile_BG.png"
        className="sm:hidden top-0 left-0 -z-1 absolute"
        style={{ width: '100%', height: 'auto' }}
      />
      <h1 className="text-[44px] text-center text-neutral-900 lg:text-[104px] leading-none font-gt-walsheim font-extrabold uppercase">
        Integrate with the finest tools in the world
      </h1>
      <div className="relative mt-[89px] mb-[260px]">
        <Image
          src={BILDIT_Integration_Partners_BG}
          alt="BILDIT_Integration_Partners_BG.png"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src={BILDIT_Integration_Partners_Effect}
          alt="BILDIT_Integration_Partners_Effect.png"
          className="hidden sm:block top-0 left-0 absolute -z-1"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="px-4 lg:px-0 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {IntegrationPartnersItems.map((item, key) => {
          return <CardEight item={item} key={key} />
        })}
      </div>
    </div>
  )
}
