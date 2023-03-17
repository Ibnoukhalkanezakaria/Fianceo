import React from "react";
import { PricingPlanData } from "../../Data/data";
import PrimaryButton from "../Buttons/PrimaryButton";
import stick3 from "../../assets/stick-3.svg";
import { AiOutlineCheck } from "react-icons/ai";

const PricingPlan = () => {
  const { List } = PricingPlanData;
  return (
    <div>
      <div className="Wrapper mt-[-50px]">
        <div className="relative">
          <img
            src={stick3}
            alt="sticky1"
            className="absolute top-[-60px] left-[40px]"
          />
          {List.map((item, i) => {
            const { Avatar, Pack, type, Price, ListOfOptions } = item;
            return (
              <div
                key={i}
                className="relative z-60 bg-shadow2 p-8 mb-8 one flex justify-between bg-color7 min-h-[240px]  max-w-[1000px] m-auto"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <img src={Avatar} alt="" />
                  </div>
                  <div>
                    <span className="block">Perfect for</span>
                    <span className="fw-700 f5 pt-2 block">{Pack}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="block">Pricing Plan</span>
                    <span className="fw-700 f5 pt-2 block">{type}</span>
                  </div>
                  <div className="flex items-end">
                    <span className="fw-700 f3 pt-2 block">{Price}</span>
                    /month
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  {ListOfOptions.map((item, i) => {
                    const { name } = item;
                    return (
                      <span key={i} className="flex gap-2 items-center">
                        <AiOutlineCheck className="bg-color7 color5 border-[var(--color5)] border rounded-full p-1 text-xl" />
                        {name}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-end ">
                  <PrimaryButton>Get Started Now</PrimaryButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
