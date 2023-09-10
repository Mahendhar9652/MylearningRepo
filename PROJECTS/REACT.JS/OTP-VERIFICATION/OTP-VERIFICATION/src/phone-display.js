import React, { useState } from 'react';
import { useLocation ,useNavigate}  from 'react-router-dom';

const PhoneDisplay = () => {
  const [copySuccess ,setCopySuccess] =useState('');
  const navigate =useNavigate();

  const location =useLocation();
  var phoneNumber = location.state.phoneNumber;
  var otp = location.state.otp;

const copyToClipBoard =(e)=>{
  navigator.clipboard.writeText(otp).then(
    function(){
      setCopySuccess("Copied");
      //navigate('/verify',{state:{phoneNumber:phoneNumber ,otp:otp}})
    }
  )

}


  return (
    <>
    <center>
    <div className='container-phone'>
        <form action ='/verify'>
            <h3 className='phone-display'>PHONE-DISPLAY</h3>
            <p className='display'>
             Your OTP for Mahi-Design <br></br> 
             Login is :{otp}.Note <br></br>
            That the OTP Will be Valid for 
            Next 10 mins Only.
             Phone Number: {phoneNumber}  
            </p>
            <input type='submit' onClick={copyToClipBoard} value='Copy' className='copy'></input>
            <p className='copyied-text'>{copySuccess}</p>

        </form>
    </div>  

   </center>
    
      
    </>
  )
}

export default PhoneDisplay
