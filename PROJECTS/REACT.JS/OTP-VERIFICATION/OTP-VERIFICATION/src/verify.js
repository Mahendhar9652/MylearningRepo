import React from 'react';
//import { useLocation } from 'react-router-dom';

import './login.css';
import Icon from './images.jpg'
import Main from './download.jpg'

const Verify = () => {
 /* const location =useLocation();
  var newPhoneNumber = location.state.phoneNumber;
  var newOtp = location.state.otp;
  console.log(newPhoneNumber);
  console.log(newOtp);*/




  return (
    <>
   
   <center>
    <div className='container'>
        <div className='headings'>
        <img src={Main} className='icon-main' /><h3 className='heading'>Mahi-Design</h3>
            <div className='form-group'>
                <form action='./home'>
                    <img src={Icon} className='icon-login' /> <br></br>
                    <h5 className='sign'>Verify</h5>
                    <p className='welcome'>Please Enter 4-digit OTP</p>                    
                    <input type='text' placeholder=' Enter OTP..'className='input-number' /> <br></br>
                    <input type='submit' placeholder='Send OTP' value='Verify'className='verify'/>
                </form>
                <p className='resend-text'>Didn't get the code? </p><button className='resend'>RESEND</button>

            </div>

        </div>

    </div>
   </center>

    
     </>
  )
}

export default Verify