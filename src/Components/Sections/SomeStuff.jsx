import React from "react";
import { SomeStuffData } from "../../Data/data";
import PrimaryButton from "../Buttons/PrimaryButton";

const SomeStuff = () => {
  const { List, title } = SomeStuffData;
  return (
    <div className="bg-[#F9F9F9] py-[120px]">
      <div className="Wrapper">
        <div className="grid grid-cols-3 gap-6 ">
          <div>
            <h1 className="color5 fw-700 m-auto pb-8 f2">{title}</h1>
            <PrimaryButton>Gets Started Now</PrimaryButton>
          </div>
          {List.map((item, i) => {
            const { name, description, image } = item;
            return (
              <div
                key={i}
                className="bg-color7 bg-shadow relative min-h-[400px] rounded-md overflow-hidden"
              >
                <div className="py-8 px-8">
                  <h1 className="color5 fw-700 f4">{name}</h1>
                  <p>{description}</p>
                </div>
                <img
                  src={image}
                  alt=""
                  className="absolute bottom-0 w-full max-h-[170px] "
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SomeStuff;
