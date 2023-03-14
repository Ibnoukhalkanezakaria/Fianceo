import React from "react";
import SpendingsImage from "../../assets/Spendings/Spendings-img-1.svg";
import { AiOutlineCheck } from "react-icons/ai";

const SpendingsSection = () => {
  return (
    <div className="Wrapper p100-section">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div>
          <img src={SpendingsImage} alt="Image" />
        </div>
        <div>
          <h1 className="color5 f2 fw-700">
            Get detailed report about your spendings
          </h1>
          <p className="py-2 max-w-[400px]">
            Your need a sales machine not a website that’s where fianceo comes
            in. A clean desinged webflow template.
          </p>
          <div className="flex flex-col item-center fw-600 color5 py-4">
            <div>
              <div className="flex item-center fw-600 color5 pb-4 gap-3 f6">
                <AiOutlineCheck className="bg-color3 color7 rounded-full p-1 text-xl" />
                Very easy to customize
              </div>
            </div>
            <div>
              <div className="flex item-center fw-600 color5 pb-4 gap-3 f6">
                <AiOutlineCheck className="bg-color3 color7 rounded-full p-1 text-xl" />
                Superfast loading speed
              </div>
            </div>
            <div>
              <div className="flex item-center fw-600 color5 pb-4 gap-3 f6">
                <AiOutlineCheck className="bg-color3 color7 rounded-full p-1 text-xl" />
                Smooth animation & interaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingsSection;
