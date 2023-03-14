import React from "react";
import { TrustedData } from "../../Data/data";

const TrustedSection = () => {
  const { title, List } = TrustedData;
  return (
    <div className="Wrapper py-[100px]">
      <h2 className="color5 text-center color5 f5"> {title} </h2>
      <div className="flex gap-10 flex-wrap pt-8 justify-center">
        {List.map((item, i) => {
          return (
            <div key={i}>
              <img src={item.image} alt="trusted-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedSection;
