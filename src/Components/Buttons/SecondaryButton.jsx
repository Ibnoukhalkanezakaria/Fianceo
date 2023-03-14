import React from "react";
import classNames from "classnames";

const SecondaryButton = ({ children, className }) => {
  return (
    <button className="bg-color6 py-3 px-8 rounded-md color5">
      {children}
    </button>
  );
};

export default SecondaryButton;
