'use client'
import React, { useState } from 'react'
import { destinations } from './destinationData'
import Image from 'next/image'

const DestinationSection = () => {

    const [currentIndex, setcurrentIndex] = useState(0);
    const activedestination = destinations[currentIndex];
    return (
        <section className='flex flex-col lg:flex-row mx-auto sm:w-full md:w-[70%] lg:w-[80%] h-full lg:h-[82vh] lg:items-end md:items-center justify-center lg:justify-end px-6 pb-6 md:p-0 lg:pb-16'>
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-between items-center md:items-start  pt-0 lg:pt-16 lg:pb-9 gap-6 lg:gap-0">
                <div >
                    <h3 className='Text-Preset-5 md:text-[20px] lg:text-[28px] whiteTextColor'><span className='lightBlueCustomTextColor'>01</span> PICK YOUR DESTINATION</h3>
                </div>
                <Image src={activedestination.image}
                    alt="button"
                    width={350}
                    height={350}
                    className=' w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] self-center lg:self-start' />
                {/* sm:w-48 sm:h-48 md:w-72 md:h-72 */}
            </div>
            <div className="w-full md:w-[75%] lg:w-1/2 m-auto lg:m-0 items-center lg:items-start  whiteTextColor flex flex-col p-0 lg:pr-10 gap-6 lg:gap-0">
                <ol className="flex  Text-Preset-8 text-[12px] lg:text-[14px] space-x-5 lg:space-x-10   justify-end items-center whiteTextColor">
                    {destinations.map((planet, index) => (
                        <li key={planet.name}>
                            <button
                            onClick={()=>setcurrentIndex(index)}
                            className={`pb-[13px] hover:border-b-2 hover:border-white ${currentIndex === index ? "border-b-2 border-white" : ""}`}>{planet.name}</button>
                            {/* <Link href="/"
                                className={`pb-[13px] hover:border-b-2 hover:border-white ${pathName === "/" ? "border-b-2 border-white" : ""}`}
                            >
                                {planet.name}</Link> */}
                        </li>

                    ))}

                </ol>
                <h1 className=' text-[56px] md:text-[80px] lg:text-[100px] leading-[1] lg:leading-normal Text-Preset-2'>{activedestination.name}</h1>
                <p className='Text-Preset-9 text-[15px] font-thin lightBlueCustomTextColor text-center lg:text-start'>{activedestination.description}</p>
                <hr className='w-full h-[1px] lightBlueCustombgColor my-0 lg:my-10' />
                <div className='w-full flex gap-6 uppercase flex-col lg:flex-row items-center lg:items-start'>
                    <div className='w-1/2 flex flex-col items-center lg:items-start'> <h6 className='Text-Preset-7 text-[14px] lightBlueCustomTextColor font-light'>
                        AVG. DISTANCE</h6>
                        <h4 className='Text-Preset-6 text-[28px] font-light whiteTextColor'>{activedestination.distance}</h4></div>
                    <div className='w-1/2 flex flex-col items-center lg:items-start'>
                        <h6 className='Text-Preset-7 text-[14px] lightBlueCustomTextColor font-light'>
                            Est. travel time</h6>
                        <h4 className='Text-Preset-6 text-[28px] font-light whiteTextColor '>{activedestination.time}</h4>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DestinationSection