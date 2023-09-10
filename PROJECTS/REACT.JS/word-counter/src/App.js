import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {
const [textarea ,setTextarea] =useState(0);
const [limit ,setLimit] =useState();

useEffect(()=>{
  if(textarea.length>=200 ){
    setLimit("Max Limit is 200")
    alert("Max Limit is 200  Words Entered:"+textarea.length)
  
  }
  
},[textarea])





  return (
    <>
    <center>
    <div className='container'>
      <div className='heading'>
        <h1>Word Counter</h1>
      <div className='textarea'>
        <textarea cols='30' rows='9' value={textarea} o
        nChange={(e)=>setTextarea(e.target.value)} 
        maxLength='200' 
        
        placeholder='Please Write Your Text  Here......'>

        </textarea>
      </div>
      <div className='display'>
        <p>Words Entered:{textarea.length} </p>
        <p>Remaining Words:{textarea.length - 200}</p>
        <p>{limit}</p>

      </div>


      </div>
      
    </div>

      
    </center>
   
    </>
  )
}

export default App