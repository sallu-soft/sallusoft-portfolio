import Image from 'next/image'
import React from 'react'

const MissionVissionCard = ({Data}) => {
  return (
     <>
    {Data.map((menu)=>{
      return(<>
  <div className=" rounded-lg justify-center items-center mx-auto shadow-xl md:h-[400px] w-fit bg-white md:w-full xl:w-fit m-3 relative overflow-hidden flex flex-col md:flex-row ">
      
          <div className=" transition duration-300 ease-in-out hover:scale-110">
       <Image src={menu.imageUrl} width={300} height={100} alt="breakfast" className="card-image h-[350px] md:h-[400px] w-fit lg:w-[600px] xl:[400px] bg-red-700 rounded-t-lg"/></div>
       <div className="p-5 text-center space-y-2 text-black">
           <span className="text-3xl font-semibold">{menu.title}</span>
           <h2 className="card-title font-semibold md:w-[500px] text-justify p-3">{menu.description}</h2>
          
           </div>
      
   </div></>)
  })}
</>
  )
}

export default MissionVissionCard