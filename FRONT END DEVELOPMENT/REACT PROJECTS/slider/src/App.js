
import React from 'react';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from './home1';
import Dashboard from './dasboarb2';
import About from './about2'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
































/*import React,{useEffect,useState} from 'react'

const App = () => {
  const [data ,setData] =useState([]);
  useEffect(()=>{
    fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json")
    .then(response => response.json()).then(json =>setData(json.items))
  },[])
  return (
    <div>
      <center>
        {data.map((item)=><p key={item.id}>{item.name}</p>)}

      </center>
      </div>
  )
}

export default App



/*import React from 'react';
import Hoc from './hoc.js'

const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

export default Hoc(App)


/*import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home.js';
import Dashboard from './dashboard.js';
import About from './about.js';
import './index.css';

const App = () => {
  return (
    <div>
      <center>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}

export default App



















/*import React ,{useState} from 'react';

const App = () => {
  const [name ,setName] =useState("");
  return (
    <div>
      Name:{name}<br/>
      <input type="text" name="name" onChange={(e)=>setName(e.target.value)} ></input>
      
    </div>
  )
}

export default App








import React from 'react';

const App = () => {
  return (
    <div>
      <center>
        <button onClick={()=>alert("BUTTON CLICKED")} >CLICK</button>
      </center>

      
    </div>
  )
}

export default App*/






/*import React, { useState } from 'react';

const App = () => {
var [data,setData]=useState({
  username:'',
  password:''
})

const changeHandler=(e)=>{
  setData({...data,[e.target.name]:e.target.value})

}
const submitHandler=(e)=>{
  e.preventDefault();
  if(data.password.length <5){
    alert("password must have more than 5 characters");


  }else{
  console.log(data);
}

}

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <label style={{'color':"blue"}}>Username<input type="text" name="username" onChange={changeHandler}></input></label><br/>
        <label >Password<input type="text" name="password" onChange={changeHandler} ></input></label><br/>
        <input type="submit" value="login" ></input><br/>

        </form>

      </center>
      
    </div>
  )
}

export default App




import React from 'react'

const App = () => {
  var friends =["mahi","hari","rahul","bharath","vikas","naresh","harish"]
  return (
    <div>
      <center>
        <h1>MY friends names</h1>
        <ul>
          {friends.map((list)=><li>{list}</li>)}
          </ul>
      </center>
    </div>
  )
}

export default App

import React from 'react'

const App = () => {
function Made(){
  return <p>Goal</p>
}
function Missed(){
  return <p>missed</p>
}

function Goal(a){
  var  isGoal =a.isGoal;
  if(isGoal){
    return <Made/>
  }else{
     return <Missed />
  }
}



  return (
    <div> <Goal isGoal={false}/> </div>
  )
}

export default App

import React from 'react'

const App = () => {
  const logged =true;
 return (
  <div>
    <h1>Welcome {logged &&"mahi"}</h1>
  </div>
 )

  if(logged){
    return <h1>welcome mahi</h1>
  }else{
    return <h1>Welcome Guest</h1>
  }

  
}

export default App




/*import React from 'react'

const App = () => {
function foot(a){
  alert(a)
}

  return (
    <div>
      <button onClick={()=>foot("goal")}>KICK</button>
    </div>
  )
}

export default App



const App = () => {
  return (
    <div>
      < Button />
      
    </div>
  )
}

export default App





const App =()=>{
  return (
    <div>
      <Greeting name={"harish"} />

    </div>
  )
}
export default App

export class App extends Component{
  state={
    name:"mahi",
  }
  render(){
    return (
      <div>
        <h1>
          hello {this.state.name}
        <br></br>
        <button onClick={()=>this.setState({name:prompt('enter an')})}>Change name</button>
        </h1>

      </div>

    )
  }
}
*/
