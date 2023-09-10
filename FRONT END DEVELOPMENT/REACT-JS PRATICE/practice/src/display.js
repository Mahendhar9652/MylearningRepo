import React ,{useState} from 'react';

const display = () => {
  const [color, setColor] = useState("red");

  const handler=(e)=>{
    setData(e.target.value);
    console.log(color);

  }


  return (
    <div>
      Name:<input type="text"  onChange={handler}/>
    </div>
  )
}

export default display

























/*import React from 'react';


const display = () => {
  var data =[
    {"city":"Kolhapur", "state":"Maharashtra"},
    {"city":"Port Blair", "state":"Andaman & Nicobar Islands"},
    {"city":"Adilabad", "state":"Andhra Pradesh"},
    {"city":"Adoni", "state":"Andhra Pradesh"},
    {"city":"Amadalavalasa", "state":"Andhra Pradesh"},
    {"city":"Amalapuram", "state":"Andhra Pradesh"},
    {"city":"Anakapalle", "state":"Andhra Pradesh"},
    {"city":"Anantapur", "state":"Andhra Pradesh"},
    {"city":"Badepalle", "state":"Andhra Pradesh"},
    {"city":"Banganapalle", "state":"Andhra Pradesh"},
    {"city":"Bapatla", "state":"Andhra Pradesh"},
    {"city":"Bellampalle", "state":"Andhra Pradesh"},
    {"city":"Bethamcherla", "state":"Andhra Pradesh"},
    {"city":"Bhadrachalam", "state":"Andhra Pradesh"},
    {"city":"Bhainsa", "state":"Andhra Pradesh"},
    {"city":"Bheemunipatnam", "state":"Andhra Pradesh"},
    {"city":"Bhimavaram", "state":"Andhra Pradesh"},
    {"city":"Bhongir", "state":"Andhra Pradesh"},
    {"city":"Bobbili", "state":"Andhra Pradesh"},
    {"city":"Bodhan", "state":"Andhra Pradesh"},
    {"city":"Chilakaluripet", "state":"Andhra Pradesh"},
    {"city":"Chirala", "state":"Andhra Pradesh"},
    {"city":"Chittoor", "state":"Andhra Pradesh"}
  ]
  

  return (
    <div>
      {data.map(data =><ul><li>{data.city}</li><li>{data.state}</li></ul>)}
    </div>
  )
}

export default display






















/*import React from 'react';

const greeting = () => {
    const date = new Date().getHours();
    let greeting ="";

    if(date <12){
       greeting ='Good Monring';
    }else if(date <18){
        greeting ="Good Afternoon";

    }else if(date<20){
        greeting ="Good Evening";

    }else{
        greeting ="Good Night";
    }
   




  return (
    <div>
        <h1>Welcome GentleMan</h1>
      <textArea>{greeting}</textArea>
    </div>
  )
}

export default greeting;*/