import React from "react";

const VideoThumbnail = function (props) {
  return (
    <div
      id="vid1"
      className=" flex flex-row rounded-lg shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)] h-[100px] m-3 p-2"
    >
      <div className=" h-full w-[35%]  shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)]"></div>
      <div className="w-[65%]">
        <h2 className=" ml-3 font-serif font-semibold">{props.Title}</h2>
        <p className="text-[12px] ml-3">{props.Parag}</p>
        <h2 className="text-[12px] ml-3 rounded-lg bg-slate-200 w-fit pt-[2px] pb-[2px] pr-2 pl-2 ">
          {props.videoDuration}
        </h2>
      </div>
    </div>
  );
};

export default VideoThumbnail;
