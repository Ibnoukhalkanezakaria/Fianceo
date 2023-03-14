import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img-logo.svg";
import LogInButton from "../Buttons/LogInButton";
import SignUpButton from "../Buttons/SignUpButton";

const Navbar = () => {
  return (
    <div className="Wrapper-nav">
      <div className="flex items-center py-8 justify-between">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="flex items-center">
            <li className="p-4">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4">
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li className="p-4">
              <Link to="/integeation">Integeation</Link>
            </li>
            <li className="p-4">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="p-4">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <LogInButton>Log in</LogInButton>
          <SignUpButton>Sign Up</SignUpButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
