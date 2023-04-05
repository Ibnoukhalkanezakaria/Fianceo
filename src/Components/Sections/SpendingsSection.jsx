import React, { lazy } from "react";

const SpendingsImage = lazy(() =>
  import("../../assets/Spendings/Spendings-img-1.svg")
);

import { AiOutlineCheck } from "react-icons/ai";

const SpendingsSection = () => {
  return (
    <div className="bg-color7 p120-section ">
      <div className="Wrapper">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 items-center">
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="500"
          >
            <img src={SpendingsImage} alt="Image" />
          </div>
          <div>
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              className="color5 fw-700 sm:text-4xl text-3xl"
            >
              Get detailed report about your spendings
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              className="py-2 max-w-[400px]"
            >
              Your need a sales machine not a website that’s where fianceo comes
              in. A clean desinged webflow template.
            </p>
            <div className="flex flex-col item-center fw-600 color5 py-4">
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="500"
              >
                <div className="flex item-center fw-600 color5 pb-4 gap-3 f6">
                  <AiOutlineCheck className="bg-color3 color7 rounded-full p-1 text-xl" />
                  Very easy to customize
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="500"
              >
                <div className="flex item-center fw-600 color5 pb-4 gap-3 f6">
                  <AiOutlineCheck className="bg-color3 color7 rounded-full p-1 text-xl" />
                  Superfast loading speed
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="500"
              >
                <div className="flex item-center fw-600 color5 pb-4 gap-3 f6">
                  <AiOutlineCheck className="bg-color3 color7 rounded-full p-1 text-xl" />
                  Smooth animation & interaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingsSection;
