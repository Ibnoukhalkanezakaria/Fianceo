import React, { useState } from "react";
import { FrequentlyData } from "../../Data/data";
import { AiOutlinePlus } from "react-icons/ai";
const Frequently = () => {
  const [open, setOpen] = useState(false);
  const { List } = FrequentlyData;
  return (
    <div className="bg-color7 p50-section">
      <div className="Wrapper text-center">
        <h2 className="color5 fw-700 f2">Frequently asked questions</h2>
        <p className="max-w-[500px] color5 m-auto pt-6">
          Create text automations and flows based on custom prebuilt audiences.
          Capture abandon carts or
        </p>
        <div className="flex justify-center p50-section">
          <div className=" flex flex-col text-left w-[600px] max-w-[100%]">
            {List.map((item, i) => {
              const { title, description } = item;
              return (
                <div
                  className="items-center  border-b-[1px] border-[#E5E5E5]  p-6 cursor-pointer"
                  key={i}
                >
                  <div
                    onClick={() => setOpen(!open)}
                    className="flex justify-between item-center duration-500"
                  >
                    <div className="flex items-center color5 fw-600 text-lg">
                      {title}
                    </div>
                    <div>
                      <AiOutlinePlus
                        className={`text-lg ${open ? "rotate-45" : "rotate-0"}`}
                      />
                    </div>
                  </div>
                  <div>
                    <p
                      className={`max-w-[500px] pt-4 fw-400 ${
                        open ? "hidden" : "block"
                      } duration-500 `}
                    >
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
