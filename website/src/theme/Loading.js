// src/theme/Loading.js
import React from "react";

const Loading = (props) => {
  return (
    <div className="overlay">
      <div className="overlayDoor" />
      <div className="overlayContent">
        <div className="loader">
          <div className="inner" />
        </div>
      </div>
    </div>
  );
};

Loading.propTypes = {};

export default Loading;
