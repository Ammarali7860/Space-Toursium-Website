'use client'
import React, { useEffect, useState } from "react";

const BgContainer = ({ desktopImg, tabletImg, children }) => {
  const [bgImage, setBgImage] = useState(tabletImg); // 👈 default tablet image

  useEffect(() => {
    // Yeh code sirf client pe chalega
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBgImage(desktopImg);
      } else {
        setBgImage(tabletImg);
      }
    };

    handleResize(); // initial check on load
    window.addEventListener("resize", handleResize);

    // cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopImg, tabletImg]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat bg-center flex flex-col transition-all duration-300"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {children}
    </div>
  );
};

export default BgContainer;
