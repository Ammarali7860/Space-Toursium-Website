"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from "next/link";

const page = () => {
 const [menuOpen, setmenuOpen] = useState(false);
 const [menuClose, setmenuClose] = useState(true)
  return (
    <>
      <div className='h-screen w-screen lg:bg-[url(/images/bg1.png)] bg-[url(/images/Tablet.png)] bg-cover bg-no-repeat bg-center flex flex-col'>
        <div className="header  p-6 md:p-0 lg:pt-10 flex items-center relative justify-between">

          <div className="logo w-[50%] md:w-[20%] lg:w-[20%]  flex lg:justify-center md:justify-center sm:justify-start"  >
            <Image
              src="/images/Logo (1).png"
              alt="logo"
              width={48}
              height={48}
            />
          </div>
          <div className="w-[35rem] lg:block  hidden border-b border-[#979797] z-50 absolute left-50"></div>
          <div>
           <Image className='sm:hidden flex'
              src="/images/menu.png"
              alt="logo"
              width={24}
              height={3}
              onClick={()=>setmenuOpen(true)}
            />
          </div>
          <div className={`${menuOpen ? "translate-x-0" : "translate-x-full"} ${menuClose ? "translate-x-0" : "translate-x-full"} md:hidden lg:hidden bg-white/5 backdrop-blur-md h-screen w-[70%] absolute top-0 right-0 px-8 transform transition-transform duration-500 ease-in-out  `}>
         <div className='flex justify-end py-8'>
           <Image className=''
              src="/images/Close.png"
              alt="logo"
              width={24}
              height={3}
              onClick={()=>setmenuOpen(false)}
            />
         </div>
               <ol className=" flex flex-col space-y-8 Text-Preset-8 md:text-[12px] lg:text-[14px] pt-12 whiteTextColor">
            <li>

              <span className='font-bold pr-2.5'>00</span> <Link href="/">
                HOME</Link>
            </li>
            <li>

              <Link href="/DESTINATION"><span className='font-bold pr-2.5'>01</span>
                DESTINATION</Link>
            </li>
            <li>
              <Link href="/TECHNOLOGY">
                <span className='font-bold pr-2.5'>02</span>TECHNOLOGY</Link>
            </li>
            <li>
              <Link href="/CREW"><span className='font-bold pr-2.5'>03</span>
                CREW</Link>
            </li>
          </ol>
          </div>
          {/* desktop menu */}
          <ol className="bg-white/5 backdrop-blur-md hidden sm:flex  Text-Preset-8 md:text-[12px] lg:text-[14px] space-x-5 lg:space-x-10 px-[38.5px] lg:px-[64px] py-[38.5px] justify-end items-center w-full sm:w-[90%] md:w-[80%] lg:w-[50%] z-10 whiteTextColor">
            <li>

              <Link href="/">
                HOME</Link>
            </li>
            <li>

              <Link href="/DESTINATION"><span className='font-bold pr-2.5'>01</span>
                DESTINATION</Link>
            </li>
            <li>
              <Link href="/TECHNOLOGY">
                <span className='font-bold pr-2.5'>02</span>TECHNOLOGY</Link>
            </li>
            <li>
              <Link href="/CREW"><span className='font-bold pr-2.5'>03</span>
                CREW</Link>
            </li>
          </ol>
        </div>

        {/* hero section */}

        <section className='flex flex-col lg:flex-row mx-auto sm:w-full md:w-[75%] lg:w-[75%] lg:items-end md:items-center justify-center lg:justify-end  h-full p-6 md:p-0 lg:pb-16'>
          <div className="hero-section-content md:w-full lg:w-1/2  items-center lg:items-start  whiteTextColor flex flex-col gap-6  ">
            <h3 className='Text-Preset-5 md:text-[20px] lg:text-[28px] lightBlueCustomTextColor'>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className=' text-[80px] md:text-[144px] lg:text-[144px] leading-[1] lg:leading-normal Text-Preset-1'>SPACE</h1>
            <p className='Text-Preset-9 text-[15px] font-thin lightBlueCustomTextColor text-center lg:text-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="explore-section w-full lg:w-1/2 flex justify-center lg:justify-end pt-16 lg:pb-9">
            <Image src="/images/explorebtn.png"
              alt="button"
              width={272}
              height={272}
              className='w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72' />
          </div>
        </section>
      </div>


    </>
  )
}

export default page