import React from "react";
import { FinanceSectionData } from "../../Data/data";

const FinanceSection = () => {
  const { title, List } = FinanceSectionData;
  return (
    <div className="Wrapper p50-section">
      <h1 className="color5 f2 text-center fw-700 max-w-[700px] m-auto">
        {title}
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pt-16">
        {List.map((item, i) => {
          return (
            <div key={i}>
              <img src={item.image} alt="" />
              <h3 className="fw-700 color5 f5 pt-10 pb-4">{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FinanceSection;
