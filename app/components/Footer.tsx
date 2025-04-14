import BILDIT_Footer_Background_Mobile_BG from '../../public/images/footer/BILDIT_Footer_Background_Mobile_BG.png'
import BILDIT_Footer_Rectangle_BG from '../../public/images/footer/BILDIT_Footer_Rectangle_BG.png'
import BILDIT_Footer_ShadeBlurr_Subscribe_BG from '../../public/images/footer/BILDIT_Footer_ShadeBlurr_Subscribe_BG.png'
import BILDIT_Footer_ShadeBlurr_Subscribe_Circle from '../../public/images/footer/BILDIT_Footer_ShadeBlurr_Subscribe_Circle.png'
import BILDIT_Footer_SubscribeLines_BG from '../../public/images/footer/BILDIT_Footer_SubscribeLines_BG.png'
import BodyOne from './BodyOne'
import BodyTwo from './BodyTwo'
import DisplayThree from './DisplayThree'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import SubTitleFourCaps from './SubTitileFourCaps'
import Image from 'next/image'
import Link from 'next/link'

interface PartnerType {
  name: string
  src: string
  alt: string
  width: number
  height: number
}
const linkgroup1: Array<{ name: string; href: string }> = [
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Meet the Team', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'ROI Calculator', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Case Study', href: '#' }
]
const linkgroup2: Array<{ name: string; href: string }> = [
  { name: 'Reference App', href: '#' },
  { name: 'Native Checkout', href: '#' },
  { name: 'App Clip SDK', href: '#' },
  { name: 'CMS', href: '#' },
  { name: 'Mobile Checkout Index', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'React Native SDKs', href: '#' },
  { name: 'Demo', href: '#' },
  { name: 'KPIs and Metrics', href: '#' }
]

const linkgroup3: Array<{ name: string; href: string }> = [
  { name: 'How It Works', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Documentation', href: '#' },
  { name: 'Developers', href: '#' },
  { name: 'Webinars', href: '#' },
  { name: 'For IT', href: '#' },
  { name: 'For Agencies', href: '#' },
  { name: 'For Brands', href: '#' },
  { name: 'Resources', href: '#' }
]

const linkgroup4: Array<{ name: string; href: string }> = [
  { name: 'Enterprise License', href: '#' },
  { name: 'For Investors', href: '#' },
  { name: 'Terms + Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' }
]

const sociallink: Array<{ alt: string; src: string; href: string }> = [
  { alt: 'LinkedIn Link', src: '/images/footer/akar-icons_linkedin-box-fill.svg', href: '#' },
  { alt: 'Facebook Link', src: '/images/footer/fa-brands_facebook-square.svg', href: '#' },
  { alt: 'Twitter Link', src: '/images/footer/fe_twitter.svg', href: '#' },
  { alt: 'Instagram', src: '/images/footer/fe_instagram.svg', href: '#' }
]

const partners: Array<PartnerType> = [
  { name: 'salesforce', src: '/images/footer/salesforce.svg', alt: 'salesforce.svg', width: 102, height: 80 },
  { name: 'shopify', src: '/images/footer/shopify.svg', alt: 'shopify.svg', width: 177, height: 45 },
  { name: 'sap', src: '/images/footer/sap.svg', alt: 'sap.svg', width: 112, height: 50 },
  { name: 'magento', src: '/images/footer/magento.svg', alt: 'magento.svg', width: 167, height: 46 },
  { name: 'apple-pay', src: '/images/footer/apple-pay.svg', alt: 'apple-pay.svg', width: 91, height: 37 },
  { name: 'after-pay', src: '/images/footer/after-pay.svg', alt: 'after-pay.svg', width: 166, height: 31 },
  { name: 'aci', src: '/images/footer/aci.svg', alt: 'aci.svg', width: 208, height: 32 }
]

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="container mx-auto lg:grid grid-cols-2 gap-[60px] items-center py-[120px] px-4 lg:px-0">
        {/* Left Section */}
        <div className="space-y-4 text-center lg:text-left">
          <DisplayThree content={'Ready to transform Your Business?'} />
          <BodyTwo
            content={'Experience the power of seamless content management. Try it free or book a demo today!'}
            className={'text-cms-black-two'}
          />
          <SecondaryButton content="Contact Sales" />
        </div>
        {/* Right Section - Form */}
        <div className="mt-12 p-9 lg:p-12 bg-gray-50 rounded-xl shadow-lg round-[14px] border border-gray-300">
          <form className="space-y-4 lg:space-y-8">
            <div>
              <Input type="text" placeholder="Full Name" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="md:grid grid-cols-2 gap-4 items-center mt-8 lg:mt-12 text-center">
              <div className="text-sm text-black font-gt-walsheim tracking-wide font-[14px]">
                *No credit card required
              </div>
              <PrimaryButton content="Start Your Free Trial" className="w-full md:w-auto mt-3 lg:mt-0 lg:mx-right" />
            </div>
          </form>
        </div>
      </section>

      <section className="py-[100px] bg-cms-lighter-gray px-4 lg:px-0">
        <div className="container mx-auto">
          <DisplayThree content="BILDIT CMS provides SDK and API integrations" className="text-center" />
          <SubTitleFourCaps content="with top e-commerce platforms:" />
          <div className="flex justify-center">
            <div className="text-center grid  2xl:flex 2xl:item-center grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((item, key) => {
                return (
                  <div key={key} className="text-center flex items-center">
                    <Link href="#" className="inline-block">
                      <Image alt={item.alt} src={item.src} width={item.width} height={item.height} />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[100px] relative">
        <Image
          src={BILDIT_Footer_ShadeBlurr_Subscribe_BG}
          className="hidden lg:block top-0 right-0 z-[-1] absolute"
          alt="BILDIT_Footer_ShadeBlurr_Subscribe_BG.png"
          style={{ width: 'auto', height: 'auto' }}
        />
        <div className="overflow-hidden relative px-4 lg:px-0">
          <Image
            src={BILDIT_Footer_Background_Mobile_BG}
            className="block lg:hidden top-0 left-0 z-[-1] absolute"
            alt="BILDIT_Footer_Background_Mobile_BG.png"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="container mx-auto py-[62px]">
            <DisplayThree content="Sign up for valuable insights" className="text-center" />
            <BodyOne
              content={"Don't worry we won't spam you, we send a insights for how to improve your mobile app"}
              className="my-12 text-center"
            />
            <div className="lg:flex justify-center items-center">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white lg:w-240px lg:w-[490px] px-5 py-2 border border-cms-input-color rounded-[3px] focus:outline-none focus:border-blue-500 text-cms-base"
                />
              </div>
              <div className="lg:pl-5 mt-5 lg:mt-0">
                <PrimaryButton content="Subscribe" className="w-full" />
              </div>
            </div>
            <hr className="my-5 lg:my-12 border-gray-300" />
          </div>
        </div>
        <div className="px-4 lg:px-0 relative">
          <div className="hidden lg:block">
            <Image
              src={BILDIT_Footer_Rectangle_BG}
              className="top-0 left-0 -z-3 absolute"
              alt="BILDIT_Footer_Rectangle_BG.png"
              style={{ width: '100%', height: '100%' }}
            />
            <Image
              src={BILDIT_Footer_ShadeBlurr_Subscribe_Circle}
              className="bottom-0 left-0 -z-2 absolute"
              alt="BILDIT_Footer_ShadeBlurr_Subscribe_Circle.png"
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src={BILDIT_Footer_SubscribeLines_BG}
              className="bottom-40 right-0 -z-1 absolute"
              alt="BILDIT_Footer_SubscribeLines_BG.png"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <div className="block lg:hidden">
            <Image
              src={BILDIT_Footer_Rectangle_BG}
              className="top-0 left-0 -z-3 absolute"
              alt="BILDIT_Footer_Rectangle_BG.png"
              style={{ width: '100%', height: '100%' }}
            />
            <Image
              src={BILDIT_Footer_Background_Mobile_BG}
              className="top-0 left-0 -z-3 absolute"
              alt="BILDIT_Footer_Background_Mobile_BG.png"
              style={{ width: '100%', height: '50%' }}
            />
            <Image
              src={BILDIT_Footer_Background_Mobile_BG}
              className="bottom-0 left-0 -z-3 absolute"
              alt="BILDIT_Footer_Background_Mobile_BG.png"
              style={{ width: '100%', height: '50%' }}
            />
          </div>
          <div className="container mx-auto lg:py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-cms-basic lg:text-cms-base text-cms-grey text-center lg:text-left">
            {/* Logo & Contact */}
            <div className="text-center">
              <div className="w-[127px] h-[37px] lg:w-[187px] lg:h-[54px] relative inline-block">
                <Image
                  src="/images/others/BILDIT_Logo.svg"
                  layout="fill"
                  objectFit="cover"
                  className="inline-block"
                  alt="BILDIT Logo"
                />
              </div>
              <div className="space-y-0 lg:space-y-5">
                <div className="mt-4 mt-10">
                  <Image
                    className="inline-block"
                    src="/images/footer/markunread_mailbox.svg"
                    alt="markunread_mailbox.svg"
                    width={21}
                    height={21}
                  />
                  <span className="ml-4">hello@bildit.co</span>
                </div>
                <div className="mt-4 mt-5">
                  <Image
                    className="inline-block"
                    src="/images/footer/call.svg"
                    alt="phone icon"
                    width={21}
                    height={21}
                  />
                  <span className="ml-4">(888) 245-8277</span>
                </div>
                <p className="font-normal leading-[26px] tracking-[0%]">3540 Torringdon Way Suite 200</p>
                <p className="font-normal leading-[26px] tracking-[0%]">Charlotte NC 28277</p>
              </div>

              <div className="space-x-6 pt-10">
                {sociallink.map((item, key) => {
                  return (
                    <Link href={item.href} key={key}>
                      <Image className="inline-block" src={item.src} alt={item.alt} width={24} height={24} />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Links */}
            <div>
              <ul className="space-y-1 lg:space-y-7">
                {linkgroup1.map((item, key) => {
                  return (
                    <Link href={item.href} className="block hover:underline" key={key}>
                      {item.name}
                    </Link>
                  )
                })}
              </ul>
            </div>
            <div>
              <ul className="space-y-1 lg:space-y-7">
                {linkgroup2.map((item, key) => {
                  return (
                    <Link href={item.href} className="block hover:underline" key={key}>
                      {item.name}
                    </Link>
                  )
                })}
              </ul>
            </div>

            <div>
              <ul className="space-y-1 lg:space-y-7">
                {linkgroup3.map((item, key) => {
                  return (
                    <Link href={item.href} className="block hover:underline" key={key}>
                      {item.name}
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="container mx-auto md:flex justify-between text-center text-[12px] lg-text-base text-gray-500 py-7">
            <p>Copyright &copy; 2023 BILDIT, INC. All Rights Reserved</p>
            <div className="flex justify-center gap-4 mt-2">
              {linkgroup4.map((item, key) => {
                return (
                  <Link href={item.href} className="hover:underline" key={key}>
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
