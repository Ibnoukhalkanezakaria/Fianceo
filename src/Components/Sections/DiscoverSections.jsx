import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import stick1 from "../../assets/stick-1.svg";
import stick2 from "../../assets/stick-2.svg";
import stick3 from "../../assets/stick-3.svg";
import stick4 from "../../assets/stick-4.svg";
import { Link } from "react-router-dom";

const DiscoverSections = () => {
  return (
    <div className="bg-color7 p100-section">
      <div className="md:max-w-[1340px] w-full md:m-auto md:px-[2rem] ">
        <div className="bg-primary-clr py-[100px] text-center relative">
          <img src={stick1} alt="" className="absolute left-[15%] top-[15%]" />
          <img
            data-aos="zoom-in-left"
            data-aos-delay="400"
            data-aos-duration="600"
            src={stick2}
            alt=""
            className="absolute right-[15%] top-[7%]"
          />
          <img
            src={stick3}
            alt=""
            className="absolute bottom-[10%] right-[10%] z-[5]"
          />
          <img
            data-aos="zoom-in-right"
            data-aos-delay="400"
            data-aos-duration="600"
            src={stick4}
            alt=""
            className="absolute left-[10%] bottom-[10%]"
          />
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            className="sm:text-5xl px-4 text-4xl color7 fw-700 md:max-w-[900px]   m-auto pb-10"
          >
            Discover a better way to manage spendings
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
            className="z-30 relative"
          >
            <Link to="/signIn">
              <PrimaryButton className="m-auto ">Get Started Now</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSections;
