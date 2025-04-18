import HeadingOne from '../components/HeadingOne'
import CardEight, { CardEightType } from '@/app/components/CardEight'
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
    <div className="container mx-auto pt-20 lg:pt-40">
      <Image
        src="/images/integration_partners/BILDIT_Integration_Partners_Effect_Mobile_BG.png"
        alt="BILDIT_Integration_Partners_Effect_Mobile_BG.png"
        className="sm:hidden top-0 left-0 -z-1 absolute w-full h-auto"
        width={1200}
        height={0}
      />
      <HeadingOne sub1="Integrate with the finest tools in the world" className1="text-center" />
      <div className="relative mt-10 lg:mt-25 mb-20 lg:mb-60">
        <Image
          src="/images/integration_partners/BILDIT_Integration_Partners_BG.png"
          alt="BILDIT_Integration_Partners_BG.png"
          className="w-full h-auto hidden lg:block"
          width={1200}
          height={0}
        />
        <Image
          src="/images/integration_partners/BILDIT_Integration_Partners_Mobile_BG.png"
          alt="BILDIT_Integration_Partners_Mobile_BG.png"
          className="w-full h-auto lg:hidden"
          width={1200}
          height={0}
        />
        <Image
          src="/images/integration_partners/BILDIT_Integration_Partners_Effect.png"
          alt="BILDIT_Integration_Partners_Effect.png"
          className="hidden sm:block top-0 left-0 absolute -z-1 w-full h-auto"
          width={1200}
          height={0}
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
