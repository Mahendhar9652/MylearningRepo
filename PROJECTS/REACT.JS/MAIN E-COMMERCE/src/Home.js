import React, { useState ,useEffect,useContext } from 'react'
import './Home.css'
import { auth ,db} from './firebase';
import TitleLogoWhite from "./images/white.png";
import TitleLogoColor from './images/logo-title.jpg'
import DeliverYBoys from './images/delivery-boy-scoty.png'
import Footer from './Footer';
import { useNavigate} from "react-router-dom";
import HomeContent from './HomeContent';
import { store } from './App';





const Home = () => {
const navigate = useNavigate();
const [search,setSearch]=useState("")
const {currentUser,profile ,content,cartData,cartLength} =useContext(store)


var searchfilter =content.filter((item)=>item.item.toLowerCase().includes(search.toLowerCase()))

useEffect(()=>{


},[{cartData,currentUser,profile,content,cartLength}])

const signout = () => {
auth.signOut().then(() => {
console.log("logged out");
navigate("/");
});
}






  return (
    <>
    <div className='container-seller'>
    {currentUser&& 
        <div className='headingIcon-search-cart'>
          <img className='home-logo' src={TitleLogoWhite} alt='icon' height={100} width={100} />
          <h1 className='home-heading' >Shopify</h1>
          <p className='sub-heading'>Ship to smarter</p>
          <input type='text' placeholder='Search your prodcuts ' value={search} onChange={(e)=>setSearch(e.target.value)} className='search-home' />
          <i className="fa fa-search icon-search" aria-hidden="true"></i><br/>
          {search && searchfilter &&  searchfilter.map((item)=>
           <ul className='home-suggestions'>
            <li>{item.item}</li>
           </ul>
            )}
          <a href='/sellerlogin'  className='seller-home'>Become a seller</a>
          <button className='signout' onClick={()=>signout()}>SignOut</button> 
          <i className="fas fa-shopping-cart fa-lg text-primary" id='cart-icon' onClick={()=>navigate("/buycart")}><p className='home-cart-count'>{cartLength}</p></i>
        
         {currentUser && <select className='profile-select'>
          <option className='op'>{currentUser.displayName}</option>
          <option className='op'>{currentUser.email}</option>
           </select>}
            <i className="far fa-user fa-lg text-primary" id='profile-icon'onClick={()=>navigate("/profile")} ></i><br/><br/>
            {profile &&<img className='profile-photo' src={profile.photo} alt='icon' height={60} width={60} />}
          

          
        </div>}
      
        <div className='design'>
        <h1 className='launch'>Buy Products at Shopify</h1><br/>
          <img className='home-logo-color' src={TitleLogoColor} alt='icon' height={100} width={100} /><br/>
          <img className='delivery-boys' src={DeliverYBoys} alt='icon' height={370} width={400} /><br/>
          <div className='icons'>
          <div className='row'>
           <p className='col'>Pan india delivery</p>
           <p className='col'>Lets begin</p>
           <p className='col'>Friendly user</p>
            </div>  
            <div className='rows'>
          <i className="fas fa-map-marker-alt cols"></i>
          <i className="fas fa-handshake cols"></i>
          <i className="fas fa-user cols"></i>
            </div>
          </div>
        </div>
        <HomeContent search={search} searchfilter={searchfilter} /> 
        <div className="seller-benefits-container">
  <div className="seller-benefit">
    <i className="fa fa-users seller-benefit-icon"></i>
    <p className="seller-benefit-text">newly launching the shopify</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-dollar-sign seller-benefit-icon"></i>
    <p className="seller-benefit-text">With 0% commission* , you take 100% profits with you</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-user-cog seller-benefit-icon"></i>
    <p className="seller-benefit-text">Our Dedicated managers will help your business on Flipkart</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-shipping-fast seller-benefit-icon"></i>
    <p className="seller-benefit-text">With our flat discount buy  stress-free</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-calculator seller-benefit-icon"></i>
    <p className="seller-benefit-text">Use our simple pricing calculator to decide the best and competitive buy price for your product</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-headset seller-benefit-icon"></i>
    <p className="seller-benefit-text">All your queries and issues are answered by our dedicated Shopify Support Team</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-money-check-alt seller-benefit-icon"></i>
    <p className="seller-benefit-text">Get payments as fast as 7-10 days from the date of dispatch</p>
  </div>
  <div className="seller-benefit">
    <i className="fa fa-mobile-alt seller-benefit-icon"></i>
    <p className="seller-benefit-text">Download our Shopify Appand shop at , anytime</p>
  </div>
</div> 
     



        </div>
        
       
        <Footer/>
    </>
  )
}

export default Home;