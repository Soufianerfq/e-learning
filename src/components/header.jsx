import React from "react";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <div className=" w-[100%] flex justify-end space-x-10 items-center">
      <div
        id="logo"
        className="mr-auto ml-3 h-[40px] w-[120px] rounded-lg shadow-[0px_0px_30px_0px_rgba(0,_0,_0,_0.2)]"
      ></div>
      <div id="searchbar" className=" w-[70%]  ">
        <input
          type="search"
          className="rounded-lg	shadow-[0px_0px_30px_0px_rgba(0,_0,_0,_0.2)]	w-[100%] h-[40px] p-5"
          placeholder="search"
        />
      </div>
      <div id="navLinks " className="flex space-x-5">
        <Link to="/courses">
          <h1 className=" rounded-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.2)] pr-4 pl-4 pt-1 pb-1">
            Courses
          </h1>
        </Link>
        <h1 className=" rounded-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.2)] pr-4 pl-4 pt-1 pb-1 ">
          Pricing
        </h1>
        <h1 className=" rounded-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.2)] pr-4 pl-4 pt-1 pb-1">
          Contact
        </h1>
      </div>
      <div className="flex space-x-2 ">
        <a className=" bg-[#D89E9E] rounded-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.2)] pr-4 pl-4 pt-1 pb-1">
          LogIn
        </a>
        <a className=" bg-[#D9D9D9]  rounded-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.2)] pr-4 pl-4 pt-1 pb-1">
          SignUp
        </a>
      </div>
    </div>
  );
};

export default Header;
