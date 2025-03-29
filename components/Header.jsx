import React from "react";

const Header = ({ title }) => {
  return (
    <h2 className="text-2xl font-semibold flex items-center">
      <span className="text-primary mr-1">#</span>
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default Header;
