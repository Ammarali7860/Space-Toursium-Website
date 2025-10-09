'use client'
import React from 'react'
import Navbar from '../components/Navbar.jsx';
import BgContainer from '../components/BgContainer.jsx';

const page = () => {

  const desktopImg2 = "/images/destination.png"
  const tabletImg2 = "/images/destination.png"
  
  return (

    <div>
      <BgContainer
        desktopImg={desktopImg2}
        tabletImg={tabletImg2}
      >
        <Navbar />
      </BgContainer>  </div>
  )
}

export default page