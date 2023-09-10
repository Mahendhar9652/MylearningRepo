import React, { useState ,useEffect } from 'react'
import './Seller.css'
import { auth ,db } from './firebase';
import {ref, set,get,update,remove,child} from 'firebase/database'
import TitleLogoWhite from "./images/white.png";
import TitleLogoColor from './images/logo-title.jpg'
import DeliverYBoys from './images/delivery-boy-scoty.png'
import Footer from './Footer';
import { useNavigate, useLocation } from "react-router-dom";



const Seller = () => {

const [sellerData, setSellerData] = useState({
name: "",
email: "",
phone:"",
company: "",
typeofitem:"",
address: "",
url: "",
item: "",
price: "",
quantity:""
});

const navigate = useNavigate();
const location = useLocation();
const [userDetails, setUserDetails] = useState("");


function info() {
const user = location.state?.presentUser; // Use optional chaining to prevent errors if presentUser is undefined
setUserDetails({...user});
}
useEffect(()=>{
  info()
},[])

const signout = () => {
auth.signOut().then(() => {
console.log("logged out");
navigate("/sellerlogin");
});
}

const handleInputChange = (e) => {
setSellerData({...sellerData, [e.target.name]:e.target.value});
}

const handleSubmit = (e) => {
e.preventDefault();
console.log(sellerData);
set(ref(db, 'sellers/'+sellerData.item),{
...sellerData
}).then(()=>
  console.log("posted data")
)
  
setSellerData({
  name: "",
email: "",
phone:"",
company: "",
typeofitem:"",
address: "",
url: "",
item: "",
price: "",
quantity:""
})
}
const SellerCartNavigation=()=>{
  
  navigate("/sellercart", { state: { userDetails: userDetails } });
}

  return (
    <>
    <div className='container-seller'>
        <div className='headingIcon-search-cart'>
          <img className='home-logo' src={TitleLogoWhite} alt='icon' height={100} width={100} />
          <h1 className='home-heading' >Shopify</h1>
          <p className='sub-heading'>Sell Online</p>
          <a href='/'  className='seller-buy'>Buy Products</a>
          <button className='signout' onClick={()=>signout()}>SignOut</button> 
          <i className="fas fa-shopping-cart fa-lg text-primary" id='cart-icon' onClick={()=>SellerCartNavigation()}></i> 
          <select className='profile-select'>
          <option className='op'>{userDetails.name}</option>
          <option className='op'>{userDetails.email}</option>
           </select>
          <i className="far fa-user fa-lg text-primary profile-icon"></i><br/><br/>
          <img className='seller-profile-photo' src={userDetails.url} alt='icon' height={60} width={60} />
         
          
        </div>
        <div className='design'>
        <h1 className='launch'>Launch your BUsisness in Shopify</h1><br/>
          <img className='home-logo-color' src={TitleLogoColor} alt='icon' height={100} width={100} /><br/>
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
        </div>
        <main>
        <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Seller Information</legend>
        <label htmlFor="name">Name:</label>
        <input type="text"  name="name" value={sellerData.name} onChange={handleInputChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={sellerData.email} onChange={handleInputChange} required />
         
         
        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" name="phone" value={sellerData.phone} onChange={handleInputChange} required />

        <label htmlFor="item">item:</label>
        <input type="text" name="item" value={sellerData.item} onChange={handleInputChange} required />

        <label htmlFor="company">Company:</label>
        <input type="text"  name="company" value={sellerData.company} onChange={handleInputChange} required />
        

         
      <label htmlFor='options'>Type of item:</label>
      <select value={sellerData.typeofitem} name='typeofitem' onChange={handleInputChange} >
        <option>Select Your Option</option>
        <option value="mensDress">Mens Dress</option>
        <option value="mensSlippers">Mens Slipers</option>
        <option value='womenDress'>Women Dress</option>
        <option value='womenSlippers'>Women Slippers</option>
        <option value='childrenDress'>Children Dress</option>
        <option value="electronics">Electronics</option>
        <option value='generalItems'>General Items</option>
      </select>

        <label htmlFor="url">Photot Url</label>
        <input type="text"  name="url" value={sellerData.url} onChange={handleInputChange} required />

        <label htmlFor="price">Price</label>
        <input type="number"  name="price" value={sellerData.price} onChange={handleInputChange} required />

        <label htmlFor="quantity">Quantity</label>
        <input type="number"  name="quantity" value={sellerData.quantity} onChange={handleInputChange} required />
      
        <label htmlFor="address">Address:</label>
        <input type="text"  name="address" value={sellerData.address} onChange={handleInputChange} required />
  
         
        <button type="submit" className='submit-seller'>Submit</button>

      </fieldset>

     
    </form>
        </main>
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
     



        </div>
        
        
        <Footer/>
    </>
  )
}

export default Seller