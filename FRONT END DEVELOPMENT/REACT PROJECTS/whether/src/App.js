
import React , {useState} from "react";

function App() {




const [city,setCity]=useState("");

const changeHandler =e =>{
  setCity(e.target.value);
}
const submitHandler =e=>{
  e.preventDefault();
  fetch("https://api.openweathermap.org/data/2.5/weather?q={city}&appid=d885aa1d783fd13a55050afeef620fcb").then(
    response=> response.json()
    ).then(data =>console.log(data.main.temp)) 

}
  return (
    <div>
      <center>
        <div className="card" >
          <div className="card-body">
            <h4 className="card-title">wheather App</h4>
            <form onSubmit={submitHandler} >
              <input type ="text" name="city" value={city} onChange={changeHandler} /><br/><br/>
              <input type="submit" value="Get Temperature"/>
            </form>

          </div>
        </div>
        </center>
    </div>
  );
}

export default App;
