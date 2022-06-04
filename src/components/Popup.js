import React, { useState } from 'react'
import "./Popup.css"
import { AiOutlineArrowRight } from "react-icons/ai"
import { IconContext } from "react-icons";
import { useStateContext } from '../contexts/ContextProvider'

const Popup = () => {
    const { setOpen, setRank, setPercentile, setScore } = useStateContext();
    const [data, setData] = useState({
        rank: "",
        percentile: "",
        score: ""

    })
    //handle the click on save button
    const handleClick = (event) => {

        event.preventDefault();
        //to handle wrong data
        if (data?.percentile > 100 || data?.score > 15) {
            setPercentile(37);
            setScore(7);
            setOpen(false)
            alert("Data is Wrong");

        }
        else {
            setRank(data.rank);
            setScore(data.score);
            setPercentile(data.percentile);
            setOpen(false)
        }


    }
    //handle the change in the value of input fields
    const handleChange = (event) => {
        const { name, value } = event.target
        let update = { ...data, [name]: value }
        setData(update);
    }
    return (
        <form>
            <div className='popup'>
                <div className="containt">
                    <div className="top">
                        <p>Update Scores</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="" />

                    </div>
                    <div className="middle">
                        <div className="item">
                            <div className="text">
                                <div className='num'>1</div>
                                <p>Update your rank</p>

                            </div>
                            <div className="input">
                                <input name='rank' value={data.rank} onChange={handleChange} type="number" />

                            </div>

                        </div>
                        <div className="item">
                            <div className="text">
                                <div className='num'>2</div>
                                <p>Update your percentile</p>

                            </div>
                            <div className="input">
                                <input name='percentile' value={data.percentile} onChange={handleChange} type="number" />

                            </div>

                        </div>
                        <div className="item">
                            <div className="text">
                                <div className='num'>3</div>
                                <p>Update your current score (out of 15)</p>

                            </div>
                            <div className="input">
                                <input name='score' value={data.score} onChange={handleChange} type="number" />

                            </div>

                        </div>
                    </div>

                    <div className="bottom">
                        <button onClick={() => setOpen(false)}>Cancel</button>
                        <IconContext.Provider value={{ color: "white" }}>

                            <button onClick={handleClick} className='save'>Save <span><AiOutlineArrowRight className='saveIcon' /></span></button>
                        </IconContext.Provider>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default Popup
