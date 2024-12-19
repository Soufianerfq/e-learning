import React from "react";

const VideoPlayer = function (props) {
  return (
    <div>
      {() => {
        if (props.route === null) {
          return <h1>im working</h1>;
        }
      }}
    </div>
  );
};

export default VideoPlayer;
