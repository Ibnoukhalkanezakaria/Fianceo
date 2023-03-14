import React from "react";
import { TrustedData } from "../../Data/data";

const TrustedSection = () => {
  const { title, List } = TrustedData;
  return (
    <div className="Wrapper py-[100px]">
      <h2 className="color5 text-center color5 f5"> {title} </h2>
      <div className="flex justify-between pt-8 w-[90%] m-auto">
        {List.map((item, i) => {
          return (
            <div key={i}>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedSection;
