import Image from "next/image";
import BodyOne from "../components/BodyOne";
import HeadingOne from "../components/HeadingOne";
import SubTitleThree from "../components/SubTitleThree";
import SectionCard, { SectionCardType } from "../components/SectionCard";
import HeadingTwo from "../components/HeadingTwo";


// @todo: should come from cms
const CardItems:Array<SectionCardType> = [
    { 
        title:"Integrations", 
        head:"Integrations That Work Effortlessly", 
        content:"Connect your CMS with popular platforms, payment gateways, and tools, ensuring a smooth workflow tailored to your needs.",
        src:"Group19533.png",
        alt:"Group19533.png",
        dir:false
    },{ 
        title:"Native Checkout", 
        head:"One-Tap Checkout in Your App", 
        content:"Offer your customers a seamless one-tap checkout solution that's fast, intuitive, and built for conversions-on both mobile apps and websites.",
        src:"Group19479.png",
        alt:"Group19479.png",
        dir:true
    },{
        title:"Apple App Clips SDK", 
        head:"App Clips for Instant Access", 
        content:"Enable users to engage with your store immediately, without downloading a full app, creating frictionless experiences that boost engagement.",
        src:"Group19478.png",
        alt:"Group19478.png",
        dir:false
    },{ 
        title:"BILDIT CMS", 
        head:"Content Management System Made Simple", 
        content:"Manage your promotions, banners, contents, product listings, and more in one place. Updates sync instantly across both your mobile app and website, delivering a unified brand experience.",
        src:"Group19477.png",
        alt:"Group19477.png",
        dir:true
    }
]


export default function CommerceSuite(){
    return (
        <div className="text-center lg:text-left">
            <section className="pt-[175px] bg-[url('/images/BG_CommerceSuite.png')] pb-[100px] bg-cover bg-center px-[16px] lg:px-0">
                <div className="container mx-auto lg:grid grid-cols-2 gap-[60px] items-center">
                    <div>
                        <HeadingOne
                            sub1="Commerce"
                            sub2="Suite"
                            className1="tracking-[2%]"
                            className2="bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 bg-clip-text text-transparent" //from-[#3B1EED] via-[#ED1E79] via-[#EB67A1] via-[#ED1E79] to-[#ED1E79] bg-clip-text text-transparent
                        />
                        <SubTitleThree content="Unleash the Power of Commerce Suite with Our CMS" className="mt-[30px]"/>
                        <BodyOne className="text-[#595959] my-[20px]" content="Say goodbye to the hassle of juggling multiple tools. Our cutting-edge CMS brings everything you need into one seamless platform, designed for modern e-commerce businesses."/>
                    </div>
                    <div className="flex justify-center">
                        <Image src="/images/Hero_Image.png" alt="Hero_Image.png" width={604} height={493}/>
                    </div>
                </div>
                <div className="lg:pt-[100px]">
                    <SectionCard item={CardItems[0]}/>
                </div>

            </section>
            <section className="px-[16px] lg:px-0 bg-[url('/images/Vector245.png')] bg-[30%] bg-left bg-bottom bg-no-repeat">
                {
                    CardItems.slice(1).map((item, key) => {
                        return ( 
                            <SectionCard item={item} key={key}/> 
                        )
                    })
                }
            </section>
            
            <section className="mt-[90px] lg:mt-[200px] bg-[url('/images/Maskgroup.png')] bg-cover py-[50px] lg:py-[100px] bg-center px-[16px] lg:px-0">
                <div className="container mx-auto">
                    <HeadingTwo content="Why Choose BILDIT?" className="text-center text-white lg:pt-[40px]"/>
                    <div className="lg:grid grid-cols-4 justify-center">
                        <div className="py-[50px] lg:py-[100px] order-2 col-span-2 flex justify-center">
                            <Image src="/images/Group19470.png" alt="Group19470.png" width={600} height={575}/>
                        </div>
                        <div className="flex flex-col justify-around items-end order-1col-span-1">
                            <p className="font-400 text-[20px] lg:text-[24px] leading-[24px] mt-[44px] lg:leading-[34px] text-white">Future-Ready Technology: Designed to scale with your business and adapt to evolving e-commerce trends.</p>
                            <p className="font-400 text-[20px] lg:text-[24px] leading-[24px] mt-[44px] leading-[34px] text-white">Customer-Centric Features: From native checkout to App Clips, we prioritize enhancing your customer experience.</p>
                        </div>
                        <div className="flex flex-col justify-around order-2 col-span-1 text-center lg:text-left">
                            <p className="font-400 text-[20px] lg:text-[24px] leading-[24px] mt-[44px] lg:leading-[34px] text-white">Seamless Integration: A unified platform that effortlessly bridges mobile apps and websites..</p>
                            <p className="font-400 text-[20px] lg:text-[24px] leading-[24px] mt-[44px] lg:leading-[34px] text-white">Time-Saving Simplicity: Manage everything from content to commerce in one intuitive platform.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}