import React from "react";
import HeroAboutUs from "../../Components/Sections/HeroAboutUs";
import SomeStuff from "../../Components/Sections/SomeStuff";
import GuessedSection from "../../Components/Sections/GuessedSection";
import DiscoverSections from "../../Components/Sections/DiscoverSections";

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
