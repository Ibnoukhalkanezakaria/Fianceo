import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import image1 from "../../assets/HeroAboutUs/img1.png";
import image2 from "../../assets/HeroAboutUs/img2.png";
import image3 from "../../assets/HeroAboutUs/img3.png";
import image4 from "../../assets/HeroAboutUs/img4.png";
import image5 from "../../assets/HeroAboutUs/img5.png";
import sticky1 from "../../assets/HeroAboutUs/stick-1.svg";
import sticky2 from "../../assets/HeroAboutUs/stick-2.svg";
import sticky4 from "../../assets/HeroAboutUs/stick-4.svg";
import teamImage from "../../assets/HeroAboutUs/team-image.png";

import { HeroAboutUsData } from "../../Data/data";

const HeroAboutUs = () => {
  const { List } = HeroAboutUsData;
  return (
    <div>
      <div className="Wrapper">
        <div className="p100-section">
          <h1 className="color5 fw-700 f1 text-center max-w-[900px] m-auto">
            We build finance software to empower businesses
          </h1>
          <a href="">
            <PrimaryButton className="mt-10 m-auto f7">
              See Our Milestones
            </PrimaryButton>
          </a>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 p50-section justify-center gap-8">
          <div className="flex items-center justify-center gap-20 relative">
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
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div className="flex items-center gap-6">
            <img src={image4} alt="" />
            <img src={image5} alt="" />
          </div>
        </div>
        <div className="p50-section">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="color5 fw-700 f2">We do this differently</h3>
            </div>
            <div>
              <p className="max-w-[400px]">
                Erat eleifend lacus mattis at porttitor at mauris vel pharetra.
                Consequat, dictum
              </p>
            </div>
          </div>
          <div className="flex gap-6 pt-20 pb-[120px]">
            {List.map((item, i) => {
              const { val, name, description } = item;
              return (
                <div key={i}>
                  <h3 className="color5 fw-700 f2">{val}</h3>
                  <span className="color5 pt-4 pb-4 block fw-500 f6">
                    {name}
                  </span>
                  <p className="fw-400">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <img src={teamImage} alt="teamImage" className="w-full" />
      </div>
    </div>
  );
};

export default HeroAboutUs;
