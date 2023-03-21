import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img-logo.svg";
import LogInButton from "../Buttons/LogInButton";
import SignUpButton from "../Buttons/SignUpButton";
import { HiBars3 } from "react-icons/hi2";
import { NavbarData } from "../../Data/data";

const Navbar = () => {
  const { Links } = NavbarData;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="Wrapper z-50">
        <div className="lg:flex z-40 lg:flex-row flex-col justify-between items-center ">
          <div className="logo bg-color7 py-8 relative z-50">
            <Link to="/">
              <img src={Logo} alt="Logo" aria-label="Logo" />
            </Link>
          </div>
          {/* <div
            className={`flex absolute lg:static bg-color7 p-8 w-full z-[1] left-0 duration-500 ${
              open ? "top-[95px]" : "top-[-450px]"
            }`}
          >
            <div>
              <ul role="list" aria-label="Nav-Links" className="">
                {Links.map((item, i) => {
                  const { name, href } = item;
                  return (
                    <li key={i} className="lg:p-4 py-4">
                      <Link to={href} className="color5">
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="gap-4 lg:hidden max-w-[150px] py-4">
              <LogInButton>Log in</LogInButton>
              <SignUpButton>Sign Up</SignUpButton>
            </div>
          </div> */}
        </div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={`absolute lg:hidden block ${
          open ? "bg-color5" : "bg-[#D9D9D9]"
        } top-[1.5rem] right-[2rem] z-[70] p-3`}
      >
        <HiBars3 className={`${open ? "color7" : "color5"} text-[22px]`} />
      </div>
    </div>
  );
};

export default Navbar;
