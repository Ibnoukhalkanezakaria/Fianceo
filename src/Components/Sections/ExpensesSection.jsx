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
        <div className="flex items-center gap-4 justify-between">
          <div>
            <h1 className="color7 fw-700 f2 max-w-[700px] m-0">
              Put expenses on easy mode and save tons of money
            </h1>
          </div>
          <div>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
        <div className="flex flex-row gap-10 p100-section">
          <div className="basis-1/2 gap-8 flex flex-col">
            <div className="flex gap-8 items-center">
              <div className="bg-[#0D3EA2] color7 py-6 px-10 rounded-[50%] f2 fw-700 w-[100px] flex justify-center items-center">
                1
              </div>
              <div>
                <h2 className="color7 f4 fw-700 pb-2">Automated expenses</h2>
                <p className="text-[#F5F7FA] f7 max-w-[400px]">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="bg-[#0D3EA2] color7 py-6 px-10 rounded-[50%] f2 fw-700 w-[100px] flex justify-center items-center">
                2
              </div>
              <div>
                <h2 className="color7 f4 fw-700 pb-2">Spending overview</h2>
                <p className="text-[#F5F7FA] f7 max-w-[400px]">
                  Bring to the table win-win survival strategies to ensure
                  proactive
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="bg-[#0D3EA2] color7 py-6 px-10 rounded-[50%] f2 fw-700 w-[100px] flex justify-center items-center">
                3
              </div>
              <div>
                <h2 className="color7 f4 fw-700 pb-2">Track and pay</h2>
                <p className="text-[#F5F7FA] f7 max-w-[400px]">
                  Capitalize on low hanging fruit to identify a ballpark value
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/2 relative z-50">
            <img src={image} alt="image" className="" />
            <img
              src={stick4}
              alt=""
              className="absolute right-[-5%] top-[20%]"
            />
            <img
              src={stick1}
              alt=""
              className="absolute left-[-10%] top-[-10%]"
            />
            <img
              src={stick3}
              alt=""
              className="absolute right-[-7%] bottom-[-10%] z-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSection;
