import React from "react";
import { PricingPlanData } from "../../Data/data";
import PrimaryButton from "../Buttons/PrimaryButton";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const PricingPlan = () => {
  const { List } = PricingPlanData;
  return (
    <div className="">
      <div className="Wrapper sm:mt-[-50px] ">
        <div className="relative">
          {List.map((item, i) => {
            const { Avatar, Pack, type, Price, ListOfOptions } = item;
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${i + 4}00`}
                data-aos-duration="500"
                key={i}
                className="relative z-60 bg-shadow2 p-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mb-8 flex-wrap one  gap-6 flex-row bg-color7 min-h-[240px]  max-w-[1000px] m-auto"
              >
                <div className="flex flex-col justify-between ">
                  <div>
                    <img src={Avatar} alt="" />
                  </div>
                  <div>
                    <span className="block py-3">Perfect for</span>
                    <span className="fw-700 f5 block">{Pack}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between py-4">
                  <div>
                    <span className="block ">Pricing Plan</span>
                    <span className="fw-700 f5 block py-4">{type}</span>
                  </div>
                  <div className="flex items-end">
                    <span className="fw-700 f3 block">{Price}</span>
                    /month
                  </div>
                </div>
                <div className="flex flex-col justify-between py-4">
                  {ListOfOptions.map((item, i) => {
                    const { name } = item;
                    return (
                      <span key={i} className=" py-2 flex gap-2 items-center">
                        <AiOutlineCheck className="bg-color7 color5 border-[var(--color5)] border rounded-full p-1 text-xl" />
                        {name}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-end ">
                  <Link to="/signIn">
                    <PrimaryButton>Get Started Now</PrimaryButton>
                  </Link>
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
