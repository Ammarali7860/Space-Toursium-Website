"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import BgContainer from "../components/BgContainer.jsx";
import TechnologySection from "../components/TechnologySection.jsx";

const page = () => {
  const desktopImg = "/images/technology.png";
  const tabletImg = "/images/technology.png";
  return (
    <div>
      <BgContainer desktopImg={desktopImg} tabletImg={tabletImg}>
        <Navbar />

        <TechnologySection />
      </BgContainer>{" "}
    </div>
  );
};

export default page;
