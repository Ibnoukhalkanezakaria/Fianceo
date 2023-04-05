import React from "react";

import HeroPricing from "../../Components/Sections/HeroPricing";
import TrustedSection from "../../Components/Sections/TrustedSection";
import Competition from "../../Components/Sections/Competition";
import Frequently from "../../Components/Sections/Frequently";
import DiscoverSections from "../../Components/Sections/DiscoverSections";

const Pricing = () => {
  return (
    <div>
      <HeroPricing />
      <TrustedSection />
      <Competition />
      <Frequently />
      <DiscoverSections />
    </div>
  );
};

export default Pricing;
