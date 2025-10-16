'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { technology } from './technologyData'


const TechnologySection = () => {

    const [currentIndex, setcurrentIndex] = useState(0);
    const activetechnology = technology[currentIndex];
    return (
         <section className="flex flex-col  mx-auto max-w-[1440px] h-full lg:h-[82vh] pl-0 lg:pl-[164px]">
                 {/* main content first row */}
                 <div className="text-center lg:text-start">
                   <h3 className="Text-Preset-5 md:text-[20px] lg:text-[28px] whiteTextColor font-normal tracking-[4px]">
                     <span className="opacity-[0.25]">03</span> SPACE LAUNCH 101
                   </h3>
                 </div>
                 {/* main content second row */}
                 <div className="flex flex-col-reverse lg:flex-row justify-center h-full ">
                   {/* left container content */}
                   <div className="w-full md:w-[75%] lg:w-[52%]  whiteTextColor flex flex-col justify-center  items-center lg:items-start gap-[55px] p-6 lg:p-0">
                     <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[40px] lg:gap-[64px]">
                       <ol className="cursor-pointer flex flex-row  lg:flex-col  Text-Preset-8 text-[12px] lg:text-[14px] justify-end items-center gap-8">
                         {technology.map((technology, index) => (
                           <li key={technology.Name}>
                             <div
                               onClick={() => setcurrentIndex(index)}
                               className={`flex justify-center items-center w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full   transition-all duration-300 ${
                                 currentIndex === index
                                   ? "text-black bg-white border-0"
                                   : "text-white  bg-transparent border-1 border-[#ffffff46]  hover:text-black hover:bg-white"
                               }`}
                             >
                               {" "}
                               <p className="Text-Preset-4 text-[18px] lg:text-[32px]">{index + 1}</p>
                             </div>
                           </li>
                         ))}
                       </ol>
                       <div className="pr-0 lg:pr-8 text-center lg:text-start">
                         <h3 className="Text-Preset-4 text-[18px] md:text-[24px] lg:text-[32px] uppercase text-white opacity-50  ">
                           THE TERMINOLOGY…
                         </h3>
                         <h1 className=" text-[24px] md:text-[40px] lg:text-[56px] Text-Preset-3 uppercase font-thin">
                           {activetechnology.Name}
                         </h1>
                         <p className="Text-Preset-9 text-[15px] md:text-[16px] lg:[18px] font-thin pt-6 lg:pt-0 lightBlueCustomTextColor text-center lg:text-start leading-[180%]">
                           {activetechnology.description}
                         </p>
                       </div>
                     </div>
                   </div>
                   {/* right container image */}
                   <div className="w-full  lg:w-[48%] h-full flex flex-col items-end justify-center object-cover pt-16 lg:pt-0">
                     <Image
                       src={activetechnology.image}
                       alt="button"
                       width={600}
                       height={1021}
                       className=" w-[100%] h-[200px] md:w-[100%] md:h-[200%] lg:w-full lg:h-[60vh]"
                     />
                   </div>
                 </div>
               </section>
    )
}

export default TechnologySection