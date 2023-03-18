import React from "react";
import { ResourcesSectionData } from "../../Data/data";

const RecentBlogs = () => {
  const { List } = ResourcesSectionData;
  return (
    <div className="bg-[#F9F9F9] p100-section">
      <div className="Wrapper">
        <h1 className="color5 fw-700 f2 pb-6">Recent Blogs</h1>
        <div className="flex flex-row gap-8">
          <div className="basis-1/1 ">
            {List.map((item, i) => {
              const { Recent, image, title, description, date } = item;
              if (Recent === true) {
                return (
                  <div
                    key={i}
                    className="flex gap-6 py-6 border-b-[2px] border-[#f1f0f0]"
                  >
                    <div>
                      <img src={image} alt="image" className="max-w-[300px]" />
                    </div>
                    <div>
                      <span>FINANCE</span>
                      <h3 className="color5 fw-700 f5 max-w-[300px] leading-7 pt-4">
                        {title}
                      </h3>
                      <p className="max-w-[500px] py-4">{description} </p>
                      <span>{date}</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="basis-1/3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio debitis ipsum blanditiis consequuntur nihil quisquam
              eum libero voluptatum, dolorum voluptas quod! Sunt at commodi ea
              cupiditate deserunt, molestiae distinctio soluta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
