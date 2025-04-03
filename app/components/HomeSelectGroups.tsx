import Image from 'next/image'

const HomeSelectGroups: React.FC = () => {
    return (
        <>
            <button className="bg-black text-white secondary-font text-[24px] w-[193px] h-[111px] flex-wrap items-center justify-center rounded-full cursor-pointer">
                <div className="text-center flex justify-center">
                    <Image src="/images/blush-brush-02.svg" alt="blush-brush-02.svg" width={34} height={34}/>
                </div>
                <span className="text-[24px] font-400">Build</span>
            </button>
            <button className="bg-[#F2F2F2] text-[#404040] secondary-font text-[24px] w-[193px] h-[111px] flex-wrap items-center justify-center rounded-full cursor-pointer">
                <div className="text-center flex justify-center">
                    <Image src="/images/rocket-01.svg" alt="rocket-01.svg" width={34} height={34}/>
                </div>
                <span className="text-[24px] font-700">launch</span>
            </button>

            <button className="bg-[#F2F2F2] text-[#404040] secondary-font text-[24px] w-[193px] h-[111px] flex-wrap items-center justify-center rounded-full cursor-pointer">
                <div className="text-center flex justify-center">
                    <Image src="/images/configuration-02.svg" alt="configuration-02.svg" width={34} height={34}/>
                </div>
                <span className="text-[24px] font-700">control</span>
            </button>
        </>
    )
}

export default HomeSelectGroups;