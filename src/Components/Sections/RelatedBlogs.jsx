import React from "react";
import { Link } from "react-router-dom";
import { ResourcesSectionData } from "../../Data/data";

const RelatedBlogs = (props) => {
  const { List } = ResourcesSectionData;
  return (
    <div>
      <div className="bg-[#F9F9F9] p100-section">
        <div className="Wrapper">
          <h1 className="sm:text-center fw-600 pb-[30px]">Related blogs</h1>
          <div className="gap-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {...List.filter((e) => e.id !== props.singleBlog)
              .map((item, i) => {
                const { image, id, date, title } = item;
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={`${i + 4}00`}
                    data-aos-duration="600"
                    key={id}
                  >
                    <Link to={`/blog/${item.id}`}>
                      <img src={image} alt="image" className="w-full" />
                      <span className="text-[#737373] pt-4 fw-600 block">
                        FINANCE
                      </span>
                      <h4 className="color5 py-3 text-xl leading-7 fw-700">
                        {title}
                      </h4>
                      <span className="text-[14px] text-[#737373]">{date}</span>
                    </Link>
                  </div>
                );
              })
              .slice(0, 4)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
