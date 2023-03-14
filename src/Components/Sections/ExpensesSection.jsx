import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import image from "../../assets/Expenses/expenses-img.png";

const ExpensesSection = () => {
  return (
    <div className="bg-primary-clr p100-section ">
      <div className="Wrapper">
        <div className="flex items-center gap-4 justify-between">
          <div>
            <h1 className="color7 fw-700 f2 max-w-[700px]">
              Put expenses on easy mode and save tons of money
            </h1>
          </div>
          <div>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
        <div className="flex flex-row gap-8 pt-10">
          <div className="basis-1/2 gap-4 flex flex-col">
            <div className="flex items-center gap-4">
              <div className="b-full">1</div>
              <div>
                <h3 className="color7 f5 fw-600 pb-3">Automated expenses</h3>
                <p className="color7 opacity-85">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="b-full">2</div>
              <div>
                <h3 className="color7 f5 fw-600 pb-3">Spending overview</h3>
                <p className="color7 opacity-85">
                  Bring to the table win-win survival strategies to ensure
                  proactive
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="b-full">3</div>
              <div>
                <h3 className="color7 f5 fw-600 pb-3">Track and pay</h3>
                <p className="color7 opacity-85">
                  Capitalize on low hanging fruit to identify a ballpark value
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSection;
