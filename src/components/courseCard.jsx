import React from "react";

const CourseCard = function () {
  return (
    <div className="w-full h-full flex flex-col">
      <div id="thumbnail" className="w-[100%] h-[40%]">
        <div className=" w-[100%] h-[100%] border-solid border-black border-2"></div>
      </div>
      <div id="title" className="">
        <h1 className="text-center p-2">I AM A TITLE</h1>
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tempus quisque
          metus, torquent himenaeos massa iaculis potenti dictum dui cum integer
          arcu urna
        </p>
      </div>
      <div id="reviews" className="">
        <div id="customersReviews"></div>
        <div id="leaveReview"></div>
      </div>
      <div id="buttons">
        <button>start now</button>
        <button>add to cart</button>
        <button>add to fav</button>
      </div>
    </div>
  );
};

export default CourseCard;
