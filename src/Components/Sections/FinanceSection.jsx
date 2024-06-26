import React from "react";
import { FinanceSectionData } from "../../Data/data";

const FinanceSection = () => {
  const { title, List } = FinanceSectionData;
  return (
    <div className="bg-color7 p50-section">
      <div className="Wrapper ">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
          className="color5 sm:text-4xl text-3xl sm:text-center text-left fw-700 max-w-[700px] m-auto"
        >
          {title}
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pt-16 justify-center">
          {List.map((item, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${i + 2}00`}
                data-aos-duration={`500`}
                key={i}
                className=""
              >
                <img src={item.image} alt="" />
                <h3 className="fw-700 color5 f5 pt-10 pb-4">{item.title}</h3>
                <p className="max-w-[350px]">{item.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
