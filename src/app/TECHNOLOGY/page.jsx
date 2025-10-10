import React from 'react'
import Navbar from '../components/Navbar.jsx';
import BgContainer from '../components/BgContainer.jsx';

const page = () => {
  const desktopImg = "/images/technology.png"
  const tabletImg = "/images/technology.png"
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