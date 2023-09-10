import React  from 'react';
import prabhas from'./hi.JPG';
import bale from './bale.mp3';

const App =()=>{
    return (
      <div>
        <center>
            HELLO WORLD!
            <img src={prabhas} alt="mahi" height="250" width="auto"/>

            <audio controls>
              <source src={bale} type="audio/ogg"/>
            </audio>
        </center>
        
      </div>
    )
    }
  
  export default App