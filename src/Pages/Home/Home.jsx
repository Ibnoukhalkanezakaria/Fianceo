import React from "react";

import HeroHome from "../../Components/Sections/HeroHome";
import TrustedSection from "../../Components/Sections/TrustedSection";
import FinanceSection from "../../Components/Sections/FinanceSection";
import SpendingsSection from "../../Components/Sections/SpendingsSection";
import ExpensesSection from "../../Components/Sections/ExpensesSection";
import IntregratedSections from "../../Components/Sections/IntregratedSections";
import CompanySection from "../../Components/Sections/CompanySection";
import CustomersSections from "../../Components/Sections/CustomersSections";
import DiscoverSections from "../../Components/Sections/DiscoverSections";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroHome />
      <TrustedSection />
      <FinanceSection />
      <SpendingsSection />
      <CompanySection />
      <ExpensesSection />
      <IntregratedSections />
      <CustomersSections />
      <DiscoverSections />
    </div>
  );
};

export default Home;
