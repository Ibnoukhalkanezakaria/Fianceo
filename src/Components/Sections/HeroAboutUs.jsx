import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import image1 from "../../assets/HeroAboutUs/img1.png";
import image2 from "../../assets/HeroAboutUs/img2.png";
import image3 from "../../assets/HeroAboutUs/img3.png";
import image5 from "../../assets/HeroAboutUs/img6.png";
import sticky1 from "../../assets/HeroAboutUs/stick-1.svg";
import sticky2 from "../../assets/HeroAboutUs/stick-2.svg";
import sticky4 from "../../assets/HeroAboutUs/stick-4.svg";
import teamImage from "../../assets/HeroAboutUs/team-image.png";
import DifferentlySection from "./DifferentlySection";

const HeroAboutUs = () => {
  return (
    <div>
      <div className="Wrapper">
        <div className="p100-section ">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            className="color5 fw-700 md:text-5xl sm:text-4xl text-3xl sm:text-center max-w-[900px] m-auto"
          >
            We build finance software to empower businesses
          </h1>
          <a href="">
            <PrimaryButton
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              className="mt-10 sm:m-auto f7"
            >
              See Our Milestones
            </PrimaryButton>
          </a>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p50-section justify-center w-[90%] gap-8 m-auto">
          <div
            data-aos="zoom-in-right"
            data-aos-delay="400"
            data-aos-duration="500"
            className="flex items-center justify-center gap-20 relative"
          >
            <img
              src={sticky4}
              alt=""
              className="absolute right-[40%] top-[10%] z-[-1]"
            />
            <div className="flex flex-col gap-10">
              <img src={sticky1} alt="" className="w-[80px]" />
              <img src={sticky2} alt="" />
            </div>
            <img src={image1} alt="" />
          </div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
            <img src={image2} alt="" />
          </div>
          <div
            data-aos="zoom-out-right"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <img src={image3} alt="" />
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-delay="500"
            data-aos-duration="500"
            className="flex items-center gap-2 max-w-[300px]"
          >
            <img src={image5} alt="" />
          </div>
        </div>
        <DifferentlySection />
      </div>
      <div>
        <img src={teamImage} alt="teamImage" className="w-full" />
      </div>
    </div>
  );
};

export default HeroAboutUs;
