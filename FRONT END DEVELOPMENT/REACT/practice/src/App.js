import React ,{useState} from'react';
import data from './city.json';

function App() {
  const [search,setSearch]=useState("");
  return (
    <div>
  <center>  
  <h4>Enter You City</h4><br/>
  <input type="text"
  value={search}
  onChange={(e)=> setSearch(e.target.value)}
    /><br/>
   
    {data.filter(city=>city.name.includes(search)).map(city=>(
      <div style={{"border":"1px solid black","padding":"10px","margin":"10px"}}>
      {city.state}
      </div>
    ))}
  </center>
    </div>
  );
}

export default App;
