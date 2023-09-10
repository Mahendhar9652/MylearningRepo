import React, { useState } from 'react';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
const App = () => {
  const [images,setImages] =useState([image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11]);
  const [currentIndex ,setCurrentIndex ]=useState(0);
  console.log(currentIndex);
  function next(){
    if(currentIndex < images.length -1)
    setCurrentIndex(currentIndex+1)
    if(currentIndex ===10){
      alert("IMAGES OVER");
    }
  }
  function prev(){
    if(currentIndex >0)
    setCurrentIndex(currentIndex-1)
    if(currentIndex <1)
     alert("IMAGES OVER"); 
  }
  return (
    <>
    <h1>IMAGE SLIDER</h1>
    <div className='slider'>
      <button onClick={prev}>⏪</button> 
     <img className='image' src={images[currentIndex]} 
     id='output' 
     alt="image"/>  
      <button onClick={next}>⏩</button>
      </div>
          </>
  )
}

export default App
























