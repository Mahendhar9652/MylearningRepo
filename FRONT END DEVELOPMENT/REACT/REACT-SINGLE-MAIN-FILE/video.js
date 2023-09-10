import React  from 'react';
import prabhas from'./hi.JPG';
import bale from './bale.mp3';
import video from './new.mp4';

const App =()=>{
    return (
      <div>
        <center>
            HELLO WORLD!
            <img src={prabhas} alt="mahi" height="250" width="auto"/>

            <audio controls>
              <source src={bale} type="audio/ogg"/>
            </audio>
            <video width ="200" height="200" controls >
              <source src={video} type="video/mp4"/>
            </video>
        </center>
        
      </div>
    )
    }
  
  export default App