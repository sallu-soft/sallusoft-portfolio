'use client'
import React from 'react'
import Title from './Title';

const Contact = () => {
    
    
  
    const handleSubmit = async (e)=>{
      e.preventDefault();
      const data = {
        fname:String(e.target.fname.value),
        lname:String(e.target.lname.value),
        email:String(e.target.email.value),
        phone:String(e.target.phone.value),
        text:String(e.target.text.value)
      }
     console.log(data)
     
     const response = await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",

      },
      body:JSON.stringify(data),
     });
     
     if(response.ok) {
      console.log("Massege Sent Successfully");
        e.target.fname.value="";
        e.target.lname.value="";
        e.target.email.value="";
        e.target.phone.value="";
      e.target.text.value=""; 
      alert("Message Sent Successfully")
     }
     if(!response.ok){
      console.log("Error On Sending Massege" )
     }
    }
  
  return (
    <section className="contactus py-10">

    <Title title={"Contact Us"}/>
    <div className="flex lg:mx-[80px] xl:mx-[180px] xl:ml-[150px] mx-[05px] justify-between flex-wrap py-5 gap-5">
    <div className="lg:w-[57%] w-[100%]  p-5  mx-auto border-t-yellow-800 border-l-yellow-400 border-4">
        <h3 className="text-3xl font-semibold md:py-4">Do you have any query? Contact with us to get any support.</h3>
        <p className="text-2xl font-bold py-2 text-[#0c9cd0]">Leave us a message</p>

        <form className="
        gap-y-10 gap-2" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col gap-3 w-[100%] mb-4 gap-y-6"><input className="md:w-[48%] w-full p-3  border-2 focus:border-dashed border-yellow-600" required name="fname" type="text"  placeholder="First name"/>
          <input className="md:w-[48%] w-full p-3  border-2 focus:border-dashed border-yellow-600 " required name="lname" type="text" placeholder="Last name"/>
          </div>
          <div className="flex gap-3 w-[100%] mb-4 md:flex-row flex-col"><input className="md:w-[48%] w-full p-3 border-2 border-yellow-600" type="text" name="email" required placeholder="Email Address"/>
          <input className="md:w-[48%] w-full p-3 border-2 border-yellow-600" required type="text" name="phone" placeholder="Phone Number"/></div>


          <div className="flex gap-3 w-[99%] sm:w-[98%] md:w-[97.5%]"> <textarea className="w-full  p-3 border-2 border-yellow-600" rows='3' required name="text"  placeholder="massege"/></div>
          <div>
            <button type="submit" className="px-6 py-2 text-xl font-semibold border-[#baa204] duration-700 border-2 my-2 flex justify-center hover:bg-[#baa204] hover:text-white mt-5">Send Massege</button>
          </div>
        </form>
      </div>
   
  
    <div className="lg:w-[40%] w-fit flex md:flex-col gap-x-2 flex-col shadow-2xl p-5 border border-[#8b3eea] overflow-hidden h-fit mx-auto">
      <div className="  ">
        <h3 className="text-2xl font-semibold md:py-4">Contact details</h3>
        <div className="py-2 md:space-y-1">
        <p className="text-xl text-gray-600 dark:text-gray-300 font-semibold">Help line</p>
        <p className="text-gray-900 dark:text-gray-500 md:text-xl font-semibold">+880 1711-561321</p>
        </div>
        <div className="py-2 md:space-y-1">
        <p className="text-xl text-gray-600 font-semibold dark:text-gray-300">Support Mail</p>
        <p className="text-gray-900 md:text-xl font-semibold dark:text-gray-500">azizabbas2116@gmail.com</p>
        </div>
        <div className="py-2 md:space-y-1">
        <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">Office Address</p>
        <p className="dark:text-gray-500 text-gray-900 md:text-xl font-semibold ">Jomidar Palace, Room F-5 Inner Circuler Road, 291, Fakirapool Dhaka-1000 Banlgladesh</p>
        </div>
      </div>
      <div className="">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.395272691448!2d90.4190038!3d23.73328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ef5ba1e8d5%3A0x225dcc5ebf28f844!2sjomidar%20palace!5e0!3m2!1sen!2sbd!4v1688991304815!5m2!1sen!2sbd" width="500" height="350" className="border-none w-[550px]  md:w-[600px] lg:w-[340px] xl:w-[590px] mt-3" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>

    </section>
  )
}

export default Contact