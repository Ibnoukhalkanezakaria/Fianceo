import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import imageHero from "../../assets/hero-img.svg";

const HeroSections = () => {
  return (
    <div className="Wrapper">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 p50-section items-center">
        <div>
          <h1 className="f1 fw-700 ">
            Discover a better way to manage spendings
          </h1>
          <p className="max-w-[400px]">
            Build world-class website within minutes. Design and develop
            focusing your business growth.
          </p>
          <PrimaryButton className="mt-8">Get Started Now</PrimaryButton>
        </div>
        <div>
          <img src={imageHero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
