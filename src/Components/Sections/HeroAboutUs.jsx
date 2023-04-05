import React, { lazy } from "react";
const PrimaryButton = lazy(() => import("../Buttons/PrimaryButton"));
const image1 = lazy(() => import("../../assets/HeroAboutUs/img1.png"));
const image2 = lazy(() => import("../../assets/HeroAboutUs/img2.png"));
const image3 = lazy(() => import("../../assets/HeroAboutUs/img3.png"));
const image5 = lazy(() => import("../../assets/HeroAboutUs/img5.png"));
const sticky1 = lazy(() => import("../../assets/HeroAboutUs/stick-1.svg"));
const sticky2 = lazy(() => import("../../assets/HeroAboutUs/stick-2.svg"));
const sticky4 = lazy(() => import("../../assets/HeroAboutUs/stick-4.svg"));
const teamImage = lazy(() => import("../../assets/HeroAboutUs/team-image.png"));
const DifferentlySection = lazy(() => import("./DifferentlySection"));

import { Link } from "react-router-dom";

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
          <div className="mt-6 ">
            <Link to="/">
              <PrimaryButton
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                className="sm:m-auto f7"
              >
                See Our Milestones
              </PrimaryButton>
            </Link>
          </div>
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
