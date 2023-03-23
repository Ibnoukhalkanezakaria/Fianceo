import React, { useState } from "react";
import "./Nav.css";
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
    <header className="bg-white">
      <nav className="Wrapper flex relative z-10 p-4 justify-between items-center ">
        <div className="bg-color7">
          <img src={Logo} alt="Logo" aria-label="" />
        </div>
        <div
          className={`z-[-1] absolute duration-500 md:static md:h-auto md:w-auto md:bg-transparent bg-color7 h-screen left-0 ${
            open ? "top-[100px]" : "top-[-450px]"
          } w-full flex items-center px-5 y-2`}
        >
          <ul className="flex md:flex-row flex-col md:items-center">
            {Links.map((item, i) => {
              const { name, href } = item;
              return (
                <li key={i}>
                  <Link to={href} className="color5 p-4">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-4 bg-color7">
          <div className="hidden sm:flex gap-4">
            <LogInButton>Log in</LogInButton>
            <SignUpButton>Sign Up</SignUpButton>
          </div>
          <div>
            <HiBars3
              onClick={() => setOpen(!open)}
              className="text-3xl cursor-pointers md:hidden"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
