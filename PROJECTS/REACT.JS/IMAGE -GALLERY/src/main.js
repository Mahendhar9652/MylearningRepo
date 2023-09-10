import { useState } from 'react';
import {images} from './Image.js';
import './main.css';

const Main = () => {
  const [search,setSearch]=useState('');
  console.log(images);
    
  console.log(search);
  return (
    <>
    <div className='container'>
      <div className='headings'>
        <h1>IMAGE GALLERY</h1>
      </div><br></br>
      <div className='input-group'>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type='search' placeholder='Enter Actors Or Actress Name..' valeu={search} onChange={(e)=>setSearch(e.target.value)} />
      </div><hr className='hr'></hr><br></br>
       {
        images.filter((filtered)=>filtered.name.includes(search.toLowerCase())).map((images,index)=>
        <div className='images-buttons'key={index}>
          <img src={images.src} width='180' height='180'alt='actorsimage'/><br/>
            <p className='p'>{images.name.charAt(0).toUpperCase()+ images.name.slice(1).toLowerCase()}</p><br/>
          <a href={images.src} download={images.name}>Download</a>
        </div>
        )
       } 
    </div>
   
    </>  )
}

export default Main