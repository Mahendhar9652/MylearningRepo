import React, {useEffect,useContext,useState } from 'react';
import './BuyCart.css';
import Footer from './Footer';
import TitleLogoColor from './images/logo-title.jpg';
import {useNavigate} from "react-router-dom";
import { store } from './App';

const BuyCart = () => {
  const navigate = useNavigate();
  const {currentUser,profile,content,cartData} =useContext(store)
  const [show ,setShow]=useState(true)
  const [search,setSearch]=useState("")
  var searchfilter =cartData.filter((item)=>item.item.toLowerCase().includes(search.toLowerCase()))

 useEffect(() => {
 
 }, [{profile,currentUser,content,cartData}])
 
 function Buy(indexOfBuy){
  const filteredData =content.filter((items,index)=>
  indexOfBuy===index)   
navigate('/buy',{state:filteredData})
  }
  //console.log(cartData);
  const allPrice = cartData.filter(item => Number(item.price)).reduce((acc, cur) => acc + Number(cur.price), 0);

  const deliveryCharges = 49;
  const withDeliveryCharges = allPrice + deliveryCharges;
    
  const PlaceOrder=()=>{
    alert("Your order successfully placed");
    setShow(!show)
  }

  return (
    <>
     {currentUser&& <header className='buy-cart-header'>
        <img src={TitleLogoColor} alt="logo" height={70} width={70} className="buy-cart-logo" />
        <h1 className="buy-cart-heading">Shopify</h1>
        <input type="text" placeholder="Search Your Products" className="boy-cart-search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <i className="fa fa-search buy-icon-search" aria-hidden="true"></i>
        {search && searchfilter &&  searchfilter.map((item)=>
           <ul className='buycart-suggestions'>
            <li>{item.item}</li>
           </ul>
            )}
        {profile && <img className="buy-profile-photo" src={profile.photo} alt="icon" height={60} width={60} />}
        <select className="buy-profile-select">
          <option>{currentUser.displayName}</option>
          <option>{currentUser.email}</option>
        </select>
      </header>}
      {profile&&  
         <div className="buy-cart-addres">
          <img className="buy-adress-photo" src={profile.photo} alt="icon" height={60} width={60} />
          <p className="buy-adress-name">Name:{profile.name}</p>
          <p className="buy-address">
            Address :{profile.address}<a href="/profile">Change</a>
          </p>
          <p className="buy-address-phone">Phone:{profile.phone}</p>
          <hr />
      </div>}
      <main>
      {show && searchfilter.length > 0 ? 
  searchfilter.map((item, index) => (
    <div className="buy-cart-content" key={index}>
      <img className="buy-adress-photo" src={item.url} alt="icon" height={200} width={200} />
      <hr className='hr-buy-cart'></hr>
      <p>{item.item}</p>
      <p>{item.price}</p>
      <button className='buy-cart-button-minus'>-</button>
      <h5 className='buy-cart-h5'>{item.quantity}</h5>
      <button className='buy-cart-button-plus'>+</button><br></br>
      <button className='buy-cart-button-remove' > Remove</button>
      <button className='buy-cart-button-buy' onClick={() => Buy(index)}>Buy</button>
    </div>
  ))
  :
  <p className='alert-seller-cart'>Your cart is empty.</p>
}

    <h1 className='buy-sum-heading'>PRICE DETAILS</h1>     
       {show&& cartData&& allPrice&&
      <div className='buy-summary'>
       <p>Price:{allPrice}/-</p>
       <p>Delivery Charges:{deliveryCharges} /-</p>
       <p>TOTAL PAYABLE :{withDeliveryCharges}/-</p>
       <button className='buy-button-sum' onClick={()=>PlaceOrder()}>PLACE A ORDER</button>
      </div>}
      

      </main>
      <Footer />
    </>
  );
};

export default BuyCart;
