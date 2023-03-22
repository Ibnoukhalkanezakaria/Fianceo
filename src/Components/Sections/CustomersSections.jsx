import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { CustomersSectionsData } from "../../Data/data";
import SliderCnp from "../Slider/SliderCnp";

const CustomersSections = () => {
  const { List, title } = CustomersSectionsData;
  return (
    <div className="bg-color7 p120-section">
      <div className="Wrapper">
        <h2 className="color5 sm:text-4xl text-3xl fw-700 sm:text-center text-left">
          Love Form Customers
        </h2>
        <SliderCnp />
        <h2 className="color5 sm:text-4xl text-3xl sm:text-center fw-700 text-left max-w-[700px] m-auto">
          {title}
        </h2>
        <div className="py-20 grid md:grid-cols-2 grid-cols-1 md:gap-6 ">
          <div className="bg-color7">
            {List.map((item, i) => {
              return (
                <div
                  key={i}
                  className="bg-color7 mb-10 px-8 py-8 bg-shadow cursor-pointer"
                >
                  <img src={item.image} alt="image" className="w-[700px]" />
                  <h2 className="py-10 color5 fw-700 sm:text-2xl text-xl">
                    {item.title}
                  </h2>
                  <Link to="/" className="flex gap-2 color3 fw-600">
                    READ MORE <BsArrowRight />
                  </Link>
                </div>
              );
            }).slice(0, 1)}
          </div>
          <div className="bg-color7 ">
            {List.map((item, i) => {
              return (
                <div
                  key={i}
                  className="bg-color7 mb-10 px-8 pb-8 bg-shadow cursor-pointer"
                >
                  <h2 className="py-10 color5 fw-700 sm:text-2xl text-xl mr-0">
                    {item.title}
                  </h2>
                  <Link to="/" className="flex gap-2 color3 fw-600">
                    READ MORE <BsArrowRight />
                  </Link>
                </div>
              );
            }).slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersSections;
