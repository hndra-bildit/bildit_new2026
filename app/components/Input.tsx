"use client"
import { useState } from "react";

interface Props{
    type:string,
    placeholder:string,
    className?: string
}

const Input: React.FC<Props> = ({type, placeholder ,className }) => {
    return (
        <input 
        type = {type}
        placeholder = {placeholder}
        className={`w-full p-[9px] lg:p-[20px] border border-[#697B8C] rounded-[3px] focus:outline-none focus:border-blue-500 text-[14px] lg:text-[18px] ${className}`} />
    )
}

export default Input;