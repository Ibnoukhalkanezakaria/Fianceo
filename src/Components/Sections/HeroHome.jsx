import React from "react";

import PrimaryButton from "../Buttons/PrimaryButton";

import imageHero from "../../assets/hero-img.svg";

import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <div className="bg-color7 p50-section">
      <div className="Wrapper ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 p50-section items-center">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              className="sm:text-5xl text-4xl fw-700 color5"
            >
              Discover a better way to manage spendings
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              className="max-w-[400px] "
            >
              Build world-class website within minutes. Design and develop
              focusing your business growth.
            </p>
            <Link to="signIn">
              <PrimaryButton
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
                className="mt-8"
              >
                Get Started Now
              </PrimaryButton>
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <img src={imageHero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
