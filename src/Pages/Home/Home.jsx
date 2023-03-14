import React from "react";
import HeroSections from "../../Components/Sections/HeroSections";
import TrustedSection from "../../Components/Sections/TrustedSection";
import FinanceSection from "../../Components/Sections/FinanceSection";
import SpendingsSection from "../../Components/Sections/SpendingsSection";
import CompanySection from "../../Components/Sections/CompanySection";

const Home = () => {
  return (
    <div>
      <HeroSections />
      <TrustedSection />
      <FinanceSection />
      <SpendingsSection />
      <CompanySection />
    </div>
  );
};

export default Home;
