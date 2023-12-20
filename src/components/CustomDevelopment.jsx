import Image from 'next/image';
import React from 'react'
import { FaAngellist } from "react-icons/fa";
const CustomDevelopment = () => {
  return (
    <div className="md:flex h-fit w-[95%] md:w-[65%] mx-auto bg-white py-3">
        <div className="w-full md:w-1/2 flex flex-col gap-y-2 p-8">
            <h3 className="text-lg font-semibold text-red-700">We Do</h3>
            <h2 className="font-bold text-4xl text-black">CUSTOM <br/> DEVELOPMENT</h2>
            <ul className="mt-4 flex gap-y-4 flex-col">
                <li className="text-black flex items-center gap-2"><FaAngellist className="text-xl text-red-800 font-bold"/>Custom PHP Application Development</li>
                <li className="text-black flex items-center gap-2"><FaAngellist className="text-xl text-red-800 font-bold"/>Web Application Development</li>
                <li className="text-black flex items-center gap-2"><FaAngellist className="text-xl text-red-800 font-bold"/>MERN Stack Development</li>
                <li className="text-black flex items-center gap-2"><FaAngellist className="text-xl text-red-800 font-bold"/>API Development And Integration</li>
                <li className="text-black flex items-center gap-2"><FaAngellist className="text-xl text-red-800 font-bold"/>Database Design And Optimization</li>
                <li className="text-black flex items-center gap-2"><FaAngellist className="text-xl text-red-800 font-bold"/>Maintanance And Support</li>
            </ul>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image src="/digitalMarketingService.png" alt="Digital" width={450} height={400} />
        </div>
    </div>
  )
}

export default CustomDevelopment