import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img-logo.svg";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="Wrapper pt-[100px] bg-color7">
      <div className="logo">
        <img src={Logo} alt="Logo" aria-label="Logo" />
      </div>
      <div className="flex flex-row py-10">
        <div className="basis-1/4">
          <h3 className="color5 fw-700 f5 pb-6">Product</h3>
          <ul role="list" aria-label="Nav-Links">
            <li className="pb-5">
              <Link to="/" className="color5">
                Home
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/integeation" className="color5">
                Integeation
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="color5">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/4">
          <h3 className="color5 fw-700 f5 pb-6">Company</h3>
          <ul role="list" aria-label="Nav-Links">
            <li className="pb-5">
              <Link to="/" className="color5">
                About us
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/integeation" className="color5">
                Blogs
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/pricing" className="color5">
                Sign In
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/pricing" className="color5">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/2">
          <h3 className="color5 fw-700 f5 pb-6">Join our newsletter</h3>
          <form className="flex">
            <input
              className="px-4 focus:outline-none"
              type="email"
              placeholder="example@gmail.com"
              required
            />
            <input
              type="submit"
              value="Subscribe Now"
              className="w-[150px] f8 bg-color3 color7 py-5 px-4 text-center cursor-pointer hover:opacity-80"
            />
          </form>
          <ul className="list-disc pt-6 pl-[3%] ">
            <li className="max-w-[500px] leading-[25px]">
              <span className="text-[#00000080] ">
                Will send you weekly updates for your better finance management
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="py-8 flex flex-row gap-10">
        <div>
          <p className="fw-400 ">
            © Ibnoukhalkane 2023 Fianceo. Design by Webflow, checkout the
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
  );
};

export default Footer;
