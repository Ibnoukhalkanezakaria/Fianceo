import React, { useState } from "react";
import { ResourcesSectionData } from "../../Data/data";
import { SlEnvolopeLetter } from "react-icons/sl";
import stick1 from "../../assets/stick-1.svg";
import stick2 from "../../assets/stick-2.svg";
import stick3 from "../../assets/stick-3.svg";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const { List } = ResourcesSectionData;

  const [submit, setSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
  };

  return (
    <div className="bg-[#F9F9F9] p100-section">
      <div className="Wrapper">
        <h2 className="color5 fw-700 text-4xl">Recent Blogs</h2>
        <div className="pt-[30px] flex lg:flex-nowrap flex-wrap justify-between flex-row gap-10">
          <div className="flex flex-col basis-1/1 ">
            {List.map((item, i) => {
              const { Recent, image, title, description, date, id } = item;
              if (Recent === true) {
                return (
                  <div
                    key={id}
                    data-aos="fade-up"
                    data-aos-delay={`${i + 2}00`}
                    data-aos-duration="600"
                    className="flex gap-6 py-6 border-b-[2px] border-[#f1f0f0]"
                  >
                    <Link to={`/blog/${id}`}>
                      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                        <div>
                          <img
                            src={image}
                            alt="image"
                            className="max-w-[300px]"
                          />
                        </div>
                        <div>
                          <span className="text-[#737373]  fw-600 block">
                            FINANCE
                          </span>
                          <h3 className="color5 fw-700 py-3 f5 max-w-[300px] leading-7 ">
                            {title}
                          </h3>
                          <p className="max-w-[300px] leading-6">
                            {description}{" "}
                          </p>
                          <span className="pt-3 block text-[14px] text-[#737373]">
                            {date}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <div className="lg:basis-1/3 w-full ">
            <div className="p-8 flex text-center relative flex-col items-center justify-center bg-[var(--primary-clr)] h-[600px] my-6">
              <img src={stick1} alt="" className="absolute left-10 top-20" />
              <img src={stick2} alt="" className="absolute bottom-14 left-20" />
              <img src={stick3} alt="" className="absolute right-0 top-10" />
              <h3 className="relative z-50 color7 fw-700 f2 leading-16 max-w-[360px]">
                Subscribe to our weekly Newsletter
              </h3>
              <div className="w-full">
                {submit ? (
                  <div className="bg-[#DDDDDD] mt-8 p-4">
                    <p className="w-full text-[#333333] text-sm t-8 fw-400">
                      Thank you! Your submission has been received!
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="w-full justify-center pt-8"
                  >
                    <div className="rounded-md flex bg-[var(--secondary-clr)] p-5 gap-3 my-3">
                      <SlEnvolopeLetter className="color7" />
                      <input
                        type="email"
                        required
                        className="w-full outline-none focus:text-[var(--color7)] rounded-md px-2 placeholder:bg-transparent focus:bg-transparent focus:font-light bg-[var(--secondary-clr)] placeholder:font-light placeholder:text-[var(--color7)]"
                        placeholder="Enter your e-mail"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Subscribe Now "
                      className="rounded-md w-full f7 bg-color3 color7 py-5 px-4 text-center cursor-pointer hover:opacity-80"
                    />
                  </form>
                )}
              </div>
            </div>
            <div className="pt-6">
              <h3 className="color5 fw-500 f6">Follow us on:</h3>
              <div className="flex items-center pt-6 gap-10">
                <span className="cursor-pointer">
                  <a target="_blank" href="https://www.facebook.com/">
                    <TfiFacebook />
                  </a>
                </span>
                <span className="cursor-pointer">
                  <a target="_blank" href="https://twitter.com/home">
                    <TiSocialTwitter />
                  </a>
                </span>
                <span className="cursor-pointer">
                  <a target="_blank" href="https://www.linkedin.com/">
                    <TfiLinkedin />
                  </a>
                </span>
                <span className="cursor-pointer">
                  <a target="_blank" href="https://www.instagram.com/">
                    <RiInstagramFill />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
