import React from "react";
import { competitionData } from "../../Data/data";
import Logo from "../../assets/img-logo.svg";
import { GrClose } from "react-icons/gr";

const competition = () => {
  const { ListOfIntegrated, Decisions } = competitionData;
  return (
    <div className="bg-orange-500">
      <div className="Wrapper">
        <h1 className="fw-700 f2 color5 text-center">
          We break the competition
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="">
            <div className="py-8 bg-[#F1F1F1] flex justify-between text-center px-12">
              {ListOfIntegrated.map((item, i) => {
                const { name, image } = item;
                return (
                  <div key={i} className="">
                    <div className="">
                      <img src={image} alt="" />
                      <span className="block pt-3 color5 fw-600">{name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-12 py-8 bg-[#F9F9F9]">
              {Decisions.map((item, i) => {
                const { Decision } = item;
                return (
                  <p key={i} className="pb-3 color5 flex gap-3 items-center">
                    <GrClose className="bg-orange-600 color7 rounded-full p-1 text-xl" />
                    {Decision}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <div className="flex gap-4 text-center bg-[var(--primary-clr)]">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="bg-[var(--secondary-clr)]">
              {Decisions.map((item, i) => {
                const { Decision } = item;
                return <p key={i}>{Decision}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default competition;
