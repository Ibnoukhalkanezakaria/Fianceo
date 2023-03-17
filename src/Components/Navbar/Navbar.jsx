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
    <div className="w-full ">
      <div className="Wrapper relative z-50">
        <div className="lg:flex  justify-between items-center py-8  w-full">
          <div className="logo z-50">
            <Link to="/">
              <img src={Logo} alt="Logo" aria-label="Logo" />
            </Link>
          </div>
          <div>
            <ul className="flex" role="list" aria-label="Nav-Links">
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
          <div className="gap-6 flex bg-color7 ">
            <LogInButton>Log in</LogInButton>
            <SignUpButton>Sign Up</SignUpButton>
          </div>
          <div onClick={() => setOpen(!open)}>
            {/* <HiBars3 className="absolute right-[2rem] top-[2rem] f3" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
