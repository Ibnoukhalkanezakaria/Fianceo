import React from "react";
import { HeroAboutUsData } from "../../Data/data";
const DifferentlySection = () => {
  const { List } = HeroAboutUsData;
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        className="p50-section"
      >
        <div className="flex md:justify-between flex-wrap gap-6 items-center">
          <div>
            <h3 className="color5 fw-700 f2">We do this differently</h3>
          </div>
          <div>
            <p className="max-w-[400px]">
              Erat eleifend lacus mattis at porttitor at mauris vel pharetra.
              Consequat, dictum
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gird-cols-1 gap-6 pt-20 pb-[120px] w-full">
          {List.map((item, i) => {
            const { val, name, description } = item;
            return (
              <div key={i} className="">
                <h3 className="color5 fw-700 f2">{val}</h3>
                <span className="color5 pt-4 pb-4 block fw-500 f6">{name}</span>
                <p className="fw-400 max-w-[400px]">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DifferentlySection;
