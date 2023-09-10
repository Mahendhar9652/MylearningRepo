import React ,{useState} from 'react';
import axios from 'axios';

const App =()=>{
const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
})
const {username,email,password,confirmPassword}=data;
const changeHandler =e=>{
    setData({...data,[e.target.name]:[e.target.value]})
}
const sibmitHandler =e =>{
    e.preventDefault()
    axios.post('https://mahi-42a51-default-rtdb.firebaseio.com/register.json',
    data).then(()=>alert("submit succesfully"))
    
}
    return (
      <div>
        <center>
            <form autoComplete ="off" onSubmit={sibmitHandler}>
                <input type="text" placeholder='username' name="username" value={username} onChange={changeHandler}/><br/>
                <input type ="email" placeholder='email' name="email" value={email} onChange={changeHandler}/><br/>
                <input type ="password" placeholder='password'  name="password" value={password} onChange={changeHandler}/><br/>
                <input type ="password" placeholder='confirmPassword' name="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/>
                <input type="submit" name="submit"/>
            </form>
        </center>
        
      </div>
    )
  }
  
  export default App