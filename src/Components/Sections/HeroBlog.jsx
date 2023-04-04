import React from "react";
import { Link } from "react-router-dom";

import { ResourcesSectionData } from "../../Data/data";

const HeroBlog = () => {
  const { title, List } = ResourcesSectionData;
  return (
    <div className="bg-color7 p100-section">
      <div className="Wrapper">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
          className="sm:text-5xl text-4xl color5 fw-700 max-w-[700px] m-auto text-center"
        >
          {title}
        </h1>
        <div className="pt-[80px] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6  cursor-pointer">
          {List.map((item, i) => {
            const { title, image, date, id } = item;
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${i + 4}00`}
                data-aos-duration="600"
                key={id}
              >
                <Link to={`/blog/${id}`}>
                  <img src={image} alt="" className="rounded-xl" />
                  <span className="block color5 fw-400 py-4 ">FINANCE</span>
                  <h3 className="f4 max-w-[350px] leading-8 color5 fw-700">
                    {title}
                  </h3>
                  <span className="block py-4 color5 fw-300">{date}</span>
                </Link>
              </div>
            );
          }).slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
