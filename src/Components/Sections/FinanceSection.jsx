import React from "react";
import { FinanceSectionData } from "../../Data/data";

const FinanceSection = () => {
  const { title, List } = FinanceSectionData;
  return (
    <div className="Wrapper p50-section">
      <h1 className="color5 md:text-4xl  sm:text-3xl text-2xl text-center fw-700 max-w-[700px] m-auto">
        {title}
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pt-16 justify-center">
        {List.map((item, i) => {
          return (
            <div key={i} className="">
              <img src={item.image} alt="" />
              <h3 className="fw-700 color5 f5 pt-10 pb-4">{item.title}</h3>
              <p className="max-w-[350px]">{item.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FinanceSection;
