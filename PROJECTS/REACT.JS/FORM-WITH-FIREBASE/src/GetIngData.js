
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GetingData.css';

const GetIngData = () => {
  const [data, setData] = useState([]);
  const [showResult ,setShowResult]=useState(false)

  useEffect(() => {
    const LoadData = async () => {
      const response = await axios.get('https://form-1f7af-default-rtdb.firebaseio.com/register.json');
      const keysOfObject = Object.keys(response.data);
      const details = keysOfObject.map(key => response.data[key]);
      setData(details);
      console.log(details);
    };
    LoadData();
  }, []);

  function handleButtonClick() {
    setShowResult(!showResult)
  }

  return (
    <div className="container">
      <center>
        <button className="get-data-button" onClick={handleButtonClick}>Get Data</button>
      </center>
      {showResult && (
        <div className="data-wrapper">
          {data.map((d, index) => (
            <div key={index} className="data-container">
              <p className="data-password">Password: {d.username}</p>
              <p className="data-username">Username: {d.password}</p>
              {/*<img src={d.image} width='100' height='100' alt='ssss' />
              <audio controls className='audio'>
               <source src={d.audio} type="audio/ogg"/> 
          </audio>*/}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetIngData;














