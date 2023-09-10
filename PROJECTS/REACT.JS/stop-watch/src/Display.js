import React from 'react';
import { useState, useEffect } from 'react';
import "./Display.css";

const Display = () => {
  const [hours,setHours] =useState(0);
  const [minutes,setMinutes] =useState(0);
  const [seconds,setSeconds] =useState(0);
  const [mili,setMili] =useState(0);
 
  let intervalId;
  useEffect(()=>{
  intervalId=setInterval(()=>{
     setMili(mili+1);
    if(mili===60){
      setSeconds(seconds+1);
      setMili(0);
    }if(seconds===60){
      setMinutes(minutes+1);
      setSeconds(0);
    }if(minutes===60){
      setHours(hours+1);
      setMinutes(0);
    }
    
  },10)
  return ()=>clearInterval(intervalId);

  });
  const start=()=>{
    setMili(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }
  const stop =()=>{
    clearInterval(intervalId);
  }
    

  
  
    
  return (
    <>
    <center>
      <div className='container'>
        <div className='timeshow'>
          <h3>Stop Watch</h3>
           <h1 className='show'>{hours}:{minutes<10?"0"+minutes:minutes}:{seconds}:{mili}</h1>

        </div>
        <div className="buttons">
        <button id="stop" onClick={stop}>Stop</button>
          <button className='start' id="start"onClick={start}>Start</button>
         
            
        </div>

    </div>
      

    </center>
    
    </>
  )
}

export default Display





