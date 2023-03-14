import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { IntregratedSectionsData } from "../../Data/data";

const IntregratedSections = () => {
  const { title, List } = IntregratedSectionsData;
  return (
    <div className="bg-[#F9F9F9]">
      <div className="p100-section Wrapper">
        <h1 className="color5 f2 fw-700 text-center max-w-[780px] m-auto">
          {title}
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pt-16">
          {List.map((item, i) => {
            return (
              <div key={i} className="bg-color7 p-10">
                <img src={item.image} alt="image" />
                <h3 className="color5 fw-700 f5 pt-6 pb-4">{item.name}</h3>
                <p>{item.description} </p>
              </div>
            );
          }).slice(0, 3)}
        </div>
        <div className="flex justify-center pt-20">
          <PrimaryButton>See All Intregrations</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default IntregratedSections;
