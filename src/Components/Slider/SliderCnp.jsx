import React from "react";
import { SliderCnpData } from "../../Data/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

import FramerStar from "../../assets/Frame-star.svg";
import icon from "../../assets/icon-in-slider.svg";

import stick3 from "../../assets/stick-3.svg";
import stick4 from "../../assets/stick-4.svg";
import stick5 from "../../assets/stick-5.svg";

const SliderCnp = () => {
  const { List } = SliderCnpData;
  return (
    <div className="Wrapper p100-section relative">
      <div className="">
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ clickable: true }}
          >
            {List.map((item, i) => {
              return (
                <SwiperSlide key={i} className="bg-white p-[50px]">
                  <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-8 items-center">
                    <div className="relative">
                      <img
                        src={stick4}
                        alt=""
                        className="bottom-[-15%] left-[20%] absolute rotate-90"
                      />
                      <img src={item.profile} alt="" />
                      <img
                        src={stick3}
                        alt=""
                        className="absolute right-[15%] top-[80%] w-[150px] z-[-1]"
                      />
                      <img
                        src={stick5}
                        alt=""
                        className="absolute left-[-8%] top-[-8.8%] z-[-1]"
                      />
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <img src={FramerStar} alt="" />
                        <img src={FramerStar} alt="" />
                        <img src={FramerStar} alt="" />
                        <img src={FramerStar} alt="" />
                        <img src={FramerStar} alt="" />
                      </div>
                      <div className="pt-6 color5">
                        <q className="color5 f3 fw-700 block">
                          {item.description}{" "}
                        </q>
                        <div className="flex justify-between items-center pt-10 color5 ">
                          <div>
                            <span className="color5 fw-700 f5">
                              {item.name}
                            </span>
                            <span className="block fw-400 text-[var(--paragraph-clr) ] pt-2">
                              {item.titleJob}
                            </span>
                          </div>
                          <div>
                            <img src={icon} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderCnp;
