import React from "react";

import SliderCnp from "../Slider/SliderCnp";
import UpdateSection from "./UpdateSection";

const CustomersSections = () => {
  return (
    <div className="bg-color7 pt-[100px]">
      <div className="Wrapper">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
          className="color5 sm:text-4xl text-3xl fw-700 sm:text-center text-left"
        >
          Love Form Customers
        </h2>
        <SliderCnp />
        <UpdateSection />
      </div>
    </div>
  );
};

export default CustomersSections;
