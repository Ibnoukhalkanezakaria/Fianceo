import React from "react";
import HeroSections from "../../Components/Sections/HeroSections";
import TrustedSection from "../../Components/Sections/TrustedSection";
import FinanceSection from "../../Components/Sections/FinanceSection";
import SpendingsSection from "../../Components/Sections/SpendingsSection";
import CompanySection from "../../Components/Sections/CompanySection";
import ExpensesSection from "../../Components/Sections/ExpensesSection";

const Home = () => {
  return (
    <div>
      <HeroSections />
      <TrustedSection />
      <FinanceSection />
      <SpendingsSection />
      <CompanySection />
      <ExpensesSection />
    </div>
  );
};

export default Home;
