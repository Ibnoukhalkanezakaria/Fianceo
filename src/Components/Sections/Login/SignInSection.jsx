import React from "react";

import googleIcon from "../../../assets/Login/Google-icon.svg";
import { Link } from "react-router-dom";

import { AiOutlineCheck } from "react-icons/ai";

import { CgMail } from "react-icons/cg";

import "../../Sections/Login/Login.css";

const SignInSection = () => {
  return (
    <div className="bg-color7 p100-section">
      <div className="Wrapper  max-w-[432px] m-auto">
        <div className="w-[50] m-auto ">
          <div className="max-w-[400px] m-auto ">
            <div>
              <h2
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                className="color5 fw-700 text-2xl"
              >
                Log in
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                className="color5 fw-400 pt-4 m-auto"
              >
                Discover a better way of spandings with fianceo.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
                className="mt-8 flex items-center bg-[#F9F9F9] gap-3 justify-center p-4 rounded-md"
              >
                <span>
                  <img src={googleIcon} alt="" />
                </span>
                <span className="color5 fw-500">Log in with Google</span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              className="flex py-6 gap-3 items-center "
            >
              <span className="border-b w-[200px] border-[#E5E5E5]"></span>
              <span className="text-[#666666] fw-500">Or</span>
              <span className="border-b w-[200px] border-[#E5E5E5]"></span>
            </div>
            <div>
              <form className="flex flex-col gap-3 ">
                <div className="flex bg-[#F9F9F9] items-center">
                  <div>
                    <CgMail className="text-2xl" />
                  </div>
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
                  data-aos-delay="800"
                  data-aos-duration="500"
                  type="password"
                  placeholder="Password"
                  required
                  className="outline-none p-5 placeholder:font-sm placeholder:text-[var(--color5)] bg-[#F9F9F9]"
                />
                <div
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="500"
                  className="flex justify-between py-6 flex-wrap gap-4"
                >
                  <div className="flex gap-2 flex-wrap">
                    <div className="relative check-box-1">
                      <input
                        type="checkbox"
                        className="appearance-none h-4 w-4 border border-black  "
                      />
                      <AiOutlineCheck className="check-1 text-8xl h-3 w-3 absolute top-[10%] left-[12%]" />
                    </div>
                    <div>
                      <label className="fw-300 text-[14px]">Remember me</label>
                    </div>
                  </div>
                  <div>
                    <Link to="/forgetPassword">
                      <span className="underline color5 fw-600">
                        Forget Password?
                      </span>
                    </Link>
                  </div>
                </div>
                <input
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                  type="submit"
                  value="Log in"
                  className="bg-color3 color7 py-5 px-4 rounded-md text-center cursor-pointer hover:opacity-80 w-full"
                />
              </form>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1100"
              data-aos-duration="500"
              className="pt-6"
            >
              <p className="text-[15px] color5 flex gap-1 flex-wrap">
                <span className="fw-400">Not member yet? </span>
                <Link to="/signUp">
                  <span className="underline">Create an account</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSection;
