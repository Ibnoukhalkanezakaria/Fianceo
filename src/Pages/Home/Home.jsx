import React from "react";
import HeroSections from "../../Components/Sections/HeroSections";
import TrustedSection from "../../Components/Sections/TrustedSection";
import FinanceSection from "../../Components/Sections/FinanceSection";
import SpendingsSection from "../../Components/Sections/SpendingsSection";
import CompanySection from "../../Components/Sections/CompanySection";
import ExpensesSection from "../../Components/Sections/ExpensesSection";
import IntregratedSections from "../../Components/Sections/IntregratedSections";
import CustomersSections from "../../Components/Sections/CustomersSections";
import DiscoverSections from "../../Components/Sections/DiscoverSections";

const Home = () => {
  return (
    <div>
      <HeroSections />
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
