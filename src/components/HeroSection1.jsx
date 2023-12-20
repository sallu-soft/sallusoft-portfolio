'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const HeroSection1 = ({data}) => {
 

  const [currentState,setCurrentState] = useState(0);
  // const [dataset,setDataSet] = useState(data);
  useEffect(() =>{
    const timer = setTimeout(() =>{
      if(currentState ===2){
        setCurrentState(0);
      }else{
        setCurrentState(currentState+1);
      }
    }
  ,5000)
  return () => clearTimeout(timer)},[currentState]);
  const bgImageStyle = {
    backgroundImage: ` url(${data[0]?.imageUrl})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    height:"85vh",
    
    transition: 'background-image 0.3s ease-in-out',
  }
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  }
  return (
    <div style={bgImageStyle} className="relative containerbg">
      <div className="flex flex-col justify-center items-center min-h-[85vh]">
    <h2 className="text-white text-3xl md:text-4xl  lg:text-4xl xl:text-6xl font-bold text-shadow pb-5 brightness-200 text-center drop-shadow-lg shadow-black">{data[0]?.title}</h2>
    <h3 className="text-white  md:text-2xl lg:text-3xl font-semibold">{data[0]?.description}</h3>
    <div className='carousel-boult flex justify-center items-center absolute bottom-5
    '>
        {
          data.map((ind,currentState) =>{
          return  <span key={currentState} className="w-[150px] cursor-pointer h-[100px] flex justify-center items-center text-white border-white border ml-[10px] rounded-lg" onClick={()=>goToNext(currentState)}><Image src={ind.imageUrl} width={100} height={100} className="h-full w-fit rounded-lg " alt={"Background Image"} /></span>
          })
        }
    </div>
    </div>
   
    </div>
  )
}

export default HeroSection1;