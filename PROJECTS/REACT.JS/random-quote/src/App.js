import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [quotes ,setQuotes]=useState("");

  const getQuote =()=>{
    fetch('https://type.fit/api/quotes')
    .then(response =>response.json())
    .then(data=>{
      let randomNumber = Math.floor(Math.random()*data.length);
      setQuotes(data[randomNumber]);
      
    }
      )
  }


  return (
    <>
    <div className='container'>
    <h1>Todays's Quote </h1>
    <div className='quotes'>
    <p>Author: <br></br>{quotes.author}</p>
      <p>Todays Quote:<br></br>{quotes.text}</p>
    </div>
    <div className='buttons'>
    <button onClick={getQuote}>Get Your Quote</button>

    </div>
    </div>
    
    </>
  )
}

export default App