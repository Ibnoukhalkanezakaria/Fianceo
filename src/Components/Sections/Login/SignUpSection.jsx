import React, { useState } from "react";

import googleIcon from "../../../assets/Login/Google-icon.svg";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUpSection = () => {
  const [alert, setAlert] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    setAlert(true);
  };

  if (alert) {
    window.alert("cannot be submitted.");
  }

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
                Sign up
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
                className="mt-8 flex cursor-pointer items-center bg-[#F9F9F9] gap-3 justify-center p-4 rounded-md"
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
              <form onSubmit={handleForm} className="flex flex-col gap-3">
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-duration="500"
                  className="flex items-center bg-[#F9F9F9]"
                >
                  <div className="ml-4">
                    <BsFillPersonFill className="text-xl" />
                  </div>
                  <div className="w-full">
                    <input
                      type="name"
                      placeholder="Type your name"
                      required
                      className="outline-none py-5 px-4 bg-transparent placeholder:font-sm placeholder:text-[var(--color5)] "
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-duration="500"
                  className="flex items-center bg-[#F9F9F9]"
                >
                  <div className="ml-4">
                    <MdEmail className="text-xl" />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      required
                      className="outline-none py-5 px-4 bg-transparent placeholder:font-sm placeholder:text-[var(--color5)] "
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="500"
                  className="flex items-center bg-[#F9F9F9]"
                >
                  <div className="ml-4">
                    <RiLockPasswordFill className="text-xl" />
                  </div>
                  <div className="w-full">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      className="outline-none py-5 px-4 w-full placeholder:font-sm placeholder:text-[var(--color5)] "
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="500"
                  className="flex justify-between py-6 flex-wrap gap-4"
                >
                  <div className="flex gap-2 flex-wrap">
                    <label htmlFor="check-box" className="relative">
                      <input
                        id="check-box"
                        type="checkbox"
                        required
                        className="appearance-none w-4 rounded-sm h-4 border checked:bg-[var(--color3)]"
                      />
                      <AiOutlineCheck className="absolute top-0 color7 left-0" />
                    </label>
                    <div>
                      <label className="fw-300 text-[14px]">
                        I agree{" "}
                        <span className="color4">
                          <Link>Terms</Link>
                        </span>{" "}
                        with and
                        <span className="color4">
                          <Link> Privacy</Link>
                        </span>
                      </label>
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
                  className="bg-color3 color7 py-5 px-4 rounded-md text-center cursor-pointer  w-full"
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
                <span className="fw-400">Have account?</span>
                <Link to="/signIn">
                  <span className="underline">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
