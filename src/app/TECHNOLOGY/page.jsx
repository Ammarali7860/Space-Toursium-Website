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
        <section className='flex flex-col lg:flex-row mx-auto sm:w-full md:w-[70%] lg:w-[80%] h-full lg:h-[82vh] lg:items-end md:items-center justify-center lg:justify-end px-6 pb-6 md:p-0 lg:pb-16'>
          <div className="w-full md:w-[75%] lg:w-1/2 m-auto lg:m-0 items-center lg:items-start  whiteTextColor flex flex-col p-0 lg:pr-10 gap-6 lg:gap-0">
           <div >
              <h3 className='Text-Preset-5 md:text-[20px] lg:text-[28px] whiteTextColor'><span className='lightBlueCustomTextColor'>01</span> PICK YOUR DESTINATION</h3>
            </div>
            
            <div className="hero-section-content md:w-full lg:w-1/2  items-center lg:items-start  whiteTextColor flex flex-col">
            <h3 className='Text-Preset-5 md:text-[20px] lg:text-[28px] lightBlueCustomTextColor'>Commander</h3>
            <h1 className=' text-[26px] md:text-[40px] lg:text-[100px] leading-[1] Text-Preset-3'>Douglas Hurley</h1>
            <p className='Text-Preset-9 text-[15px] font-thin lightBlueCustomTextColor text-center lg:text-start'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          </div>
            <ol className="flex  Text-Preset-8 text-[12px] lg:text-[14px] space-x-5 lg:space-x-10   justify-end items-center whiteTextColor">
              {destinations.map((planet, index) => (
                <li key={planet.name}>
                  <div
                    onClick={() => setcurrentIndex(index)}
                    className={`pb-[13px] hover:border-b-2 hover:border-white ${currentIndex === index ? "border-b-2 border-white" : ""}`}>{planet.name}</div>
                 
                </li>

              ))}

            </ol>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-between items-center md:items-start  ">
           
            <Image src="/images/CrewA.png"
              alt="button"
              width={500}
              height={500}
              className=' w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[500px] lg:h-[500px] self-center lg:self-start'/>
            {/* sm:w-48 sm:h-48 md:w-72 md:h-72 */}
          </div>


        </section>
      </BgContainer>  </div>
  )
}

export default page