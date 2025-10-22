"use client";
import React, { useState } from "react";
import Image from "next/image";
import { crew } from "./crewData.js";

const CrewSection = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const activecrew = crew[currentIndex];
  return (
    <section className="flex flex-col lg:flex-row gap-0 lg:gap-8 mx-auto max-w-[1440px] h-full lg:h-[82vh] px-6 pb-6 lg:px-[165px] lg:py-[48px]">
      <div className="w-full md:w-[75%] lg:w-1/2 m-auto lg:m-0 whiteTextColor flex flex-col lg:justify-between items-center lg:items-start gap-[64px] lg:gap-0 pb-[48px]">
        <div>
          <h3 className="Text-Preset-5 md:text-[20px] lg:text-[28px] whiteTextColor font-normal tracking-[4px]">
            <span className="opacity-[0.25]">02</span> MEET YOUR CREW
          </h3>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="Text-Preset-4 text-[18px] md:text-[24px] lg:text-[32px] uppercase text-white opacity-50  ">
            {activecrew.Position}
          </h3>
          <h1 className=" text-[24px] md:text-[40px] lg:text-[56px] Text-Preset-3 uppercase font-thin">
            {activecrew.Name}
          </h1>
          <p className="Text-Preset-9 text-[15px] md:text-[16px] lg:[18px] font-thin pt-6 lg:pt-0 lightBlueCustomTextColor text-center lg:text-start">
            {activecrew.description}
          </p>
        </div>
        <ol className="cursor-pointer flex  Text-Preset-8 text-[12px] lg:text-[14px] space-x-5 lg:space-x-10 justify-end items-center">
          {crew.map((crew, index) => (
            <li key={crew.Name}>
              <div
                onClick={() => setcurrentIndex(index)}
                className={`w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-[#fff] transition-all duration-300 ${
                  currentIndex === index ? "opacity-100" : "opacity-[0.17] hover:opacity-50"
                }`}
              ></div>
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center lg:justify-end items-center md:items-start  ">
        <Image
          src={activecrew.image}
          alt="button"
          width={500}
          height={500}
          className=" w-[150px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[500px] lg:h-[500px] self-center lg:self-start object-contain"
        />
        
      </div>
    </section>
  );
};

export default CrewSection;
