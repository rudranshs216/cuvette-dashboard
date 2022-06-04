import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import "./Graph.css"

const Graph = () => {
  const { percentile} = useStateContext();
  let a, x, y, z;
  //dyanmically changing the blue line.
  x = percentile * 6.5 + 115 + "px";
  //dynamically changing the blue div.
  if (percentile === "100") {
    y = "789.6px";
  }
  else {
    y = (Math.floor(percentile / 20)) * 131.4 + 264 + "px";
  }

  //dynamically changing the blue dot.
  z = percentile * 6.5 + 261.5 + "px";

  a = percentile * 6.5 + 280;

  return (
    <div className='graph'>
      <div className="graphContent">
        <div className="graphText">
          <h6>Comparison Graph</h6>
          <p><span>You scored {percentile}% percentile</span> {percentile < 72 ? ("which is lower than the") : ("which is higher than the")} </p>
          <p>average percentile 72% of all the engineers who took this assessment</p>
        </div>
        <div className="graphLogo">
          📈
        </div>
      </div>
      <div className="graphChart">
        <div className="chartDiv">
          <svg width="650" height="179" viewBox="0 0 650 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 172.259C21.933 170.465 70.4484 160.276 97.0456 133.869C130.292 100.86 176.776 -9.64878 207.252 1.8326C237.728 13.314 244.5 125.975 278.055 111.623C311.609 97.2716 327.924 49.1933 344.24 51.7048C360.555 54.2164 387.645 92.2485 411.349 79.6907C435.052 67.1329 447.981 56.3691 481.844 116.646C508.933 164.868 524.633 162.213 544.643 151.808C566.294 143.795 616 136.093 641.612 169.389L649 178" stroke="#C8D6E5" />
          </svg>

        </div>

        <p style={{ left: "270px" }}>0%</p>
        <hr style={{ left: "244px" }} className="vertical" />
        <p style={{ left: "388.4px" }}>20%</p>
        <hr style={{ left: "375.4px" }} className="vertical" />
        <p style={{ left: "519.8px" }}>40%</p>
        <hr style={{ left: "506.8px" }} className="vertical" />
        <p style={{ left: "651.2px" }}>60%</p>
        <hr style={{ left: "638.2px" }} className="vertical" />
        <p style={{ left: "782.6px" }}>80%</p>
        <p style={{ left: "900px" }}>100%</p>
        <hr style={{ left: "583px" }} />



        <div className="orangeDot" />
        <div className="blueDiv">
          <hr style={{ left: x }} className='blue' />
          <div style={{ left: z }} className="blueDot" />
        </div>
        <div style={{ left: y }} className="coverDiv">
        </div>
        <div className="black">
          <svg style={{ left: a + "px" }} width="27" height="32" viewBox="0 0 27 32" className='blackTri' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.96313 18.529C0.114852 17.3495 0.114851 14.6505 1.96313 13.471L21.8862 0.75764C23.8832 -0.516698 26.5 0.917643 26.5 3.2866L26.5 28.7134C26.5 31.0824 23.8832 32.5167 21.8862 31.2424L1.96313 18.529Z" fill="#1E272E" />
          </svg>
          <div style={{ left: a + 15 + "px" }} className="blackDiv">
            <h6>{percentile}% Percentile</h6>
            <p>Your score</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph
