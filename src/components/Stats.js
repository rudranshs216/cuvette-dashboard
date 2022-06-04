import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import "./Stats.css"

const Stats = () => {
  //dynamically showing the value of rank,percentile,score using Context-react.
  const {rank,percentile,score} = useStateContext()
  return (
    <div className='stats'>
    <p>Quick Statistics</p>
    <div className="achievement">
        <div className="item">
            <div className="img">
            🏆
            </div>
            <div className="content">
                
            <h6>{rank}</h6>
            <p>YOUR RANK</p>
            </div>
        </div>
        <div className="item">
            <div className="img">
            📋
            </div>
            <div className="content">
                
            <h6>{percentile}%</h6>
            <p>PERCENTILE</p>
            </div>
        </div>
        <div className="item">
            <div className="img">
            ✅
            </div>
            <div className="content">
            <h6>{score} / 15</h6>
            <p>CORRECT ANSWERS</p>
                
            </div>
           
        </div>
    </div>

    </div>
  )
}

export default Stats