import React from "react";

const CoursePart = function (props) {
  return (
    <div className="border-2 border-black border-solid	m-3 p-3 w-[40%]">
      <h2 className="text-3xl font-serif font-semibold">{props.Title}</h2>
      <p className=" text-[#626262] font-serif">{props.Parag}</p>
      <button className="relative left-[90%]">expand</button>
    </div>
  );
};

export default CoursePart;
