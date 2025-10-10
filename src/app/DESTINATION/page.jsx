'use client'
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Navbar from '../components/Navbar.jsx';
import BgContainer from '../components/BgContainer.jsx';
import { usePathname } from 'next/navigation.js';

const page = () => {

  const desktopImg = "/images/destination.png"
  const tabletImg = "/images/destination.png"

  const pathName = usePathname();


  return (

    <div>
      <BgContainer
        desktopImg={desktopImg}
        tabletImg={tabletImg}
      >
        <Navbar />
        <section className='flex flex-col lg:flex-row mx-auto sm:w-full md:w-[70%] lg:w-[70%] h-full lg:items-end md:items-center justify-center lg:justify-end p-6 md:p-0 lg:pb-16'>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-between  item pt-16 lg:pb-9">
            <div >
              <h3 className='Text-Preset-5 md:text-[20px] lg:text-[28px] whiteTextColor'><span className='lightBlueCustomTextColor'>01</span> PICK YOUR DESTINATION</h3>
            </div>
            <Image src="/images/Moon.png"
              alt="button"
              width={350}
              height={350}
              className='w-[350px] h-[350px]' />
            {/* sm:w-48 sm:h-48 md:w-72 md:h-72 */}
          </div>
          <div className="md:w-full lg:w-1/2  items-center lg:items-start  whiteTextColor flex flex-col pr-10">
            <ol className="sm:flex  Text-Preset-8 md:text-[12px] lg:text-[14px] space-x-5 lg:space-x-10   justify-end items-center whiteTextColor">
              <li>
                <Link href="/"
                  className={`pb-[13px] hover:border-b-2 hover:border-white ${pathName === "/" ? "border-b-2 border-white" : ""}`}
                >
                  MOON</Link>
              </li>
              <li>
                <Link href="/DESTINATION"
                  className={`pb-[13px] hover:border-b-2 hover:border-white  ${pathName === "/DESTINATION" ? "border-b-2 border-white" : ""}`}>MARS
                </Link>
              </li>
              <li>
                <Link href="/TECHNOLOGY"
                  className={`pb-[13px] hover:border-b-2 hover:border-white  ${pathName === "/TECHNOLOGY" ? "border-b-2 border-white" : ""}`}>
                  EUROPA</Link>
              </li>
              <li className='py-[38.5px]'>
                <Link href="/CREW"
                  className={`py-[38.5px] hover:border-b-2 hover:border-white  ${pathName === "/CREW" ? "border-b-2 border-white  " : ""}`}>TITAN</Link>

              </li>
            </ol>
            <h1 className=' text-[80px] md:text-[80px] lg:text-[80  px] leading-[1] lg:leading-normal Text-Preset-2'>MOON</h1>
            <p className='Text-Preset-9 text-[15px] font-thin lightBlueCustomTextColor text-center lg:text-start'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <hr className='w-full h-[1px] lightBlueCustombgColor my-10' />
            <div className='w-full flex gap-6 uppercase'>
              <div className='w-1/2'> <h6 className='Text-Preset-7 text-[14px] lightBlueCustomTextColor font-light'>
                AVG. DISTANCE</h6>
                <h4 className='Text-Preset-6 text-[28px] font-light whiteTextColor  '>384,400 km</h4></div>
              <div className='w-1/2'>
                <h6 className='Text-Preset-7 text-[14px] lightBlueCustomTextColor font-light'>
                  Est. travel time</h6>
                <h4 className='Text-Preset-6 text-[28px] font-light whiteTextColor '>3 Days</h4>
              </div>
            </div>
          </div>

        </section>


      </BgContainer>  </div>
  )
}

export default page