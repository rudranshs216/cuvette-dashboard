import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
 
  const [open, setOpen] = useState(false);
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [score, setScore] = useState(7);
  const [num, setNum] = useState(500);


  

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ open, setOpen,rank,setRank,percentile,setPercentile,score,setScore,num,setNum}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);