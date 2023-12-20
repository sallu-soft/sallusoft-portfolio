import Image from 'next/image'
import React from 'react'
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaHandshake } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-800">Our Core Values</h2>
    <p className="mt-4 text-center text-gray-600">
      Our values are constant and our processes are transparent—you will always know what we are working on, and why.
    </p>
    <div className="mt-12 grid grid-cols-3 gap-6">
      <div className="flex flex-col justify-center items-center p-4 rounded-md bg-white shadow-sm">
        {/* <Image className="w-16 h-16 mb-4 mx-auto" src="./next.svg" alt="Communication icon" width={20} height={20}/> */}
        <SlEnvolopeLetter className="w-18 h-18 text-6xl text-red-700 font-bold"/>
        <h3 className="text-lg font-bold text-gray-900">Communication</h3>
        <p className="mt-2 text-gray-600">
          We believe in open and honest communication with our clients and partners.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 rounded-md bg-white shadow-sm hover:bg-gray-700 hover:text-white duration-500">
      
      <FaHandshake className="w-18 h-18 text-6xl text-pink-700 font-bold"/>
        <h3 className="text-lg font-bold text-gray-900">Commitment</h3>
        <p className="mt-2 text-gray-600">
          We are committed to delivering our projects on time and on budget.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-4 rounded-md bg-white shadow-sm">
      <FaLaptopCode className="w-18 h-18 text-6xl text-green-900 font-bold"/>
        <h3 className="text-lg font-bold text-gray-900">Quality</h3>
        <p className="mt-2 text-gray-600">
          We are committed to delivering high-quality work that meets or exceeds our clients' expectations.
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default CoreValues