import React from 'react';
import { auth } from './firebase';
import { useNavigate, useLocation } from "react-router-dom";
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.presentUser; // Use optional chaining to prevent errors if presentUser is undefined
  console.log(user);

  const LoggedOut = () => {
    auth.signOut().then(() => {
      console.log("logged out");
      navigate("/");
    });
  }

  return (
    <center>
      <div className='containers'>
        Welcome to the home page 
        <div className='main'>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
        </div>

         <div className='buttons'>
         <button onClick={() => LoggedOut()}>Sign Out</button> 
 
          </div> 
            
           
      </div>
       
    </center>
  );
}

export default Home;
