import React from "react";
import CompanyImage from "../../assets/Company/Company-Image.svg";

const CompanySection = () => {
  return (
    <div className="p120-section bg-color7">
      <div className="Wrapper ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
          <div>
            <h1 className="color5 sm:text-4xl text-3xl fw-700">
              See where the company money goes in real-time
            </h1>
            <p className="py-2 max-w-[500px]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further
            </p>
            <p className="py-2 max-w-[500px]">
              the overall value proposition. Organically grow the holistic world
              view of disruptive innovation
            </p>
          </div>
          <div>
            <img src={CompanyImage} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
