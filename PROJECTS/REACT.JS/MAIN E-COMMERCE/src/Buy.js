import React, { useEffect, useState ,useContext } from 'react';
import './Buy.css';
import Footer from './Footer';
import TitleLogoColor from './images/logo-title.jpg';
import { auth } from './firebase';
import { useLocation } from 'react-router-dom';
import { store } from './App';

const Buy = () => {
  const location = useLocation();
  const {currentUser,profile ,content,cartData,cartLength} =useContext(store)
  const [show ,setShow]=useState(true)
  var filteredData = location.state;
  var allPrice = filteredData.map((item, index) => {
    //console.log(item.price); // log the price value to check its type
    if (Array.isArray(item.price)) {
      return item.price.reduce((acc, price) => acc + price, 0);
    } else if (typeof item.price === "number") {

      return item.price;
    } else {
    
      return item.price; // or any other default value
    }
  });
  var diveryCharges = 49;
  var withDeliveryCharges =allPrice.map((allPrice)=>Number(allPrice)+diveryCharges)

  
  
 

  useEffect(() => {
    
  }, [{profile,currentUser}]);

  const PlaceOrder=()=>{
    alert("Your order successfully placed");
    setShow(!show)
  }

  return (
    <>
        {currentUser && profile&& <header>
      <img src={TitleLogoColor} alt="logo" height={70} width={70} className="buy-cart-logo" />
        <h1 className="buy-cart-heading">Shopify</h1>
        <input type="text" placeholder="Search Your Products" className="boy-cart-search" />
        <i className="fa fa-search buy-icon-search" aria-hidden="true"></i>
        <img className="buy-profile-photo" src={profile.photo} alt="icon" height={60} width={60} />
        <select className="buy-profile-select">
          <option>{currentUser.displayName}</option>
          <option>{currentUser.email}</option>
        </select>
      </header>}
      {currentUser && profile&& <main>
        <div className="buy-cart-addres">
          <img className="buy-adress-photo" src={profile.photo} alt="icon" height={60} width={60} />
          <p className="buy-adress-name">Name:{currentUser.displayName}</p>
          <p className="buy-address">
            Adress:4-78,bheemagl,nizmabad,503307 <a href="#">Change</a>
          </p>
          <p className="buy-address-phone">Phone:9652261992</p>
          <hr />
        </div>
      </main>}
      <section>
      <h1 className='buy-heading'>ORDER SUMMARY</h1>
        {show && filteredData.map((item, index) => (
          <div key={index} className="buy-content">
            <img  src={item.url} alt="icon" height={200} width={150} />
            <p className='buy-item'>{item.item}</p>
            <p className='buy-price'>Rs:{item.price}</p>
            <p className='buy-company'>Company:{item.company}</p>
            <hr className='buy-hr'></hr>
            <p className='buy-name'>Seller Name:{item.name}</p>
            <p className='buy-email'>{item.email}</p>
            <hr className='buy-hr-two'></hr>
            <button className="buy-button-minus">-</button>
            <h5 className="buy-h5">1</h5>
            <button className="buy-button-plus">+</button>
            <button className="buy-button-remove">Remove</button>
          </div>
        ))}
        </section>
        <h1 className='buy-sum-heading'>PRICE DETAILS</h1>     
       {show&& 
      <div className='buy-summary'>
       <p>Price:{allPrice}/-</p>
       <p>Delivery Charges:49 /-</p>
       <p>TOTAL PAYABLE :{withDeliveryCharges}/-</p>
       <button className='buy-button-sum' onClick={()=>PlaceOrder()}>PLACE A ORDER</button>
      </div>}

      <Footer />
    </>
  );
};

export default Buy;




