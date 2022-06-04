import React from "react";
import "./Progressbars.css";

const Progressbar = ({ data, bgcolor, progress }) => {
  const Parentdiv = {
    backgroundColor: bgcolor,
  };

  const Childdiv = {
    width: `${progress}%`,
    backgroundColor: bgcolor,
  };
  const progresstext = {
    color: bgcolor,
  };
  return (
    <div className=" progressbar">
      <div className="progressbarHea">
        <h2>{data}</h2>
      </div>
      <div className="barTop">
        <div className="bar">
          <div className="parent" style={Parentdiv} />
          <div className="barLine" style={Childdiv} />
        </div>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default Progressbar;
