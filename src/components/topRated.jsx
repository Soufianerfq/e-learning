import React from "react";
import CourseCard from "./courseCard";
import courses from "../data/data";
import { Link } from "react-router-dom";

const TopRate = function () {
  return (
    <div className="h-[100%] w-[100%] flex flex-col ">
      <div id="header" className="w-[30%] h-[30%] mr-auto ml-auto ">
        <h1 className="font-serif font-semibold text-3xl mb-5">Top Rated</h1>
        <p className="text-[#888888]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tempus quisque
          metus, torquent himenaeos massa iaculis potenti dictum dui cum integer
          arcu urna
        </p>
      </div>
      <div
        id="courses"
        className="w-[100%] h-[70%] flex justify-center space-x-[5%] "
      >
        {courses.map((obj) => (
          <Link to={`courses/${obj.id}`}>
            <div className="border-solid rounded-lg	shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)] w-[350px] h-[500px] m-4">
              <CourseCard {...obj} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRate;
