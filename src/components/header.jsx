import React from "react";

const Header = function () {
  return (
    <div className=" w-[100%] flex justify-end space-x-10 ">
      <div id="logo"></div>
      <div id="searchbar" className="mr-[10px] w-[50%] ">
        <input
          type="search"
          className=" border-solid border-black border-2	w-[100%]"
        />
      </div>
      <div id="navLinks " className="flex space-x-2 ml-[20px] mr-[10px]">
        <h1>Courses</h1>
        <h1>Pricing</h1>
        <h1>Contact Us</h1>
      </div>
      <div className="flex space-x-2 pr-3 ">
        <a>LogIn</a>
        <a>SignUp</a>
      </div>
    </div>
  );
};

export default Header;
