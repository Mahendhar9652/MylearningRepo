import React, { useState ,useEffect } from 'react'
import './SellerCart.css'
import TitleLogo from "./images/logo-title.jpg";
import Footer from './Footer';
import { useLocation } from "react-router-dom";
import axios  from 'axios';
import {ref, set,get,update,remove,child} from 'firebase/database'
import { db } from './firebase';



const SellerCart = () => {


const [userUploaded ,setUserUploaded] =useState([])
const location = useLocation();
const [userDetails, setUserDetails] = useState("");


function info() {
const user = location.state?.userDetails; // Use optional chaining to prevent errors if presentUser is undefined
setUserDetails(user);
}
useEffect(()=>{
  FetchData()
  info()
},[])

const FetchData=()=>{
  axios.get('https://shopify-c6f65-default-rtdb.firebaseio.com/.json')
  .then(response => {
    var data =[] 
    data =response.data.sellers;
    var objectValues =Object.values(data)
    setUserUploaded(objectValues)
  })
  .catch(error => {
    console.log(error)
  }); 
}


const Delete =(name)=>{
  remove(ref(db, 'sellers/'+name)).then(()=>alert("Deleted Product"))
}
const [search,setSearch]=useState("")
var searchfilter =userUploaded.filter((item)=>item.item.toLowerCase().includes(search.toLowerCase()))



  return (
    <>

    <div className='seller-cart-header'>
          <img className='seller-logo-cart' src={TitleLogo} alt='icon' height={100} width={100} />
          <h1 className='seller-heading-cart' >Shopify</h1>
          <p className='sub-heading-seller-cart'>Seller Cart</p>
          <input type='text' placeholder='Search your prodcuts ' className='search-seller-cart' value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <i className="fa fa-search icon-search-seller-cart" aria-hidden="true"></i>
          {search && searchfilter &&  searchfilter.map((item)=>
           <ul className='sellcart-suggestions'>
            <li>{item.item}</li>
           </ul>
            )}
            {userDetails&&<><img className='seller-cart-profile-photo' src={userDetails.url} alt='icon' height={60} width={60} />
          <select className='profile-select-seller-cart'>
          <option >{userDetails.name}</option>
          <option >{userDetails.email}</option>
           </select></>}
        </div><br/>
        <br/>
        {searchfilter.filter((item)=>item.email===userDetails.email).length > 0 ? (
  searchfilter.filter((item)=>item.email===userDetails.email).map((item,index)=>
    <div className="card seller-cart-card" key={index}>
      <img className="card-img-top sell-img" src={item.url} alt="Card image cap" height={200} width={200}/>
      <div className="card-body">
        <h5 className="card-title">{item.item}</h5>
        <p className="card-text">{item.email}</p>
        <p className="card-text">{item.price}</p>
        <p className="card-text">{item.quantity}</p>
        <button className="btn btn-primary" onClick={()=>Delete(item.item)}>Delete</button>
      </div>
    </div>
  )
) : (
  <p className='alert-seller-cart'>You have not uploaded any products yet.</p>
)}

      
    
    

















    <div className="seller-benefits-container-cart">
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
        <Footer/>
    </>
  )
}

export default SellerCart;