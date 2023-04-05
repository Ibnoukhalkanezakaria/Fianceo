import React, { lazy } from "react";

const HeroPricing = lazy(() => import("../../Components/Sections/HeroPricing"));
const TrustedSection = lazy(() =>
  import("../../Components/Sections/TrustedSection")
);
const Competition = lazy(() => import("../../Components/Sections/Competition"));
const Frequently = lazy(() => import("../../Components/Sections/Frequently"));
const DiscoverSections = lazy(() =>
  import("../../Components/Sections/DiscoverSections")
);

const Pricing = () => {
  return (
    <div className="min-w-[100%]">
      <HeroPricing />
      <TrustedSection />
      <Competition />
      <Frequently />
      <DiscoverSections />
    </div>
  );
};

export default Pricing;
