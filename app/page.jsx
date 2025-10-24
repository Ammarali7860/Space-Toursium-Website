"use client";
import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import BgContainer from "./components/BgContainer.jsx";
import Link from "next/link.js";
import { AnimatePresence, motion } from "framer-motion";


const Page = () => {
  // const desktopImg = "/images/bg1.png"
  // const tabletImg = "/images/Tablet.png"

  return (
    <>
      {/* /* <div className='h-screen w-screen lg:bg-[url(/images/bg1.png)] bg-[url(/images/Tablet.png)] bg-cover bg-no-repeat bg-center flex flex-col'> */}
      <BgContainer desktopImg="/images/bg1.png" tabletImg="/images/tablet.png">
        <Navbar />

        {/* hero section */}

       <AnimatePresence mode='wait'>

        <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col lg:flex-row mx-auto sm:w-full md:w-[75%] lg:w-[75%] lg:items-end md:items-center justify-center lg:justify-end h-auto lg:h-[82vh] p-6 md:p-0 lg:pb-16 overflow-hidden">
          <div className="hero-section-content md:w-full lg:w-1/2  items-center lg:items-start  whiteTextColor flex flex-col gap-6  ">
            <h3 className="Text-Preset-5 md:text-[20px] lg:text-[28px] lightBlueCustomTextColor">
              SO, YOU WANT TO TRAVEL TO
            </h3>
            <h1 className=" text-[80px] md:text-[144px] lg:text-[144px] leading-[1] lg:leading-normal Text-Preset-1">
              SPACE
            </h1>
            <p className="Text-Preset-9 text-[15px] font-thin lightBlueCustomTextColor text-center lg:text-start">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore-section w-full lg:w-1/2 flex justify-center lg:justify-end pt-16 lg:pb-9">
            <div className="flex justify-center items-center  rounded-full transition-all duration-700 ease-in-out hover:bg-[#ffffff5e] h-96 w-96">
              <Link href="/destination">
                <Image
                  src="/images/explorebtn.png"
                  alt="button"
                  width={272}
                  height={272}
                  className="w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 "
                />
              </Link>
            </div>
          </div>
        </motion.section>
        </AnimatePresence>
        {/* </div> */}
      </BgContainer>
    </>
  );
};

export default Page;
