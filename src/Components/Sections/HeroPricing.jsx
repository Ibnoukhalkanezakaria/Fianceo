import React from "react";

import stick1 from "../../assets/stick-1.svg";
import stick2 from "../../assets/stick-2.svg";
import stick3 from "../../assets/stick-3.svg";

import PricingPlan from "../PricingPlan/PricingPlan";

const HeroPricing = () => {
  return (
    <>
      <div className="bg-primary-clr text-center ">
        <div className="Wrapper p120-section relative">
          <img
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
            src={stick1}
            alt="sticky1"
            className="absolute top-14 left-48"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
            src={stick2}
            alt="sticky1"
            className="absolute right-20 top-20"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
            src={stick3}
            alt="sticky1"
            className="absolute bottom-20 right-20"
          />
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            className="color7 fw-700 max-w-[800px] m-auto sm:text-5xl md:text-center text-left text-4xl"
          >
            Choose a plan that’s right for you
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
            className="relative z-40 color7 max-w-[500px] m-auto pt-6 f7 md:text-center text-left"
          >
            Simple plans that grow with your business. No contracts. No setup
            fees. Choose the right one
          </p>
          <div
            className="mt-8"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <span className="bg-color7 sm:justify-center sm:m-auto justify-start flex max-w-max  py-4 px-8 rounded-[30px] cursor-pointer color5">
              Monthly
            </span>
          </div>
        </div>
      </div>
      <PricingPlan />
    </>
  );
};

export default HeroPricing;
