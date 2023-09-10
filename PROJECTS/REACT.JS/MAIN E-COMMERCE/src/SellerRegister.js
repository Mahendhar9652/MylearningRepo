import React, { useState } from 'react';
import Logo from './images/delivery-boy.jpg';
import TitleLogo from './images/logo-title.jpg';
import './SellerRegister.css';
import { auth } from './firebase'
import { Link, useNavigate } from 'react-router-dom';
import {
createUserWithEmailAndPassword,
updateProfile,
} from 'firebase/auth';

const SellerRegister = () => {
const navigate = useNavigate();
const [errorMsg, setErrorMsg] = useState('');
const [details, setDetails] = useState({
name: '',
email: '',
password: '',
checkbox: false,
url:""
});

const changeHandler = (e) => {
setDetails({ ...details, [e.target.name]: e.target.value });
};

const checkboxHandler = (e) => {
setDetails({ ...details, checkbox: e.target.checked });
};

const submitHandler = (e) => {
e.preventDefault();
console.log(details);
if (!details.name || !details.email || !details.password || !details.checkbox) {
setErrorMsg('Fill all fields');
return;
} else {
createUserWithEmailAndPassword(auth, details.email, details.password)
.then((res) => {
const user = res.user;
updateProfile(user, {
displayName: details.name,
photoURL:details.url
});
console.log('submitted');
navigate('/SellerLogin');
})
.catch((err) => console.log('not submitted' + err));
}
};

return (
<>
<div className='container'>
<div className='left'>
<img
         src={Logo}
         className='deliveryBoy'
         alt='Delivery-boy'
         height='900'
         width='100%'
       />
</div>
<div className='card-seller'>
<img
         src={TitleLogo}
         className='logo'
         alt='logo'
         height='90'
         width='100'
       />
<h1 className='register-h1'>Welcome To Seller Shopify</h1>
<p className='ship-smarter'>Registration Page</p>
<form onSubmit={submitHandler}>
<input
           type='text'
           className='email'
           name='name'
           placeholder='Name'
           value={details.name}
           onChange={changeHandler}
         />
<br />
<input
           type='email'
           className='email'
           name='email'
           placeholder='Email id'
           value={details.email}
           onChange={changeHandler}
         />
<br />
<input
           type='password'
           className='password'
           name='password'
           placeholder='Password'
           value={details.password}
           onChange={changeHandler}
         />
<br />
<input
           type='text'
           className='email'
           name='url'
           placeholder='Photo url'
           value={details.url}
           onChange={changeHandler}
         />
<br />
<input
           type='checkbox'
           className='box'
           name='checkbox'
           checked={details.checkbox}
           onChange={checkboxHandler}
         />
<label htmlFor='checkbox' className='checkbox-label'>
I agree to the terms and conditions
</label>
<br />
<p>{errorMsg}</p>
<input type='submit' value='Register' className='register' />
<br />
<p>
Already have an account?
<Link to='/SellerLogin' className='login-link'>
Login
</Link>
</p>
<a href='/'  className='forgot'>Buy Products </a>
</form>
</div>
</div>
</>
);
};

export default  SellerRegister;