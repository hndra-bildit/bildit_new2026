"use client"
import { useState } from 'react';
import Image from 'next/image'

const HomeSelectGroups: React.FC = () => {
    const [type, setType] = useState("build");
    const handleChange = (val:string) => {
        setType(val);
    }
    return (
        <>
            <button onClick={()=>handleChange("build")} className="bg-black text-white secondary-font text-[24px] w-[193px] h-[111px] flex-wrap items-center justify-center rounded-full cursor-pointer">
                <div className="text-center flex justify-center">
                    <Image src={`/images/blush-brush-02.svg`} alt="blush-brush-02.svg" width={34} height={34}/>
                </div>
                <span className="text-[24px] font-400">{type}</span>
            </button>
            <button onClick={()=>handleChange("launch")} className="bg-[#F2F2F2] text-[#404040] secondary-font text-[24px] w-[193px] h-[111px] flex-wrap items-center justify-center rounded-full cursor-pointer">
                <div className="text-center flex justify-center">
                    <Image src={`/images/rocket-01.svg`} alt="rocket-01.svg" width={34} height={34}/>
                </div>
                <span className="text-[24px] font-700">{type}</span>
            </button>

            <button onClick={()=>handleChange("control")} className="bg-[#F2F2F2] text-[#404040] secondary-font text-[24px] w-[193px] h-[111px] flex-wrap items-center justify-center rounded-full cursor-pointer">
                <div className="text-center flex justify-center">
                    <Image src="/images/configuration-02.svg" alt="configuration-02.svg" width={34} height={34}/>
                </div>
                <span className="text-[24px] font-700">{type}</span>
            </button>
        </>
    )
}

export default HomeSelectGroups;