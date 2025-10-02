import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className='h-screen w-screen bg-[url(/images/bg1.png)] bg-cover bg-no-repeat bg-center flex flex-col'>
        <div className="header pt-10 flex items-center relative justify-between">

          <div className="logo pl-16 w-1/5 flex items-center">
            <Image
              src="/images/Logo (1).png"
              alt="logo"
              width={48}
              height={48}
            />
          </div>
          <div className="w-[35rem] border-b border-[#979797] z-50 absolute left-50"></div>
          <ol className=" bg-white/5 backdrop-blur-md flex Text-Preset-8 space-x-10 py-[38.5px] px-[64px] justify-end items-center w-1/2 z-10 whiteTextColor">
            <li>
              
              <Link href="/"><span className='font-bold pr-2.5 text-whiteCustom '>00</span>
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

        <section className='bg-amber-200 flex mx-auto max-w-6xl items-end h-full'>
          <div className="hero-section-content w-1/2">
            <h3 className=''>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className=''>SPACE</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="explore-section w-1/2 ">
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