import React from "react";
import classNames from "classnames";

const LogInButton = ({ children, className }) => {
  const buttonStyle = {};
  return (
    <button className="bg-color6 py-4 px-8 rounded-md color5">
      {children}
    </button>
  );
};

export default LogInButton;
