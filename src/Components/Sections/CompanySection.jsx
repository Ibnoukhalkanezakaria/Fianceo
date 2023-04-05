import React from "react";
import CompanyImage from "../../assets/Company/Company-Image.svg";

const CompanySection = () => {
  return (
    <div className="p120-section bg-color7 ">
      <div className="Wrapper ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
          <div className="order-one">
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
              className="color5 sm:text-4xl text-3xl fw-700"
            >
              See where the company money goes in real-time
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
              className="py-2 max-w-[500px]"
            >
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="600"
              className="py-2 max-w-[500px]"
            >
              the overall value proposition. Organically grow the holistic world
              view of disruptive innovation
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <img src={CompanyImage} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
