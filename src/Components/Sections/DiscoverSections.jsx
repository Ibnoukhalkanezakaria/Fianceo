import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import stick1 from "../../assets/stick-1.svg";
import stick2 from "../../assets/stick-2.svg";
import stick3 from "../../assets/stick-3.svg";
import stick4 from "../../assets/stick-4.svg";

const DiscoverSections = () => {
  return (
    <div className="bg-color7 p100-section">
      <div className="md:max-w-[1340px] w-full md:m-auto md:px-[2rem] ">
        <div className="bg-primary-clr py-[100px] text-center relative">
          <img src={stick1} alt="" className="absolute left-[15%] top-[15%]" />
          <img src={stick2} alt="" className="absolute right-[15%] top-[7%]" />
          <img
            src={stick3}
            alt=""
            className="absolute bottom-[10%] right-[10%] z-[5]"
          />
          <img
            src={stick4}
            alt=""
            className="absolute left-[10%] bottom-[10%]"
          />
          <h1 className="md:text-5xl px-4 sm:text-4xl text-3xl color7 fw-700 md:max-w-[900px]   m-auto pb-10">
            Discover a better way to manage spendings
          </h1>
          <div className="z-30 relative">
            <PrimaryButton className="m-auto ">Get Started Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSections;
