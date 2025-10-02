import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className='h-screen w-screen bg-[url(/images/bg1.png)] bg-cover bg-no-repeat bg-center flex flex-col'>
        <div className="header pt-10 flex items-center relative justify-between">

          <div className="logo pl-16 lg:w-1/5 md:w-[20%] flex items-center">
            <Image
              src="/images/Logo (1).png"
              alt="logo"
              width={48}
              height={48}
            />
          </div>
          <div className="w-[35rem] d-none border-b border-[#979797] z-50 absolute left-50"></div>
          <ol className=" bg-white/5 backdrop-blur-md flex Text-Preset-8 
  space-x-5 lg:space-x-10 
  py-[38.5px] px-[64px] 
  justify-end items-center 
   md:w-[80%] lg:w-1/2 
  z-10 whiteTextColor">
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

        <section className='flex mx-auto max-w-6xl items-end h-full pb-16'>
          <div className="hero-section-content w-1/2 whiteTextColor flex flex-col gap-6">
            <h3 className='Text-Preset-5 lightBlueCustomTextColor'>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className='Text-Preset-1'>SPACE</h1>
            <p className='Text-Preset-9 lightBlueCustomTextColor'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="explore-section w-1/2 flex justify-end">
            <Image src="/images/explorebtn.png"
              alt="button"
              width={272}
              height={272} />
          </div>
        </section>
      </div>

      
    </>
  )
}

export default page