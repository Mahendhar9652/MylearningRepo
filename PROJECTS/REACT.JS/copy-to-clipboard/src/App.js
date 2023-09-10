import React, { useState } from 'react'

const App = () => {
  const [copySucess ,setCopySucess] =useState('');
  const para = "Election commission of India offers online voter registration "; 
const copyToClipboard=()=>{
  navigator.clipboard.writeText(para).then(
    function(){
      setCopySucess("copied")
    } 
  )
}

  return (
    <>
    <center>
     <div>
     <p>{para}</p>
    <button onClick={copyToClipboard}>Copy</button>
    <p>{copySucess}</p>

      </div> 
    

    </center>
    
    </>
  )
}

export default App






























/*import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const App = () => {
const para = "Election commission of India offers online voter registration "; 



  return (
    <>
    <center>
    <div className='container'>
      <div className='text'>
      <h2>How To Register to Vote</h2>
        <p className='para'> 
        {para}

        </p>

      </div>
      <div className='button'>
        <CopyToClipboard text={para}>
        <button className='copy'>Copy</button>
        </CopyToClipboard>
        
      </div>

    </div>
      
    </center>
    
    </>
  )
}

export default App*/

