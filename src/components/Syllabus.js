import React from "react";
import "./Syllabus.css";
import Progressbar from "./Progressbar";
const Syllabus = () => {
  return (
    <div>
      <div className="syllabus-wise-analysis">
        <div className="syllabus">
          <h3 className="syllabus-heading">Syllabus wise analysis</h3>
        </div>
        <div>
          <div className="left">
            <Progressbar data="HTML Tools, Forms, History" bgcolor="#438AF6" progress="80"/>
            <Progressbar data="Tags & References in HTML" bgcolor="#FF9142" progress="60"/>
            <Progressbar data="Tables & CSS Basics" bgcolor="#FB5E5E" progress="24"/>
            <Progressbar data="Tables & CSS Basics" bgcolor="#2EC971" progress="96"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
