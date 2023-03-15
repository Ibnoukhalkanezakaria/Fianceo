import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img-logo.svg";
import LogInButton from "../Buttons/LogInButton";
import SignUpButton from "../Buttons/SignUpButton";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Wrapper-nav">
      <div className="flex items-center py-8 justify-between">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" aria-label="Logo" />
          </Link>
        </div>
        <div>
          <ul
            className={`lg:flex lg:flex-row lg:static lg:bg-color7 bg-[#F9F9F9] w-full h-screen absolute ${
              open ? "opacity-100 " : "opacity-0 "
            } top-[25%] pl-8 left-[-1rem] flex-col items-center`}
            role="list"
            aria-label="Nav-Links"
          >
            <li className="p-4">
              <Link to="/" className="color5">
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link to="/aboutUs" className="color5">
                About Us
              </Link>
            </li>
            <li className="p-4">
              <Link to="/integeation" className="color5">
                Integeation
              </Link>
            </li>
            <li className="p-4">
              <Link to="/pricing" className="color5">
                Pricing
              </Link>
            </li>
            <li className="p-4">
              <Link to="/blog" className="color5">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <div className="gap-4 sm:flex absolute left-[-1rem] bu sm:static">
            <LogInButton>Log in</LogInButton>
            <SignUpButton>Sign Up</SignUpButton>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`ml-6 py-4 px-4 ${
              open ? "color7 bg-color5 " : "color5 bg-color6 "
            }`}
          >
            <HiBars3 className="f5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
