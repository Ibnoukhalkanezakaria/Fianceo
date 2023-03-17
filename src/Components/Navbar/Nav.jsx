import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full  top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-6 md:px-10 px-7">
        <div className="relative py-4 bg-white z-50 logo font-bold text-2xl">
          Designer
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="z-50 md:hidden md:static absolute right-8 top-6 cursor-pointer bg-orange-500 p-4"
        >
          <button>{open ? "Menu" : "Close"}</button>
        </div>
        <ul
          className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[70px]" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">Home</li>
          <li className="md:ml-8 text-xl md:my-0 my-7">About</li>
          <li className="md:ml-8 text-xl md:my-0 my-7">Contact</li>
          <li className="md:ml-8 text-xl md:my-0 my-7">FAQ</li>
          <li className="md:ml-8 text-xl md:my-0 my-7">Dish</li>
          <button className="md:ml-6 bg-orange-500 my-4 p-2">Log in</button>
          <button className="md:ml-6 bg-orange-500 my-4 p-2 ">Log in</button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
