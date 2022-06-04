import React from "react";
import "./QuestionAnalysis.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useStateContext } from "../contexts/ContextProvider";

const QuestionAnalysis = () => {
  const {score} = useStateContext();
  return (
    <div className="questionAnalysis">
      <div className="questionAnalysisDiv">
        <div className="left">
          <p>Question Analysis</p>
        </div>
        <div className="right">
          <p>{score}/ 15</p>
        </div>
      </div>
      <div className="content">
        <p>
          <span> You scored {score} question correct out of 15.</span> However it still needs some
          improvements
        </p>
      </div>
      <div>
        <div className="circle">

          <div className="circleDiv">


            <CircularProgressbar

              value={score}
              maxValue={15}
              text={`  🎯`}
              strokeWidth="16"
              initialAnimation={true}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#438AF6",
                trailColor: "#438AF6",
                textSize: "26",




              })}

            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
