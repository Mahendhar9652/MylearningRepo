import React, { useState } from 'react';
import axios from 'axios';
import './PostingData.css';

const Posting = () => {
  const [data, setData] = useState({
    movieName: '',
    songName: '',
    songAudio:null,
    image:null
  });
  const { movieName,songName ,songAudio ,image} = data;

  /*const changeHandler = (e) => {
    setData({ ...data, [e.target.name]:[e.target.value]});
  };
  nst fileHandler=(e)=>{
    setData({...data,[e.target.name]:[e.target.files]})
  }
  

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post('https://form-1f7af-default-rtdb.firebaseio.com/register.json', data)
      .then(() => alert("Submitted successfully"));
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Please Login</legend>
          <div className="input-group">
            <label htmlFor="movieName">Movie Name:</label>
            <input type="text" value={movieName} onChange={changeHandler} name="moviename" id="username"/>
          </div>
          <div className="input-group">
            <label htmlFor="Song">Song Name:</label>
            <input type="text" value={songName} name="songname" onChange={changeHandler} id="password"/>
  </div>
          <div className="input-group">
            <label htmlFor="audio">Audio File:</label>
            <input type="file" accept="audio/*"value={songAudio} name="audio" onChange={fileHandler} id="password"/>
          </div>
          
          <div className="input-group">
            <label htmlFor="image">Image File:</label>
            <input type="file" accept="image/*"value={image} name="image" onChange={fileHandler} id="password"/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form><br></br>
    </div>
  );
};

export default Posting;








/*import React, { useState } from 'react';
import axios from 'axios';
import './PostingData.css';

const Posting = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(!username||!password){
      alert("Please Enter Details")
      return;
    }
  
    console.log(data);
    axios.post('https://form-1f7af-default-rtdb.firebaseio.com/register.json', data)
      .then(() => alert("Submitted successfully"));
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Please Login</legend>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="email" value={username} onChange={changeHandler} name="username" id="username"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} name="password" onChange={changeHandler} id="password"/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form><br></br>
    </div>
  );
};

export default Posting;*/
