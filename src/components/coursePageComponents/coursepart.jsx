import React from "react";
import { useSearchParams } from "react-router-dom";

const CoursePart = function (props) {
  const [_, setSearchParams] = useSearchParams();

  const handleAddQueryPart = (part) => {
    setSearchParams((params) => {
      params.set("part", part);
      return params;
    });
  };

  return (
    <div className="border-2 border-black border-solid	m-3 p-3 w-[40%]">
      <button onClick={() => handleAddQueryPart(props.id)}>
        <h2 className="text-3xl font-serif font-semibold">{props.Title}</h2>
      </button>
      <p className=" text-[#626262] font-serif">{props.Parag}</p>
      <button className="relative left-[90%]">expand</button>
    </div>
  );
};

export default CoursePart;
