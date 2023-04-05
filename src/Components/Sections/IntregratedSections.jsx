import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

import { IntregratedSectionsData } from "../../Data/data";
import { Link } from "react-router-dom";

const IntregratedSections = () => {
  const { title, List } = IntregratedSectionsData;
  return (
    <div className="bg-[#F9F9F9] p100-section">
      <div className="Wrapper">
        <h1
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="600"
          className="color5 sm:text-4xl text-3xl fw-700 text-center max-w-[780px] m-auto"
        >
          {title}
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pt-16">
          {List.map((item, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${i + 4}00`}
                data-aos-duration="600"
                key={i}
                className="bg-color7 p-10"
              >
                <img src={item.image} alt="image" />
                <h3 className="color5 fw-700 f5 pt-6 pb-4">{item.name}</h3>
                <p>{item.description} </p>
              </div>
            );
          }).slice(0, 3)}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="600"
          className="flex justify-center pt-20"
        >
          <Link to="/integeation">
            <PrimaryButton>See All Intregrations</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntregratedSections;
