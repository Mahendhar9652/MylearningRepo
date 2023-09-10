import React, { useContext} from 'react';
import './HomeContent.css';
import { useNavigate} from "react-router-dom";
import { store } from './App';
import axios from 'axios';



const HomeContent = (props) => {
  const navigate = useNavigate();
  const {currentUser,profile,content} =useContext(store)
 




   const AddToCart=(addToCartDataIndex)=>{
    const currentEmail = currentUser.email;
     const filteredData = content.filter((items,index)=>addToCartDataIndex===index).map(item=>({...item ,name:currentUser.displayName,email:currentEmail}))
     const obj = filteredData.reduce((acc, curr) => Object.assign(acc, curr), {});
    const encodedEmail = currentEmail.replace(".", ",").replace("@", "+");
     axios.post('https://shopify-c6f65-default-rtdb.firebaseio.com/cart.json',obj).then(()=>alert("Added to cart"))         



   }
   function Buy(indexOfBuy){
    const filteredData =content.filter((items,index)=>
    indexOfBuy===index)   
    
 
  navigate('/buy',{state:filteredData})
    }
 
  return (
    <div className='home-content'>
      {props.searchfilter.map((item, index) => (
        <div className='content-card' key={index}>
          <img src={item.url} alt={item.item} height={200} width={200} className='content-img' />
          <p className='content-item-name'>{item.item}</p>
          <i className="fas fa-user cols  content-user"></i>
         <p className='content-name'>{item.name}</p>
          <p className='content-price'>Rs: {item.price}</p>
          <p>{item.phone}</p>
          <button className='content-addButton'  onClick={()=>AddToCart(index)} >Add to cart</button>
          <button className='content-buyButton' onClick={()=>Buy(index)} >Buy</button>
      
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
