
import React  from 'react'
import {useLocation}from 'react-router-dom'
const Data = () => {
    const location = useLocation();
    const data = location.state;
  
    return (
      <div>
        <h1>Target Component</h1>
        <p>Data: {JSON.stringify(data)}</p>
      </div>
    );
  };

export default Data















/*import React, { useContext } from 'react';
import { Store } from './App';

const Data = () => {
  const [ data, setData] = useContext(Store);

  return (
    <div>
      data
      <p>{data}</p>
      <button onClick={()=>setData(data+1)}>dataset</button>
   
    </div>
  );
};

export default Data;*/
