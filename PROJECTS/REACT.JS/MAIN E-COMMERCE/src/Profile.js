import React, { useState ,useContext,useEffect} from 'react'
import './Profile.css'
import { auth ,db } from './firebase';
import {ref, set,get,update,remove} from 'firebase/database'
import TitleLogoWhite from "./images/white.png";
import TitleLogoColor from './images/logo-title.jpg'
import DeliverYBoys from './images/delivery-boy-scoty.png'
import Footer from './Footer';
import { store } from './App';




const Profile = () => {
const {currentUser,profile} =useContext(store)

const [show ,setShow] =useState(false)
const [profileData, setprofileData] = useState({
name: "",
email: "",
phone:"",
address: "",
gender:"",
photo:""

});


const handleInputChange = (e) => {
setprofileData({...profileData, [e.target.name]:e.target.value});
}

const handleSubmit = (e) => {
e.preventDefault();
const email = profileData.email;
const encodedEmail = email.replace(".", ",").replace("@", "+");
set(ref(db, 'profile/'+encodedEmail),{
...profileData
}).then(()=>
  console.log("posted data")
  
).then(()=>
alert("Profile is Updated")

).then(()=>setShow(!show))
  
setprofileData({
  name: "",
email: "",
phone:"",
address: "",
gender:"",
photo:""
})
}


 useEffect(()=>{

 },[{profile,profileData,currentUser}])


  return (
    <>
    { currentUser &&<header>
        <img src={TitleLogoWhite} alt="logo" height={70} width={70} className="profile-logo" />
        <h1 className="profile-heading">Shopify</h1>
       {profile && <img className="profile-profile-photo" src={profile.photo} alt="icon" height={60} width={60} />}
        <select className="profile-profile-select">
          <option className='op'>{currentUser.displayName}</option>
          <option className='op'>{currentUser.email}</option>
        </select>
      </header>}
        <div className='profile-design'>
        <h1 className='profile-launch'>Launch your BUsisness in Shopify</h1><br/>
          <img className='profile-logo-color' src={TitleLogoColor} alt='icon' height={100} width={100} /><br/>
          <img className='delivery-boys' src={DeliverYBoys} alt='icon' height={370} width={400} /><br/>
          <div className='icons'>
          <div className='row'>
           <p className='col'>7* Day payment</p>
           <p className='col'>Pan india delivery</p>
           <p className='col'>Lets begin</p>
           <p className='col'>Friendly user</p>
            </div>  
            <div className='rows'>
          <i className="fas fa-wallet cols" ></i>
          <i className="fas fa-map-marker-alt cols"></i>
          <i className="fas fa-handshake cols"></i>
          <i className="fas fa-user cols"></i>
            </div>
          </div>
        </div><br></br><br></br>
       {profile&& <main className='profile-main'>
  <img className="profile-profile-addres-photo" src={profile.photo} alt="icon" height={60} width={60} />
  <label>Name:</label>
  <p className='p'>{profile.name}</p>
  <label>Gender:</label>
  <p className='p'>{profile.gender}</p>
  <label>Email:</label>
  <p className='p'>{profile.email}</p>
  <label>Phone:</label>
  <p className='p'>{profile.phone}</p>
  <label>Address:</label>
  <p className='profile-addres-op'>{profile.address}</p>
  <hr></hr>
  <button onClick={()=>setShow(!show)}>Change</button>
  </main>}
     
  {!profile && <button onClick={()=>setShow(!show)} className='profile-add-button'>Add profile</button>}
    

        {show&&<div className="profile-form-card">
      <h2 className="profile-card-title">Profile Change</h2>
      <form onSubmit={handleSubmit} className='profile-form' id='profileformname'>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={profileData.name}
            onChange={handleInputChange}
            required
          />
        </div><br></br>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={profileData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={profileData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="url"
            id="photo"
            name="photo"
            className="form-control"
            value={profileData.photo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            className="form-control"
            value={profileData.address}
            onChange={handleInputChange}
            cols='20'
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            className="form-control"
            value={profileData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" className="profile-submit">
          Submit
        </button>
      </form>
    </div>}
    <div className='profile-empty'>

    </div>
       
        
        <div className="seller-benefits-container">
  <div className="seller-benefit">
    <i className="fa fa-users seller-benefit-icon"></i>
    <p className="seller-benefit-text">Reach over 50 crore+ customers across 27000+ pincodes</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-dollar-sign seller-benefit-icon"></i>
    <p className="seller-benefit-text">With 0% commission* , you take 100% profits with you</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-user-cog seller-benefit-icon"></i>
    <p className="seller-benefit-text">Our Dedicated managers will help your business on Shopify</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-shipping-fast seller-benefit-icon"></i>
    <p className="seller-benefit-text">With our flat and low return charges, ship your products stress-free</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-calculator seller-benefit-icon"></i>
    <p className="seller-benefit-text">Use our simple pricing calculator to decide the best and competitive selling price for your product</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-headset seller-benefit-icon"></i>
    <p className="seller-benefit-text">All your queries and issues are answered by our dedicated Seller Support Team</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-money-check-alt seller-benefit-icon"></i>
    <p className="seller-benefit-text">Get payments as fast as 7-10 days from the date of dispatch</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-mobile-alt seller-benefit-icon"></i>
    <p className="seller-benefit-text">Download our Shopify Seller App to manage your business anywhere, anytime</p>
  </div>
</div>    
        <Footer/>
    </>
  )
}

export default Profile