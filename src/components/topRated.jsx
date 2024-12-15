import React from "react";
import CourseCard from "./courseCard";

const TopRate = function () {
  return (
    <div className="h-[100%] w-[100%]">
      <div id="header" className="w-[100%] h-[30%]">
        <h1>Top Rated</h1>
      </div>
      <div id="courses" className="w-[100%] h-[70%]">
        <div className="border-solid border-black border-2 w-[350px] h-[500px] m-4">
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default TopRate;
