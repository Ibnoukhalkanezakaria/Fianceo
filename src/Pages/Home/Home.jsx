import React, { lazy } from "react";

const HeroHome = lazy(() => import("../../Components/Sections/HeroHome"));
const TrustedSection = lazy(() =>
  import("../../Components/Sections/TrustedSection")
);
const FinanceSection = lazy(() =>
  import("../../Components/Sections/FinanceSection")
);
const SpendingsSection = lazy(() =>
  import("../../Components/Sections/SpendingsSection")
);
const ExpensesSection = lazy(() =>
  import("../../Components/Sections/ExpensesSection")
);
const IntregratedSections = lazy(() =>
  import("../../Components/Sections/IntregratedSections")
);
const CustomersSections = lazy(() =>
  import("../../Components/Sections/CustomersSections")
);
const DiscoverSections = lazy(() =>
  import("../../Components/Sections/DiscoverSections")
);

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
