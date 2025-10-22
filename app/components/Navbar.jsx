"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const pathName = usePathname();

  return (
    <div className="header  p-6 md:p-0 lg:pt-10 flex items-center relative justify-between">
      <div className="logo w-[50%] md:w-[20%] lg:w-[20%]  flex lg:justify-center md:justify-center sm:justify-start">
        <Link href="/"><Image src="/images/Logo (1).png" alt="logo" width={48} height={48} /></Link>
      </div>
      <div className="w-[35rem] lg:block  hidden border-b border-[#979797] z-50 absolute left-50"></div>
      <div>
        <Image
          className="sm:hidden flex"
          src="/images/menu.png"
          alt="logo"
          width={24}
          height={3}
          onClick={() => setmenuOpen(true)}
        />
      </div>
      {/* responsive menu */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden lg:hidden bg-white/5 backdrop-blur-md h-screen w-[70%] absolute top-0 right-0 px-8 transform transition-transform duration-500 ease-in-out  `}
      >
        <div className="flex justify-end py-8">
          <Image
            className=""
            src="/images/Close.png"
            alt="logo"
            width={24}
            height={3}
            onClick={() => setmenuOpen(false)}
          />
        </div>
        <ol className=" flex flex-col space-y-8 Text-Preset-8 md:text-[12px] lg:text-[14px] pt-12 whiteTextColor">
          <li>
            <span className="font-bold pr-2.5">00</span>{" "}
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/destination">
              <span className="font-bold pr-2.5">01</span>
              DESTINATION
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <span className="font-bold pr-2.5">02</span>
              CREW
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <span className="font-bold pr-2.5">03</span>TECHNOLOGY
            </Link>
          </li>
          
        </ol>
      </div>
      {/* desktop menu */}
      <ol className="bg-white/5 backdrop-blur-md hidden sm:flex  Text-Preset-8 md:text-[12px] lg:text-[14px] space-x-5 lg:space-x-10 px-[38.5px] lg:px-[64px]  justify-end items-center w-full sm:w-[90%] md:w-[80%] lg:w-[50%] z-10 whiteTextColor">
        <li>
          <Link
            href="/"
            className={`py-[38.5px] hover:border-b-2 hover:border-white ${
              pathName === "/" ? "border-b-2 border-white" : ""
            }`}
          >
            <span className="font-bold pr-2.5">00</span>
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/destination"
            className={`py-[38.5px] hover:border-b-2 hover:border-white  ${
              pathName === "/destination" ? "border-b-2 border-white" : ""
            }`}
          >
            <span className="font-bold pr-2.5">01</span>
            DESTINATION
          </Link>
        </li>
        <li className="py-[38.5px]">
          <Link
            href="/crew"
            className={`py-[38.5px] hover:border-b-2 hover:border-white  ${
              pathName === "/crew" ? "border-b-2 border-white  " : ""
            }`}
          >
            <span className="font-bold pr-2.5">02</span>
            CREW
          </Link>
        </li>
        <li>
          <Link
            href="/technology"
            className={`py-[38.5px] hover:border-b-2 hover:border-white  ${
              pathName === "/technology" ? "border-b-2 border-white" : ""
            }`}
          >
            <span className="font-bold pr-2.5">03</span>TECHNOLOGY
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Navbar;
