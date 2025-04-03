import HeadingOne from "../components/HeadingOne";
import IntroVideo from "../components/IntroVideo";
import PrimaryButton from "../components/PrimaryButton";
import SubTitleThree from "../components/SubTitleThree";


export default function StoreFront() {
    return (
        <>
            <section className="pt-[160px] text-center">
                <HeadingOne
                    sub1={"BILDIT"}
                    sub2={"Storefront"}
                    className1={"text-center"}
                    className2={"bg-gradient-to-r from-pink-300 via-pink-500 to-purple-400 text-transparent bg-clip-text"}
                />
                <SubTitleThree content={"Stop building, start launching—we’ve done the work for you!"}/>
                <div className="mt-[80px]">
                    <PrimaryButton content="Get Started"/>
                </div>
                <div className="mt-[73px] flex justify-center">
                    <IntroVideo src={"/images/Screenshot 2023-09-06 at 19.17 1.png"}/>
                </div>
            </section>

        </>
    )
}