import React from "react";
import { Link } from "react-router-dom";

const CourseCard = function (props) {
  return (
    <Link to={`/course/${props.Title}`}>
      <div className="w-full h-full flex flex-col p-3 space-y-3">
        <div id="thumbnail" className="w-[100%] h-[40%]">
          <div className="rounded-lg w-[100%] h-[100%] shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)]"></div>
        </div>
        <div id="title" className="">
          <h1 className="text-center p-2 font-bold text-2xl ">{props.Title}</h1>
          <p className=" rounded-lg p-2 text-[#888888] shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)]">
            {props.Parag}
          </p>
        </div>
        <div
          id="reviews"
          className="w-[100%] h-[10%] rounded-lg shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)]"
        >
          <div id="customersReviews"></div>
          <div id="leaveReview"></div>
        </div>
        <div id="buttons" className="flex space-x-5 mr-auto ml-auto pt-3">
          <button className=" bg-[#D89E9E] pl-2 pr-2 pt-1 pb-1 rounded-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)]">
            start now
          </button>
          <button className=" bg-[#D9D9D9] pl-2 pr-2 rounded-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)]">
            add to cart
          </button>
          <button className="pl-2 pr-2 rounded-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)]">
            add to fav
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
