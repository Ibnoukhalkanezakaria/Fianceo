import React from "react";
import { SomeStuffData } from "../../Data/data";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const SomeStuff = () => {
  const { List, title } = SomeStuffData;
  return (
    <div className="bg-[#F9F9F9] py-[120px]">
      <div className="Wrapper">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-start">
          {/*  */}
          <div>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              className="color5 fw-700 m-auto pb-6 f2"
            >
              {title}
            </h1>
            <Link to="/signIn">
              <PrimaryButton
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                Gets Started Now
              </PrimaryButton>
            </Link>
          </div>
          {List.map((item, i) => {
            const { name, description, image } = item;
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${i + 4}00`}
                data-aos-duration="500"
                key={i}
                className="bg-color7 bg-shadow  "
              >
                <div className="py-8 px-8">
                  <h1 className="color5 fw-700 f4">{name}</h1>
                  <p>{description}</p>
                </div>
                <img src={image} alt="" className="w-full h-40" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SomeStuff;
