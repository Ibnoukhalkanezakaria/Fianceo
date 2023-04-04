import React, { useState, useHistory } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img-logo.svg";
import { NavbarData } from "../../Data/data";
import LogInButton from "../Buttons/LogInButton";
import SignUpButton from "../Buttons/SignUpButton";
import { HiBars3 } from "react-icons/hi2";

const Nav = () => {
  const { Links } = NavbarData;
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative z-[999] ">
      <div className="py-8 bg-color7">
        <div className="Wrapper">
          <div className="flex items-center justify-between gap-2">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div
              className={`z-[-1] lg:z-0 py-8 lg:bg-transparent  bg-[#F9F9F9] lg:px-0 px-[1rem] lg:py-0 flex gap-4 flex-col lg:flex-row bg-colo7 absolute ${
                open ? "top-[118px]" : "top-[-400px]"
              } duration-500 left-0 lg:static w-full lg:w-auto`}
            >
              <div>
                <ul className={`flex lg:flex-row flex-col`}>
                  {Links.map((item, i) => {
                    const { name, href } = item;
                    return (
                      <li key={i} className="py-2">
                        <Link to={href} className="color5 p-4">
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex lg:hidden gap-4 px-4 flex-wrap">
                <div className="block md:hidden">
                  <Link to="/signIn">
                    <LogInButton>Log in</LogInButton>
                  </Link>
                </div>
                <div className="block md:hidden">
                  <Link to="/signUp">
                    <SignUpButton>Sign Up</SignUpButton>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="md:block hidden">
                <Link to="/signIn">
                  <LogInButton>Log in</LogInButton>
                </Link>
              </div>
              <div className="md:block hidden">
                <Link to="/signUp">
                  <SignUpButton>Sign Up</SignUpButton>
                </Link>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className={`cursor-pointer p-4 block lg:hidden duration-500 ${
                  open ? "bg-color6" : "bg-color5 color7"
                }`}
              >
                <HiBars3 className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
