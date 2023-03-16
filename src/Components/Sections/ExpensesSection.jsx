import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import image from "../../assets/Expenses/expenses-img.png";
import stick1 from "../../assets/stick-1.svg";
import stick3 from "../../assets/stick-3.svg";
import stick4 from "../../assets/stick-4.svg";

const ExpensesSection = () => {
  return (
    <div className="bg-primary-clr p100-section">
      <div className="Wrapper">
        <div className="flex gap-6 items-center md:justify-between flex-wrap">
          <div>
            <h1 className="color7 fw-700 md:text-4xl text-3xl max-w-[700px] m-0 ">
              Put expenses on easy mode and save tons of money
            </h1>
          </div>
          <div>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-14 p100-section justify-center">
          <div className="gap-8 flex flex-col md:order-0 order-1">
            <div className="flex gap-8 items-center">
              <div className="bg-[#023ba5] fw-700 rounded-[50%] h-[100px] flex justify-center items-center color7 md:text-4xl  w-[100px]">
                1
              </div>
              {/* bg-[#0D3EA2] color7 md:py-6 py-4 md:px-10 rounded-[50%]
              md:text-4xl text-3xl fw-700 md:w-[100px] w-[70px] h-[70px] flex
              justify-center items-center */}
              <div>
                <h2 className="color7 md:text-2xl  fw-700 pb-2">
                  Automated expenses
                </h2>
                <p className="text-[#F5F7FA] f7 max-w-[400px]">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="bg-[#023ba5] fw-700 rounded-[50%] h-[100px] flex justify-center items-center color7 md:text-4xl  w-[100px]">
                2
              </div>
              <div>
                <h2 className="color7 md:text-2xl text-1xl fw-700 pb-2">
                  Spending overview
                </h2>
                <p className="text-[#F5F7FA] f7 max-w-[400px]">
                  Bring to the table win-win survival strategies to ensure
                  proactive
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="bg-[#023ba5] fw-700 rounded-[50%] h-[100px] flex justify-center items-center color7 md:text-4xl w-[100px]">
                3
              </div>
              <div>
                <h2 className="color7 md:text-2xl text-1xl fw-700 pb-2">
                  Track and pay
                </h2>
                <p className="text-[#F5F7FA] f7 max-w-[400px]">
                  Capitalize on low hanging fruit to identify a ballpark value
                </p>
              </div>
            </div>
          </div>
          <div className=" z-50 md:order-1 order-0">
            <div className="relative">
              <img src={image} alt="image" className="" />
              <img
                src={stick4}
                alt=""
                className="absolute right-[-3%] top-[20%]"
              />
              <img
                src={stick1}
                alt=""
                className="absolute left-[-10%] top-[-10%]"
              />
              <img
                src={stick3}
                alt=""
                className="absolute right-[-4%] bottom-[-10%] z-[-1] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSection;
