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
          <img src={stick1} alt="sticky1" className="absolute top-14 left-48" />
          <img
            src={stick2}
            alt="sticky1"
            className="absolute right-20 top-20"
          />
          <img
            src={stick3}
            alt="sticky1"
            className="absolute bottom-20 right-20"
          />
          <h2 className="color7 fw-700 max-w-[800px] m-auto f1">
            Choose a plan that’s right for you
          </h2>
          <p className="color7 max-w-[500px] m-auto pt-6 f7">
            Simple plans that grow with your business. No contracts. No setup
            fees. Choose the right one
          </p>
          <span className="bg-color7 inline-block mt-6 py-4 px-8 rounded-[30px] color5">
            Monthly
          </span>
        </div>
      </div>
      <PricingPlan />
    </>
  );
};

export default HeroPricing;
