"use client";
import Navbar from "../components/Navbar.jsx";
import BgContainer from "../components/BgContainer.jsx";
import CrewSection from "../components/CrewSection.jsx";

const page = () => {
  const desktopImg = "/images/crew.png";
  const tabletImg = "/images/crew.png";

  return (
    <div>
      <BgContainer desktopImg={desktopImg} tabletImg={tabletImg}>
        <Navbar />
        <CrewSection />
      </BgContainer>
    </div>
  );
};

export default page;
