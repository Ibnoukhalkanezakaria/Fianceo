import React, { useRef } from "react";

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

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SliderCnp = () => {
  const { List } = SliderCnpData;

  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  return (
    <div className="md:mb-40 mb-28">
      <div className="">
        <div className="relative ">
          <div>
            <div>
              <div
                onClick={() => handlePrev()}
                className="absolute left-[2%] z-10 lg:top-[45%] top-[25%] cursor-pointer bg-color7 rounded-full p-4 "
              >
                <IoIosArrowBack className="text-2xl" />
              </div>
              <div
                onClick={() => handleNext()}
                className="absolute z-10 lg:top-[45%] top-[25%] right-0 cursor-pointer bg-color7 rounded-full p-4 "
              >
                <IoIosArrowForward className="text-2xl" />
              </div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                className="slider-swiper"
                navigation={false}
                ref={SlideRef}
              >
                {List.map((item, i) => {
                  return (
                    <SwiperSlide key={i} className=" lg:p-[50px]">
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
                        <div className="relativ lg:m-0 m-auto">
                          <div
                            className="relative"
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="600"
                          >
                            <img src={item.profile} alt="" />
                          </div>
                        </div>
                        <div className="lg:m-0 m-auto">
                          <div
                            className="flex gap-2"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="600"
                          >
                            <img src={FramerStar} alt="" />
                            <img src={FramerStar} alt="" />
                            <img src={FramerStar} alt="" />
                            <img src={FramerStar} alt="" />
                            <img src={FramerStar} alt="" />
                          </div>
                          <div className="pt-6 color5">
                            <q
                              data-aos="fade-up"
                              data-aos-delay="400"
                              data-aos-duration="600"
                              className="color5 sm:text-3xl text-2xl fw-700 block max-w-[500px]"
                            >
                              {item.description}
                            </q>
                            <div
                              data-aos="fade-up"
                              data-aos-delay="500"
                              data-aos-duration="600"
                              className="flex justify-between items-center max-w-[400px] pt-10 color5 "
                            >
                              <div>
                                <span className="color5 fw-700 f5 ">
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
      </div>
    </div>
  );
};

export default SliderCnp;
