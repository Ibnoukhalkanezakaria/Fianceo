import React from "react";
import { competitionData } from "../../Data/data";
import Logo from "../../assets/img-logo2.svg";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const competition = () => {
  const { ListOfIntegrated, Decisions } = competitionData;
  return (
    <div className="bg-color7 p50-section">
      <div className="Wrapper">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
          className="fw-700 f2 color5 text-center pb-12"
        >
          We break the competition
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10 relative">
          <span className="bg-color7 translate-50 color5 text-xl rounded-full flex justify-center items-center h-[100px] w-[100px] color5 absolute ">
            VS
          </span>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
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
                  <p
                    data-aos="fade-up"
                    data-aos-delay={`${i + 4}00`}
                    data-aos-duration="500"
                    key={i}
                    className="pb-3 color5 flex gap-3 items-center"
                  >
                    <AiOutlineClose className="color7 text-[20px] bg-orange-600 rounded-full p-1" />
                    {Decision}
                  </p>
                );
              })}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
            <div className="flex gap-4 justify-center p-[3.3rem] bg-[var(--secondary-clr)]">
              <img src={Logo} alt="Logo" className="" />
            </div>
            <div className="bg-[var(--primary-clr)] py-8">
              {Decisions.map((item, i) => {
                const { Decision } = item;
                return (
                  <p
                    data-aos="fade-up"
                    data-aos-delay={`${i + 4}00`}
                    data-aos-duration="500"
                    key={i}
                    className="px-12 color7 pb-3 flex items-center gap-3"
                  >
                    <AiOutlineCheck className="bg-color3 color7 rounded-full p-1 text-xl" />
                    {Decision}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default competition;
