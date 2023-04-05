import React from "react";

import { CgMail } from "react-icons/cg";

import { Link } from "react-router-dom";

const ForgetPasswordSection = () => {
  return (
    <div className="p100-section">
      <div className="Wrapper">
        <div className="max-w-[600px] m-auto text-center border border-[#E1E1E1] py-8 px-20">
          <h1 className="color5 fw-700 text-2xl">Forget your password?</h1>
          <p className="color5 fw-400">
            Enter the email address you signed up with and wait for your
            recovery details to be sent.
          </p>
          <div>
            <form className="flex flex-col gap-3 ">
              <div className="flex bg-[#F9F9F9] items-center mt-6">
                <div>
                  <input
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    type="email"
                    placeholder="Enter your e-mail"
                    required
                    className="outline-none p-5 placeholder:font-sm placeholder:text-[var(--color5)] "
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
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            data-aos-duration="500"
            className="pt-6 flex justify-center"
          >
            <p className="text-[15px] color5 flex gap-1 flex-wrap">
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
