import React from "react";
import HeroSections from "../../Components/Sections/HeroSections";
import TrustedSection from "../../Components/Sections/TrustedSection";
import FinanceSection from "../../Components/Sections/FinanceSection";

const Home = () => {
  return (
    <div>
      <HeroSections />
      <TrustedSection />
      <FinanceSection />
    </div>
  );
};

export default Home;
