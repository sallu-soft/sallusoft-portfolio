// 'use client'
// import React, { useEffect, useState } from 'react';
// import HeroSection1 from '@/components/HeroSection1';
// import { client } from '../../sanity/lib/client';
// import { Titillium_Web } from 'next/font/google';
// import Title from '@/components/Title';
// import WhatWeAre from '@/components/WhatWeAre';
// import { groq } from 'next-sanity';
// import ServicesCard from '@/components/ServicesCard';
// import AboutUs from '@/components/AboutUs';
// import MissionVissionCard from '@/components/missinvission/MissionVissionCard';
// import MissionVission from '@/components/missinvission/Misson&Vission';

// const tw = Titillium_Web({ subsets: ['latin'], weight: '700' });

// async function getData() {
//   const query = groq`*[_type == "herosection"]{
//     "imageUrl": image.asset->url,
//     title,
//     description
//   }`;
//   const res = await client.fetch(query, { cache: 'no-store' });

//   if (!res || res.length === 0) {
//     throw new Error('Failed to fetch data');
//   }

//   return res;
// }

// async function getWwdData() {
//   const query = groq`*[_type == "whatwedo"]{
//     "imageUrl": image.asset->url,
//     title,
//     description
//   }`;
//   const res = await client.fetch(query, { cache: 'no-store' });

//   if (!res || res.length === 0) {
//     throw new Error('Failed to fetch data');
//   }

//   return res;
// }
// async function getServiceData() {
//   const query = groq`*[_type == "services"]{
//     "imageUrl": image.asset->url,
//     title,
//     category,
//     description
//   }`;
//   const res = await client.fetch(query, { cache: 'no-store' });

//   if (!res || res.length === 0) {
//     throw new Error('Failed to fetch data');
//   }

//   return res;
// }
// async function getAbout() {
//   const query = groq`*[_type == "homeabout"]{
//     "imageUrl": image.asset->url,
//     title,
//     description
//   }`;
//   const res = await client.fetch(query, { cache: 'no-store' });

//   if (!res || res.length === 0) {
//     throw new Error('Failed to fetch data');
//   }

//   return res;
// }
// async function getMV() {
//   const query = groq`*[_type == "missionvission"]{
//     "imageUrl": image.asset->url,
//     title,
//     description
//   }`;
//   const res = await client.fetch(query, { cache: 'no-store' });

//   if (!res || res.length === 0) {
//     throw new Error('Failed to fetch data');
//   }

//   return res;
// }

// const Home = () => {
//   const [heroData, setHeroData] = useState(null);
//   const [wwdData, setWwdData] = useState(null);
//   const [serviceData, setServiceData] = useState(null);
//   const [homeAboutData, setHomeAboutData] = useState(null);
//   const [missionvisionData, setMissionvisionData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [heroRes, wwdRes,services ,homeAbout,mv] = await Promise.all([getData(), getWwdData(),getServiceData(),getAbout(),getMV()]);
//         setHeroData(heroRes);
//         setWwdData(wwdRes);
//         setServiceData(services);
//         setHomeAboutData(homeAbout);
//         setMissionvisionData(mv);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);
// console.log(homeAboutData)
//   return (
//     <div>
//       {heroData && (
//         <>
//           <HeroSection1 data={heroData} />
//           <div className="py-7 md:w-[85%] w-[95%] mx-auto">
//             <Title title="What We Do?" />
//             <h2 className={`${tw.className} font-bold md:text-5xl text-3xl tracking-widest py-4 w-fit px-4 md:px-0`}>
//               Why Work With Aziz Abbas Trade?
//             </h2>
//             <p className="text-gray-600 text-justify w-fit px-4 md:px-0">
//               With in-depth knowledge of the global job market and unparalleled recruiting expertise, we place specialists
//               into their matching fields. Our staffing services cater to jobs and man-power supply in the fields of
//               Construction, Engineering, Production & Packaging, Textiles, Transportation & Taxi Services, Pharmaceuticals,
//               Warehouse Management, Accounts, HR, Healthcare, and Cabin Crew recruitment.
//             </p>
//           </div>
//           <div className="w-[95%] mx-auto">
//             {wwdData && <WhatWeAre data={wwdData} />}
//           </div>
//         </>
//       )}

// {serviceData &&<section className="services min-h-[70vh]">
// <Title title={"Services"}/>
//    <div className="flex lg:mx-[80px] mx-[20px] justify-center flex-wrap py-7">
    
//        <ServicesCard services={serviceData}/>
//      </div>
//    </section>}
//   {homeAboutData && <AboutUs data={homeAboutData} />}
//   {missionvisionData && <div className="min-h-[70vh] ">
//     <Title  title="Mission & Vission"/>
    
//     <div className="py-8"><MissionVission data={missionvisionData}/></div>
// </div>}
//     </div>
//   );
// };

// export default Home;




import HeroSection1 from '@/components/HeroSection1';
import { client } from '../../sanity/lib/client';
import { Titillium_Web } from 'next/font/google';
import Title from '@/components/Title';
import WhatWeAre from '@/components/WhatWeAre';
import { groq } from 'next-sanity';
import ServicesCard from '@/components/ServicesCard';
import AboutUs from '@/components/AboutUs';
import MissionVission from '@/components/missinvission/Misson&Vission';
import Counter from '@/components/Counter';
import Image from 'next/image';
import Link from 'next/link';
import MemberShip from '@/components/MemberShip';
import Contact from '@/components/Contact';
import CountriesComp from '@/components/CountriesComp';
import ServicesMain from '@/components/ServicesMain';
import CustomDevelopment from '@/components/CustomDevelopment';
import Projects from '@/components/Projects';
import ServicesSection from '@/components/ServicesSection';


const tw = Titillium_Web({ subsets: ['latin'] ,weight: '700' });
// const uniqueCountry = [
//   ...new Set(Destinations.map((country)=>{
//     return country.country
//   }))
// ]



async function getData() {
  const query = `*[_type == "herosection"]{
    "imageUrl": image.asset->url,
    title,
    description,
    }`;
 return client.fetch(query)

 
};
export const revalidate = 60;
async function getWwdData() {
  const query = groq`*[_type == "whatwedo"]{
    "imageUrl": image.asset->url,
    title,
    description,
    }`;
 return client.fetch(query);


 
}
async function getServiceData() {
const query = groq`*[_type == "services"]{
 "imageUrl": image.asset->url,
 title,
 category,
 description,
 slug
 }`;
return client.fetch(query);
}
async function getAbout() {
  const query = groq`*[_type == "homeabout"]{
    "imageUrl": image.asset->url,
    title,
    description
  }`;
  return client.fetch(query);

}
async function getMV() {
  const query = groq`*[_type == "missionvission"]{
    "imageUrl": image.asset->url,
    title,
    description
  }`;
  return client.fetch(query);

  
}

async function getMemberShip() {
  const query = groq`*[_type == "membership"]{
    "imageUrl": image.asset->url,
    title,
    link
  }`;
  return client.fetch(query);

  
}
async function getCountries() {
  const query = groq`*[_type == "countries"]{
    "imageUrl": image.asset->url,
    country_name
  }`;
  return client.fetch(query);

  
}
async function getCounters() {
  const query = groq`*[_type == "counters"]{
    title,
    number
  }`;
  return client.fetch(query);

  
}
const Home  = async () =>{
  const [heroData, wwdData, serviceData, homeAboutData,missionvisionData,memberShipData,countriesData,counterData] = await Promise.all([getData(),getWwdData(),getServiceData(),getAbout(),getMV(),getMemberShip(),getCountries(),getCounters()])
  // console.log(wwdData)
  return (
    <div>
    
    
    <HeroSection1 data={heroData}/>
    {/* <div className="py-7 md:w-[85%] w-[95%] mx-auto">
    <Title title={"What We Do?"}/> 
    <h2 className={`${tw.className} font-bold md:text-5xl text-3xl tracking-widest py-4 w-fit px-4 md:px-0`}>Why Work With Sallu Soft?</h2>
    <p className="text-gray-600 text-justify w-fit px-4 md:px-0">hello With in-depth knowledge of the global job market and unparalleled recruiting expertise, we place specialists into their matching fields. Our staffing services cater to jobs and man-power supply in the fields of Construction, Engineering, Production & Packaging, Textiles, Transportation & Taxi Services, Pharmaceuticals, Warehouse Management, Accounts, HR, Healthcare and Cabin Crew recruitment.</p>
  
    </div>
    <div className="w-[95%] mx-auto">
    <WhatWeAre data={wwdData} />
    </div> */}
    <ServicesSection/>
    <div className=" bg-white">
      <CustomDevelopment/>
    </div>
    <div className=" bg-white">
      <Projects/>
    </div>
     {/* {serviceData && <ServicesMain serviceData={serviceData}/>}
     {homeAboutData && <AboutUs data={homeAboutData} />} */}
        {/* {missionvisionData && <div className="min-h-[70vh] ">
    <Title  title="Mission & Vission"/>
    
    <div className="py-8"><MissionVission data={missionvisionData}/></div>
 </div>} */}
 {/* <div className="h-fit bg-yellow-600  py-14 mx-auto w-full">
    
    
   {counterData && <Counter counter={counterData}/>} 
  </div> */}
  {/* {memberShipData && <section className="membership mt-1 ">
    <Title title="Our Membership"/>

    <div className="flex lg:mx-[80px] mx-[20px] justify-center gap-4 flex-wrap py-7">
      <MemberShip memberData={memberShipData}/>
 
    </div>
    </section>} */}
    {/* {countriesData && <div className='py-[50px]'>
    <Title title="Our Source Of Countries"/>
    <CountriesComp countries={countriesData}/>
    </div>} */}
   <Contact/>
    </div>


  )
}
export default Home;

