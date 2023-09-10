import React, { useState} from 'react';
import './login.css';
import Icon from './images.jpg';
import Main from './download.jpg';
import { useNavigate } from 'react-router-dom';





const Login = () => {
const [phoneNumber ,setPhoneNumber] = useState();



const navigate =useNavigate();






function submitData(e){
    e.preventDefault();
    if(phoneNumber.length >10 ||phoneNumber.length <10){
        alert("Please Valid Phone Number");
        navigate('/');
    }else{
    var  otp  = Math.floor(Math.random()*1000000);  
    navigate('/phone-display',{state:{phoneNumber:phoneNumber ,otp:otp}})
    //navigate('/verify',{state:{phoneNumber:phoneNumber ,otp:otp}})

    }

    
    
          
}

  return (
    <>
   <center>
    <div className='container'>
        <div className='headings'>
        <img src={Main} className='icon-main' /><h3 className='heading'>Mahi-Design</h3>
            <div className='form-group'>
                <form>
                    <img src={Icon} className='icon-login' /> <br></br>
                    <h5 className='sign'>Lets Sign</h5>
                    <p className='welcome'>Welcome back!!</p>                    
                    <input type='number' placeholder=' Mobile Number..'className='input-number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/> <br></br>
                {/*<input type='checkbox'className='check-box' /><p className='agree'>Agree and Terms and Conditions </p>*/}
                    <input type='submit' onClick={submitData}  placeholder='Send OTP' value='Send OTP'className='send-otp' />
                    <div className='empty'>

                    </div>

                </form>

            </div>

        </div>

    </div>
   </center>
     </>
  )
}

export default Login