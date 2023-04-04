import React, { useState } from "react";
import { FrequentlyData } from "../../Data/data";
import { AiOutlinePlus } from "react-icons/ai";
const Frequently = () => {
  const [open, setOpen] = useState(false);
  const { List } = FrequentlyData;
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="bg-color7 p50-section">
      <div className="Wrapper text-center">
        <h2
          data-aos="fade-up"
          data-aos-delay={`300`}
          data-aos-duration="500"
          className="color5 fw-700 sm:text-4xl text-3xl"
        >
          Frequently asked questions
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay={`400`}
          data-aos-duration="500"
          className="max-w-[500px] color5 m-auto pt-6"
        >
          Create text automations and flows based on custom prebuilt audiences.
          Capture abandon carts or
        </p>
        <div className="flex justify-center p50-section">
          <div className=" flex flex-col text-left w-[600px] max-w-[100%]">
            {List.map((item, i) => {
              const { title, description } = item;
              return (
                <div
                  onClick={() => toggle(i)}
                  data-aos="fade-up"
                  data-aos-delay={`${i + 4}00`}
                  data-aos-duration="500"
                  className="question duration-500 items-center border-b-[1px] border-[#E5E5E5]  p-6 cursor-pointer"
                  key={i}
                >
                  <div className="flex justify-between item-center duration-500">
                    <div className="flex items-center color5 fw-600 text-lg">
                      {title}
                    </div>
                    <div>
                      <AiOutlinePlus
                        className={`text-lg ${open ? "rotate-45" : "rotate-0"}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`max-h-[0] overflow-hidden duration-500  ${
                      selected === i
                        ? "max-h-[700px] h-auto ease-[cubic-bezier(1,0,1,0)] transition-all	"
                        : "ease-[cubic-bezier(0,1,0,1)] transition-all"
                    }`}
                  >
                    <p className={`max-w-[500px]  pt-4 fw-400 `}>
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
