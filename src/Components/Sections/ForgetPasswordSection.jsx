import React, { useState } from "react";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

const ForgetPasswordSection = () => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <div className="p100-section">
      <div className="Wrapper">
        <div className=" max-w-[600px] m-auto text-center border border-[#E1E1E1] py-10 sm:px-20 px-10">
          <h1 className="color5 fw-700 text-2xl">Forget your password?</h1>
          <p className="color5 fw-400 text-[15px]">
            Enter the email address you signed up with and wait for your
            recovery details to be sent.
          </p>
          <div className="pt-8">
            {submit ? (
              <div className="bg-[#DDDDDD] p-4">
                <p className="w-full text-[#333333] text-sm t-8 fw-400">
                  Thank you! Your submission has been received!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-duration="500"
                  className="flex items-center bg-[#F9F9F9]"
                >
                  <div className="ml-4">
                    <MdEmail className="text-xl" />
                  </div>
                  <div className="text-left w-full">
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      required
                      className="outline-none py-5 px-4 bg-transparent placeholder:font-sm placeholder:text-[var(--color5)] "
                    />
                  </div>
                </div>
                <input
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                  type="submit"
                  value="Submit"
                  className="bg-color3 color7 py-5 px-4 rounded-md text-center cursor-pointer hover:opacity-80 w-full"
                />
              </form>
            )}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            data-aos-duration="500"
            className="pt-6 flex justify-center"
          >
            <p className="text-[14px] color5 flex gap-1 flex-wrap">
              <span className="fw-400">Didn’t get the conde?</span>
              <Link to="">
                <span className="underline">Resend</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordSection;
