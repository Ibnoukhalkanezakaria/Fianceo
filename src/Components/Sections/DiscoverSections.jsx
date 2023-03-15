import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import stick1 from "../../assets/stick-1.svg";
import stick2 from "../../assets/stick-2.svg";
import stick3 from "../../assets/stick-3.svg";
import stick4 from "../../assets/stick-4.svg";

const DiscoverSections = () => {
  return (
    <div className="p50-section">
      <div className="bg-primary-clr py-[100px] Wrapper text-center relative">
        <img src={stick1} alt="" className="absolute left-[15%] top-[15%]" />
        <img src={stick2} alt="" className="absolute right-[15%] top-[7%]" />
        <img
          src={stick3}
          alt=""
          className="absolute bottom-[10%] right-[10%]"
        />
        <img src={stick4} alt="" className="absolute left-[10%] bottom-[10%]" />
        <h1 className="f1 color7 fw-700 max-w-[780px] m-auto pb-10">
          Discover a better way to manage spendings
        </h1>
        <PrimaryButton className="m-auto">Get Started Now</PrimaryButton>
      </div>
    </div>
  );
};

export default DiscoverSections;
