import React from "react";

import { ResourcesSectionData } from "../../Data/data";

const HeroBlog = () => {
  const { title, List } = ResourcesSectionData;
  return (
    <div className="bg-color7 p100-section">
      <div className="Wrapper">
        <h1 className="f1 color5 fw-700 max-w-[700px] m-auto text-center">
          {title}
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6  p100-section cursor-pointer">
          {List.map((item, i) => {
            const { title, image, date } = item;
            return (
              <div>
                <img src={image} alt="" className="rounded-xl" />
                <span className="block color5 fw-400 py-4 ">FINANCE</span>
                <h3 className="f4 max-w-[350px] leading-8 color5 fw-700">
                  {title}
                </h3>
                <span className="block py-4 color5 fw-300">{date}</span>
              </div>
            );
          }).slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
