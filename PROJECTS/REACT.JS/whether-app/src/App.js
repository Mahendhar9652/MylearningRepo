/*import React, {useState } from 'react';
import './App.css';


const App = () => {
  const [whether,setWhether]=useState('');
  const [city ,setCity]=useState('');
 
  const getWhether=(e)=>{
    if(e.key =="Enter"){
      fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=62d18db2310946e26c09add006fda08a').then(response => response.json()).then(data =>{
        setWhether(data)
        setCity("")
        console.log(whether);
      })

    }
    
  }

   




  return (
    <>
    <div className='container'>
      <h1 className='h12'>Whether App</h1>
      <hr></hr>
      <div className='search'>
      <input type='search'  className='input' value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter Your city...' onKeyPress={getWhether}/>
      <div className='info'>
        <h3>{whether.name}</h3>
      
        


      </div>

      </div>

    </div>
  

      
    </>
  )
}

export default App*/
import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&appid=62d18db2310946e26c09add006fda08a'
        
      );
      const data = await result.json();
      setWeatherData(data);
    };
    fetchData();
  }, [city]);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => setCity(city)}>Search</button>
      <h1>Weather in {city}</h1>
      <p>Temperature: {weatherData.name && weatherData.main.temp}</p>
      <p>Humidity: {weatherData.main && weatherData.main.humidity}</p>
    </div>
  );
};

export default WeatherApp;


