'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import BgContainer from '../components/BgContainer.jsx';
import Image from 'next/image.js';
import { destinations } from '../components/destinationData.js';

const page = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const activedestination = destinations[currentIndex];
  const desktopImg = "/images/technology.png"
  const tabletImg = "/images/technology.png"
  return (

    <div>
      <BgContainer
        desktopImg={desktopImg}
        tabletImg={tabletImg}
      ><Navbar />
      {/* sm:w-full md:w-[70%] lg:w-[80%] */}
        <section className='flex flex-col lg:flex-row gap-8 mx-auto max-w-[1440px] h-full lg:h-[82vh] px-[165px] py-[48px]'>
          <div className="w-full md:w-[75%] lg:w-1/2 m-auto lg:m-0 whiteTextColor flex flex-col justify-between items-start pb-[48px]">
           <div >
              <h3 className='Text-Preset-5 md:text-[20px] lg:text-[28px] whiteTextColor font-normal tracking-[4px]'><span className='opacity-[0.25]'>02</span> MEET YOUR CREW</h3>
            </div>
            
            <div className="">
            <h3 className='Text-Preset-4 text-[18px] md:text-[24px] lg:text-[32px] uppercase text-white opacity-50  '>Commander</h3>
            <h1 className=' text-[24px] md:text-[40px] lg:text-[56px] Text-Preset-3 uppercase font-thin'>Douglas Hurley</h1>
            <p className='Text-Preset-9 text-[15px] md:text-[16px] lg:[18px] font-thin lightBlueCustomTextColor'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          </div>
            <ol className="flex  Text-Preset-8 text-[12px] lg:text-[14px] space-x-5 lg:space-x-10 justify-end items-center">
              {destinations.map((planet, index) => (
                <li key={planet.name}>
                  <div
                    onClick={() => setcurrentIndex(index)}
                    className={`w-[15px] h-[15px] rounded-full bg-[#fff] opacity-[0.17] hover:border-b-2 hover:border-white ${currentIndex === index ? "" : ""}`}></div>
                 
                </li>

              ))}

            </ol>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-end items-center md:items-start  ">
           
            <Image src="/images/CrewA.png"
              alt="button"
              width={500}
              height={500}
              className=' w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[500px] lg:h-[500px] self-center lg:self-start object-contain'/>
            {/* sm:w-48 sm:h-48 md:w-72 md:h-72 */}
          </div>


        </section>
      </BgContainer>  </div>
  )
}

export default page