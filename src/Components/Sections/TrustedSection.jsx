import React from "react";
import { TrustedData } from "../../Data/data";

const TrustedSection = () => {
  const { title, List } = TrustedData;
  return (
    <div className="bg-color7 p100-section">
      <div className="Wrapper ">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
          className="color5 text-center color5 f5"
        >
          {title}
        </h2>
        <div className="flex gap-10 flex-wrap pt-8 justify-center">
          {List.map((item, i) => {
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i + 2}00`}
                data-aos-duration="500"
              >
                <img src={item.image} alt="trusted-image" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
