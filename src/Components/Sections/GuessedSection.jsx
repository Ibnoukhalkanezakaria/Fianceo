import React from "react";
import { GuessedSectionData } from "../../Data/data";

const GuessedSection = () => {
  const { title, description, List } = GuessedSectionData;
  return (
    <div className="bg-color7 p120-section ">
      <div className="Wrapper px-12">
        <h1 className="color5 fw-700 f2 max-w-[800px]">{title}</h1>
        <p className="max-w-[700px] color5 fw-400">{description}</p>
        <div className="mt-10">
          {List.map((item, i) => {
            const { name, details } = item;
            return (
              <div key={i}>
                <hr className="hr bg-[#f0f0f0]" />
                <div className="flex justify-between py-8">
                  <div className="basis-1/2">
                    <li className="fw-600 color5 f4 list-disc">{name}</li>
                  </div>
                  <div className="basis-1/2">
                    <span className="color5 f4">{details} </span>
                  </div>
                </div>
                <hr className="hr bg-[#f0f0f0]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuessedSection;
