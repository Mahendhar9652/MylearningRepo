import React from 'react'
import img1 from './a.png';
import img2 from './b.png';
import img3 from './c.png';
import img4 from './d.png';
import img5 from './e.png';
import img6 from './f.png';

const images = () => {
    let data =[{
        id:1,
        imgSrc:img1,
      },
      {
        id:1,
        imgSrc:img2,
      },
      {
        id:1,
        imgSrc:img3,
      },
      {
        id:1,
        imgSrc:img4,
      },
      {
        id:1,
        imgSrc:img5,
      },
      {
        id:1,
        imgSrc:img6,
      }
      ]
  return (
    <div>
        {data.map((item,index)=>{
            return(
                <div
                    key={index}/>
                    <img src={item.imgSrc}/>
                    </div>
            )
        })}
    </div>
  )
}

export default images