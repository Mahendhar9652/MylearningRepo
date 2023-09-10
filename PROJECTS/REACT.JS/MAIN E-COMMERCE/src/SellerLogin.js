import React, { useState, useEffect } from "react";
import Logo from "./images/delivery-boy.jpg";
import TitleLogo from "./images/logo-title.jpg";
import "./SellerLogin.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessageOfUser, setErrorMessageOfUser] = useState("");
  const [presentUser, setPresentUser] = useState(null); // Set initial value as null
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { email, password } = details;

  const changeHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Check if email and password are not empty
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User signed in successfully");
        auth.onAuthStateChanged((user) => { // Use the returned unsubscribe function to avoid memory leaks
            console.log(user);
            if (user) {
              setPresentUser({
                uid: user.uid,
                email: user.email,
                name: user.displayName,
                url:user.photoURL
              });
            }
          });
      })
      .catch((error) => {
        console.log("Failed to sign in", error);
        setErrorMessage(error.message); // set error message
      });
  };

  useEffect(() => {
    if (presentUser) {
      navigate("/seller", { state: { presentUser: presentUser } });
    }
  }, [presentUser, navigate]);

  return (
    <>
      <div className="container">
        <div className="left">
          <img
            src={Logo}
            className="deliveryBoy"
            alt="Delivery-boy"
            height="900"
            width="100%"
          />
        </div>
        <div className="card">
          <img src={TitleLogo} className="logo" alt="logo" height="90" width="100" />
          <h1 className="login-h1">Welcome To Seller Shopify </h1>
          <p className="ship-smarter">Login and Ship Smarter Today </p>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="email"
              name="email"
              placeholder="Email id"
              value={email}
              onChange={changeHandler}
            />
            <br />
            <input
              type="password"
              className="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={changeHandler}
            />
            <br />
            <input type="submit" value="Login" className="login" />
            {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
          <div className="links">
            <p className="new">
              New To Shopify ?<a href="/sellerregister" className="create">Create an Account</a>
            </p>
            <a href='/'  className='forgot'>Buy Products </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
