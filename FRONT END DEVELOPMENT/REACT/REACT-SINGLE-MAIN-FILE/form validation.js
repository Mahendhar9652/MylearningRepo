import React ,{useState} from 'react';


const App =()=>{
const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
})
const {username,email,password,confirmPassword}=data;
const changeHandler =e=>{
    setData({...data,[e.target.name]:e.target.value})
}
const sibmitHandler =e =>{
    e.preventDefault();
    if(username.length <=5){
        alert("username must be at least 5 characters");
    }
    else if(password !== confirmPassword){
        alert("passwords are not matching");
    }
    else{
        console.log(data)
        document.write(data.username+ " signup" )
    
    }
}
    return (
      <div>
        <center>
            <form onSubmit={sibmitHandler}>
                <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
                <input type ="email"  name="email" value={email} onChange={changeHandler}/><br/>
                <input type ="password"  name="password" value={password} onChange={changeHandler}/><br/>
                <input type ="password"  name="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/>
                {password !== confirmPassword <p>passwords not matching</p>:null}
                <input type="submit" name="submit"/>
            </form>
        </center>
        
      </div>
    )
    }
  
  export default App