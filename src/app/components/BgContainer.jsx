'use client'
import React, { useEffect, useState } from "react";

const BgContainer = ({ desktopImg, tabletImg, children }) => {
  const [bgImage, setbgImage] = useState(tabletImg);

  useEffect(() => {

    const sizeHandler = () =>{
      if (window.innerWidth >= 1024) {
        setbgImage(desktopImg)
        
      }else{
        setbgImage(tabletImg)
      }
    }
    sizeHandler();
  }, [desktopImg,tabletImg])
  
 

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
