import React from "react";

const LP = function () {
  return (
    <>
      <div className="w-screen h-[66%]">
        <div className=" w-[100%] flex">
          <div className="absolute left-[70%] top-[12%]">
            <h1 className=" font-semibold"> I AM A HEADLINE </h1>
            <p className=" text-[#cccccc]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tempus
              quisque metus, torquent himenaeos massa iaculis potenti dictum dui
              cum integer arcu urna
            </p>
          </div>
          <div
            id="lpImage"
            className=" w-screen h-full shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.1)]
"
          ></div>
        </div>
      </div>
      <div className=" font-serif font-semibold leading-relaxed text-4xl w-[50%] ml-auto mr-auto align-middle">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipiscing elit tempus quisque
          metus, torquent himenaeos massa iaculis potenti d
        </h1>
      </div>
    </>
  );
};

export default LP;
