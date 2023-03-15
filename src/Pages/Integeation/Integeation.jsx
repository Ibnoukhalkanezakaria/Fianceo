import React from "react";
import { IntregratedSectionsData } from "../../Data/data";
import DiscoverSections from "../../Components/Sections/DiscoverSections";

const Integeation = () => {
  const { List } = IntregratedSectionsData;
  return (
    <div>
      <div className="bg-[#F9F9F9]">
        <div className="Wrapper p100-section">
          <h1 className="color5 fw-700 f1 text-center max-w-[900px] m-auto">
            Intregrated with your favourite apps
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 pt-16">
            {List.map((item, i) => {
              return (
                <div key={i} className="bg-color7 p-10">
                  <img src={item.image} alt="image" />
                  <h3 className="color5 fw-700 f5 pt-6 pb-4">{item.name}</h3>
                  <p>{item.description} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <DiscoverSections />
    </div>
  );
};

export default Integeation;
