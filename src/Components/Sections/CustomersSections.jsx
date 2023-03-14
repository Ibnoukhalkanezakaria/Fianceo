import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import { CustomersSectionsData } from "../../Data/data";

const CustomersSections = () => {
  const { List, title } = CustomersSectionsData;
  return (
    <div className="p100-section Wrapper">
      {/* <h2 className="color5 f2 fw-700 text-center">Love Form Customers</h2> */}
      <h2 className="color5 f2 fw-700 text-center max-w-[700px] m-auto">
        {title}
      </h2>

      <div className="py-10 grid grid-cols-2">
        <div className="bg-color7 p-10 ">
          {List.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.image} alt="image" className="max-w-[600px]" />
                <h2 className="py-10 color5 fw-700 f4">{item.title}</h2>
                <Link to="/" className="flex gap-2 color3 fw-600">
                  READ MORE <BsArrowRight />
                </Link>
              </div>
            );
          }).slice(0, 1)}
        </div>
        <div className="bg-color7 p-10">
          {List.map((item, i) => {
            return (
              <div key={i}>
                <h2 className="py-10 color5 fw-700 f4">{item.title}</h2>
                <Link to="/" className="flex gap-2 color3 fw-600">
                  READ MORE <BsArrowRight />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomersSections;
