import React from "react";
import classNames from "classnames";

const PrimaryButton = ({ children, className, ...props }) => {
  const StyleButton = classNames([
    "bg-color3 color7 py-5 px-4 rounded-md w-[200px] text-center cursor-pointer hover:opacity-80",
    className,
  ]);
  return (
    <div className={StyleButton} {...props}>
      {children}
    </div>
  );
};

export default PrimaryButton;
