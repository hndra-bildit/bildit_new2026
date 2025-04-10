
import Image from 'next/image';
import Link from 'next/link';
import DisplayThree from './DisplayThree'
import React from 'react';
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import BodyTwo from './BodyTwo';
import SubTitleFourCaps from './SubTitileFourCaps';
import BodyOne from './BodyOne';

interface PartnerType{
    name: string,
    width: number,
    height: number
}
const linkgroup1:Array<{name:string, href:string}> = [
    { name: "About Us", href: "#"},
    { name: "Contact Us", href: "#"},
    { name: "Meet the Team", href: "#"},
    { name: "Blog", href: "#"},
    { name: "Careers", href: "#"},
    { name: "Partners", href: "#"},
    { name: "ROI Calculator", href: "#"},
    { name: "Pricing", href: "#"},
    { name: "Case Study", href: "#"},
]
const linkgroup2:Array<{name:string, href:string}> = [
    { name: "Reference App", href: "#"},
    { name: "Native Checkout", href: "#"},
    { name: "App Clip SDK", href: "#"},
    { name: "CMS", href: "#"},
    { name: "Mobile Checkout Index", href: "#"},
    { name: "Integrations", href: "#"},
    { name: "React Native SDKs", href: "#"},
    { name: "Demo", href: "#"},
    { name: "KPIs and Metrics", href: "#"},
]

const linkgroup3:Array<{name:string, href:string}> = [
    { name: "How It Works", href: "#"},
    { name: "Features", href: "#"},
    { name: "Documentation", href: "#"},
    { name: "Developers", href: "#"},
    { name: "Webinars", href: "#"},
    { name: "For IT", href: "#"},
    { name: "For Agencies", href: "#"},
    { name: "For Brands", href: "#"},
    { name: "Resources", href: "#"},
]

const linkgroup4:Array<{name:string, href:string}> = [
    { name: "Enterprise License", href: "#" },
    { name: "For Investors", href: "#" },
    { name: "Terms + Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" }
]

const sociallink:Array<{alt:string, src:string, href:string}> = [
    { alt:"LinkedIn Link" , src: "akar-icons_linkedin-box-fill.svg", href:"#"},
    { alt:"Facebook Link" , src: "fa-brands_facebook-square.svg", href:"#"},
    { alt:"Twitter Link" , src: "fe_twitter.svg", href:"#"},
    { alt:"Instagram" , src: "fe_instagram.svg", href:"#"},

]

const partners:Array<PartnerType> = [
    { name: "salesforce", width:102, height:80 },
    { name: "shopify", width: 177, height: 45 },
    { name: "sap", width: 112, height:50 },
    { name: "magento", width: 167, height:46 },
    { name: "apple-pay", width:91, height:37},
    { name: "after-pay", width: 166, height:31},
    { name: "aci", width:208, height:32 }
];

const Footer: React.FC = () => {
    return (
        <footer>
            <section className="container mx-auto lg:grid grid-cols-2 gap-[60px] items-center py-[120px] px-4 lg:px-0">
                {/* Left Section */}
                <div className="space-y-4 text-center lg:text-left">
                    <DisplayThree content={"Ready to transform Your Business?"}/>
                    <BodyTwo content={"Experience the power of seamless content management. Try it free or book a demo today!"} className={"text-[#404040]"}/>
                    <SecondaryButton content="Contact Sales"/>
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
                        <div className='md:flex items-center justify-end mt-8 lg:mt-12 text-right'>
                            <p className="text-sm text-black font-gt-walsheim tracking-wide font-[14px] mr-[25px] text-left">*No credit card required</p>
                            <PrimaryButton content='Start Your Free Trial' className='mx-right' />
                        </div>
                    </form>
                </div>
            </section>

            <section className="py-[100px] bg-lighter-gray px-4 lg:px-0">
                <div className='container mx-auto'>
                    <DisplayThree content="BILDIT CMS provides SDK and API integrations" className="text-center"/>
                    <SubTitleFourCaps content='with top e-commerce platforms:'/>
                    <div className='flex justify-center'>
                        <div className='text-center grid  2xl:flex 2xl:item-center grid-cols-2 lg:grid-cols-3 gap-8'>
                            {
                                partners.map((item,key) => {
                                    return( 
                                        <div key={key} className='text-center flex items-center'>
                                            <Link href="#" className='inline-block'>
                                                <Image alt={`${item.name} logo`} src={`/images/${item.name}.svg`} width={item.width} height={item.height}/>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:bg-[url('/images/bg-footer.png')] pb-[100px] bg-cover bg-center">
                <div className="bg-[url('/images/shadeBlurr-Subscribe.png')] bg-cover bg-center lg:bg-none">
                    <div className="container mx-auto py-[62px]">
                        <DisplayThree content="Sign up for valuable insights" className='text-center'/>
                        <BodyOne content={"Don't worry we won't spam you, we send a insights for how to improve your mobile app"} className="my-[50px] text-center"/>
                        <div className='flex justify-center items-center'>
                            <div>
                                <input
                                type="email"
                                placeholder="Email"
                                className="w-240px lg:w-[490px] px-5 py-2border border-[#697B8C rounded-[3px] focus:outline-none focus:border-blue-500 text-[18px]"
                                />
                            </div>
                            <div className='pl-5'>
                                <PrimaryButton content= "Subscribe"/>
                            </div>
                        </div>
                        <hr className="my-5 lg:my-12 border-gray-300" />
                    </div>
                </div>
                <div className="bg-center px-4 lg:px-0 lg:bg-none">
                    <div className="container mx-auto lg:py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-[14px] lg:text-[18px] text-grey text-center lg:text-left">
                        {/* Logo & Contact */}
                        <div className='text-center'>
                            <div className="w-[127px] h-[37px] lg:w-[187px] lg:h-[54px] relative inline-block" >
                                <Image src="/images/bildit_horiz.svg" layout="fill" objectFit="cover" className='inline-block' alt="BILDIT Logo"/>
                            </div>
                            <div className="space-y-0 lg:space-y-5">
                                <div className="mt-4 mt-10">
                                    <Image className='inline-block' src="/images/markunread_mailbox.svg" alt="company contact email" width={24} height={24} />
                                    <span className='ml-4'>hello@bildit.co</span>
                                </div>
                                <div className="mt-4 mt-5">
                                    <Image className='inline-block' src="/images/call.svg" alt="company contact phone" width={24} height={24} />
                                    <span className='ml-4'>(888) 245-8277</span>
                                </div>
                                <p className='font-normal leading-[26px] tracking-[0%]'>3540 Torringdon Way Suite 200</p>
                                <p className='font-normal leading-[26px] tracking-[0%]'>Charlotte NC 28277</p>
                            </div>

                            <div className='space-x-6 pt-10'>
                                {
                                    sociallink.map((item,key) => {
                                        return (
                                            <Link href={item.href} key={key}>
                                                <Image className="inline-block" src={`/images/${item.src}`} alt={item.alt} width={24} height={24} />
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <ul className="space-y-1 lg:space-y-7">
                                {
                                    linkgroup1.map((item, key) => {
                                        return ( 
                                            <Link href={item.href} className='block hover:underline' key={key}>{item.name}</Link>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-1 lg:space-y-7">
                                {
                                    linkgroup2.map((item, key) => {
                                        return ( 
                                            <Link href={item.href} className='block hover:underline' key={key}>{item.name}</Link>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                        <div>
                            <ul className="space-y-1 lg:space-y-7">
                                {
                                    linkgroup3.map((item, key) => {
                                        return ( 
                                            <Link href={item.href} className='block hover:underline' key={key}>{item.name}</Link>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="container mx-auto md:flex justify-between text-center text-[12px] lg-text-base text-gray-500 py-7">
                        <p>Copyright &copy; 2023 BILDIT, INC. All Rights Reserved</p>
                        <div className="flex justify-center gap-4 mt-2">
                            {
                                linkgroup4.map((item, key) => {
                                    return (
                                        <Link href={item.href} className = "hover:underline" key={key}>{ item.name }</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
