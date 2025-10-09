'use client'
import React from 'react'

const BgContainer = ({ desktopImg, tabletImg, children }) => {
  return (
    <div className="h-screen w-screen bg-cover bg-no-repeat bg-center flex flex-col"
      style={{
        backgroundImage: window.innerWidth >=  1024 ? `url(${tabletImg})` : `url(${desktopImg})`
      }}
    >


      {children}
    </div>
  )
}

export default BgContainer