import React from 'react'
import Navbar from '../components/Navbar.jsx';
import BgContainer from '../components/BgContainer.jsx';

const page = () => {
  const desktopImg = "/images/bg1.png"
  const tabletImg = "/images/Tablet.png"
  return (
    <div>
      <BgContainer
      desktopImg={desktopImg}
      tabletImg = {tabletImg}
      ><Navbar/>
        </BgContainer>  </div>
  )
}

export default page