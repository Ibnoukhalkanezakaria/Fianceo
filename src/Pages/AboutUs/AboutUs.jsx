import React, { lazy } from "react";

const HeroAboutUs = lazy(() => import("../../Components/Sections/HeroAboutUs"));
const SomeStuff = lazy(() => import("../../Components/Sections/SomeStuff"));
const GuessedSection = lazy(() =>
  import("../../Components/Sections/GuessedSection")
);
const DiscoverSections = lazy(() =>
  import("../../Components/Sections/DiscoverSections")
);

const AboutUs = () => {
  return (
    <div>
      <HeroAboutUs />
      <SomeStuff />
      <GuessedSection />
      <DiscoverSections />
    </div>
  );
};

export default AboutUs;
