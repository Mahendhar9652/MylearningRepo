import React ,{useState} from 'react'
import Logo from './images/delivery-boy.jpg'
import TitleLogo from './images/logo-title.jpg'
import './Register.css';
import { auth } from './firebase.js';
import {Link} from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Register = () => {
    
    const navigate = useNavigate();
    const [errorMsg ,setErrorMsg] =useState("")
const [details,setDetails]=useState({
    name:'',
    email:"",
    password:""
});

const changeHandler=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
}
const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    if (!details.name || !details.email || !details.password) {
      setErrorMsg("Fill all fields");
      return;
    } else {
      createUserWithEmailAndPassword(auth, details.email, details.password)
        .then((res) => {
          const user = res.user;
          updateProfile(user, {
            displayName: details.name,
          });
          console.log("submited");
          navigate('/')

        }
        )
        .catch((err) => console.log("not submitted"+err));
    }
  };
  





  return (
    <>
      <div className='container'>
        <div className='left'>
          <img src={Logo} className='deliveryBoy' alt='Delivery-boy' height='900' width='100%'/>
        </div>
        <div className='card'>
        <img src={TitleLogo} className='logo' alt='logo' height='90' width='100'/>
            <h1>Welcome To Shopify</h1>
            <p className='ship-smarter'>Registration Page</p>
            <form onSubmit={submitHandler}> 
            <input type='text' className='email' name ="name" placeholder='Name' value={details.name} onChange={changeHandler}  /><br/>  
            <input type='email' className='email' name ="email" placeholder='Email id' value={details.email} onChange={changeHandler}  /><br/>  
            <input type='password' className='password' name="password" placeholder='Password' value={details.password} onChange={changeHandler} /><br/>
            <p>{errorMsg}</p>
            <input type='checkbox' className='box'/><br></br>
            <input type='submit' value='Register' className='register' /><br/>
            <p>Already have an account?<Link to="/" className='login-link'>Login</Link></p>
            </form>  
        </div>
      </div> 
    </>
  )
}

export default Register
