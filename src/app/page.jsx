import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className='h-screen w-screen bg-[url(/images/bg1.png)] bg-cover bg-no-repeat bg-center flex flex-col'>
        <div className="header lg:pt-10 md:pt-0 flex items-center relative justify-between">

          <div className="logo w-[20%] flex justify-center ">
            <Image
              src="/images/Logo (1).png"
              alt="logo"
              width={48}
              height={48}
            />
          </div>
          <div className="w-[35rem] lg:block  hidden border-b border-[#979797] z-50 absolute left-50"></div>
          <ol className="bg-white/5 backdrop-blur-md flex Text-Preset-8 md:text-[12px] lg:text-[14px] space-x-5 lg:space-x-10 px-[38.5px] lg:px-[64px] py-[38.5px] justify-end items-center w-full sm:w-[90%] md:w-[80%] lg:w-[50%] z-10 whiteTextColor">
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

        <section className='flex flex-col lg:flex-row mx-auto w-[75%] lg:items-end md:items-center justify-center lg:justify-end  h-full pb-0 lg:pb-16'>
          <div className="hero-section-content lg:w-1/2 md:w-full items-center lg:items-start  whiteTextColor flex flex-col gap-6  ">
            <h3 className='Text-Preset-5 md:text-[20px] lg:text-[28px] lightBlueCustomTextColor'>SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className='Text-Preset-1 leading-[1] lg:leading-normal'>SPACE</h1>
            <p className='Text-Preset-9 lightBlueCustomTextColor text-center lg:text-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="explore-section w-full lg:w-1/2 flex justify-center lg:justify-end pt-16 lg:pb-9">
            <Image src="/images/explorebtn.png"
              alt="button"s
              width={272}
              height={272} />
          </div>
        </section>
      </div>


    </>
  )
}

export default page