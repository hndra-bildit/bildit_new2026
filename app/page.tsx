import Image from "next/image";
import SecondaryButton from "./components/SecondaryButton";
import PrimaryButton from "./components/PrimaryButton";
import HeadingOne from "./components/HeadingOne";
import HeadingTwo from "./components/HeadingTwo";
import BelkResultsImage from "./components/BelkResultImage";
import IntroVideo from "./components/IntroVideo";
import HomeSelectGroups from "./components/HomeSelectGroups";
import SubTitleThree from "./components/SubTitleThree";
import SubTitleFiveCaps from "./components/SubTitleFiveCaps";
import BodyTwo from "./components/BodyTwo";
import DisplayOne from "./components/DisplayOne";



const cardgroup:Array<{ src:string, alt:string, title:string }>= [
  { src: "Campaign_Control.png", alt: "Campaign_Control", title:"Complete control over campaigns" },
  { src: "Frame_19378.png", alt: "Frame_19378.png", title:"Advanced mobile app capabilities" },
  { src: "Frame_19379.png", alt: "Frame_19379.png", title:"Easy cross-channel content management" }
]
const belkResults:Array<{ src:string, alt:string }>= [
  { src: "YOY (3).png", alt: "YOY Image" },
  { src: "AOV (2).png", alt: "AOV Image" },
  { src: "CVR lift (2).png", alt: "CSR lift Image" },
]
export default function Home() {
  return (
    <>
      <section className="store-front pt-[160px]">
        <div className="container mx-auto">
          <HeadingOne
            sub1={"Modern"}
            sub2={"CMS"}
            sub3={"Unified Storefront"}
            className1={""}
            className2={"bg-gradient-to-r from-[#ED1E79] to-[#3B1EED] bg-clip-text text-transparent"}
          />
          <div className="grid grid-cols-2 gap-[24px]">
            <div>
              <SubTitleThree content={"Empowering Marketers with Cross-Channel Control"}/>
              <div className="flex space-x-[30px] mt-[80px]">
                <SecondaryButton content="Learn More"/>
                <PrimaryButton content="Watch Demo" />
              </div>
            </div>
            <div className="pt-[24px]">
              <Image alt="BILDIT CMS" src="/images/HeroImage.png" width={900} height={900}/>
            </div>
          </div>
        </div>

      </section>
      <section className="py-[100px] bg-[#F5F7FA]">
        <HeadingTwo content={"Belk's Results"} className={"text-center"}/>
        <p className="text-[32px] font-600 leading-[40px] text-[#595959] text-center">After Switching to BILDIT CMS and App</p>
        <div className="container mx-auto flex justify-between">
        {
          belkResults.map((item, key) => (
            <BelkResultsImage item={item} key={key} />
          ))
        }
        </div>
      </section>

      <section className="">
        <div className="container mx-auto mt-[180px] py-[80px] grid grid-cols-2 gap-[40px]">
          <div>
            <SubTitleFiveCaps content={"Why BILDIT"}/>
            <HeadingTwo content={"Build Anything You Want."} />
            <SubTitleThree content={"No coding experience required. Without IT."} className={"mt-[30px]"}/>
          </div>
          <div className="mt-[52px] space-y-[14px]">
            <p className="leading-[26px] text-[18px] text-[#595959] font-400">BILDIT CMS was designed for e-commerce marketing teams striving to deliver highly personalized, targeted campaigns across web and mobile channels. It was born from the frustration of dealing with limited solutions that made creating engaging, effective campaigns unnecessarily slow or generic. Waiting weeks to launch on mobile or settling for cookie-cutter tools shouldn’t hold back your growth.</p>
            <p className="leading-[26px] text-[18px] text-[#595959] font-400">That’s why we built BILDIT CMS - to give you the freedom to launch anything you want, exactly how and when you want, on both web and mobile platforms..</p>
          </div>
        </div>
        <div className="flex justify-center relative">
          <IntroVideo src={"/images/Screenshot 2023-09-06 at 19.17 1.png"}/>
          <div className="h-1/2 w-full bg-[#F5F7FA] absolute bottom-0 left-0 z-[-1]"></div>
        </div>
      </section>

      <section className="pt-[212px] bg-[#F5F7FA]">
        <div className="container mx-auto">
          <SubTitleFiveCaps content={"BILDIT CMS overview"} className={"text-center"}/>
          <HeadingTwo content={"Deliver seamless cross-channel content that boosts revenue."} className={"text-center"}/>
          <SubTitleThree content={"Launch more, launch faster. On BILDIT CMS, you can line up your next campaign in hours, not weeks."} className={"text-center mt-[20px]"}/>
          <div className="flex justify-between flex-wrap pb-[122px]">
            {
              cardgroup.map((item, key) => {
                return (
                  <div className="max-w-[440px] pt-[50px]" key={key}>
                    <div className="flex justify-center py-[77] border border-[#DBDBDB] rounded-[14px] bg-[#F5F7FA] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)]">
                      <Image src={`/images/${item.src}`} alt={item.alt} width={216} height={266} />
                    </div>
                    <div>
                      <p className="mt-[50px] text-[34px] font-700 text-center secondary-font leading-[100%]">{item.title}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="py-[100px] fifth-bg-[url('/images/fifthSection.png')] bg-cover bg-center">
          <HomeSelectGroups/>
      </section>

      <section className="sixteen-section py-[90px] fifth-bg-[url('/images/sixteen_bg.png')] bg-cover bg-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="max-w-[892px]">
            <SubTitleFiveCaps content={"One backend. One unified solution."}/>
            <DisplayOne content={"Effortlessly create sophisticated content for web and mobile"} className={"text-white"}/>
            <BodyTwo content={"One CMS platform. Endless possibilities to create stunning images, banners, recommendations, animations and customized display configurations."} className={"text-[#D3D6DB]"}/>
          </div>
          <div>
            <Image src="/images/Img_Home_LastSection.png" alt="Img_Home_LastSection.png" width={471} height={461} />
          </div>
        </div>
      </section>
    </>
  );
}
