import React from "react";
import { GuessedSectionData } from "../../Data/data";

const GuessedSection = () => {
  const { title, description, List } = GuessedSectionData;
  return (
    <div className="bg-color7 p120-section ">
      <div className="Wrapper md:px-12 px-0">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
          className="color5 fw-700 md:text-4xl  sm:text-3xl text-2xl max-w-[800px]"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="500"
          className="max-w-[700px] color5 fw-400"
        >
          {description}
        </p>
        <div className="mt-10">
          {List.map((item, i) => {
            const { name, details } = item;
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${i + 4}00`}
                data-aos-duration="500"
                key={i}
              >
                <hr className="hr bg-[#f0f0f0]" />
                <div className="flex justify-between py-8 gap-4">
                  <div className="basis-1/2">
                    <li className="fw-600 color5 md:text-2xl  sm:text-2xl text-1xl list-disc">
                      {name}
                    </li>
                  </div>
                  <div className="basis-1/2">
                    <span className="color5 md:text-2xl sm:text-2xl text-1xl">
                      {details}{" "}
                    </span>
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
