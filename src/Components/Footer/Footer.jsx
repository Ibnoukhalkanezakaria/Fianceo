import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img-logo.svg";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";

const Footer = () => {
  const date = new Date();
  const today = date.getFullYear();
  const [submit, setSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
  };
  return (
    <div className="bg-color7">
      <div className="Wrapper pt-8">
        <div
          className="logo"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
        >
          <img src={Logo} alt="Logo" aria-label="Logo" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="600"
          className="flex flex-wrap md:flex-row gap-8 justify-start py-12 "
        >
          <div className="basis-1/4 order-footer-3 ">
            <h3 className="color5 fw-700 f5">Product</h3>
            <ul role="list" aria-label="Nav-Links">
              <li className="pt-4">
                <Link to="/" className="color5">
                  Home
                </Link>
              </li>
              <li className="pt-4">
                <Link to="/integeation" className="color5">
                  Integeation
                </Link>
              </li>
              <li className="pt-4">
                <Link to="/pricing" className="color5">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/4 order-footer-2 ">
            <h3 className="color5 fw-700 f5 ">Company</h3>
            <ul role="list" aria-label="Nav-Links">
              <li className="pt-4">
                <Link to="/aboutUs" className="color5">
                  About us
                </Link>
              </li>
              <li className="pt-4">
                <Link to="/blog" className="color5">
                  Blogs
                </Link>
              </li>
              <li className="pt-4">
                <Link to="/" className="color5">
                  Sign In
                </Link>
              </li>
              <li className="pt-4">
                <Link to="/" className="color5">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/1 flex-one">
            <h3 className="color5 fw-700 sm:text-xl text-md pb-4 flex gap-2 ">
              <SlEnvolopeLetter /> Join our newsletter
            </h3>
            <div>
              {submit ? (
                <div className="bg-[#DDDDDD] mt-8 p-4">
                  <p className="w-full text-center text-[#333333] text-sm t-8 fw-400">
                    Thank you! Your submission has been received!
                  </p>
                </div>
              ) : (
                <form className="flex flex-wrap gap-2" onSubmit={handleSubmit}>
                  <input
                    className="p-4 sm:w-[300px] w-full focus:outline-none "
                    type="email"
                    placeholder="example@gmail.com"
                    required
                  />
                  <input
                    type="submit"
                    value="Subscribe Now"
                    className="sm:w-[150px] w-full f8 bg-color3 color7 py-5 px-4 text-center cursor-pointer hover:opacity-80"
                  />
                </form>
              )}
            </div>
            <ul className="list-disc pl-5">
              <li className="max-w-[500px] leading-[25px] ">
                <span className="text-[#00000080] pt-4  block max-w-[400px]">
                  Will send you weekly updates for your better finance
                  management
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex flex-row flex-wrap gap-6 justify-between py-8">
          <div>
            <p className="fw-400 ">
              © Ibnoukhalkane {today} Fianceo. Design by Webflow, checkout the
              repository
              <a
                target="_blank"
                href="https://github.com/Ibnoukhalkanezakaria/Fianceo"
                className="color3
              pl-2"
              >
                here
              </a>
            </p>
          </div>
          <div className="flex gap-10 items-center">
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
  );
};

export default Footer;
