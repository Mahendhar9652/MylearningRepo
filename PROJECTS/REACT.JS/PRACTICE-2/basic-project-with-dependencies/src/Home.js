import React from 'react';
import { connect } from 'react-redux';
import { InAction, DeAction } from './Actions';
import './Home.css';

const Home = ({ Local_Variable,InAction,DeAction  }) => {

console.log(Local_Variable);
  return (
    <center>
      <div className="parent">
        <h1>{Local_Variable}</h1>
        <button className="btn btn-primary" onClick={InAction}>
          Increment
        </button>
        <button className="btn btn-secondary" onClick={DeAction}>
          Decrement
        </button>
      </div>
    </center>
  );
};

const mapStateToProps = (state) => ({
  Local_Variable: state,
});

export default connect(mapStateToProps, { InAction, DeAction })(Home);


/*const Home = () => {
    const navigate = useNavigate();
    const [username,setUserName] =useState();
  
    const handleClick = () => {
      navigate('/data', {state:username});
    };


    
   




    return (
        <div>
            <input type='text' onChange={(e)=>setUserName(e.target.value)} value={username}/>
      <button onClick={handleClick}>Navigate to Target</button>      
        </div>
  
    );
  };

export default Home*/




/*
function outer(num1){
     
     console.log("num1  "+num1);
     function inner(num2){
      console.log(num2);
     console.log(num1+num2);
     }
    return inner
   }
 
 var res =outer(5)

res(10)

var fullname= [555,5550,55,66,88,99,77,44]
  var numbers =fullname.slice(0,5)
  console.log("slice:"+numbers);
  var number2 =fullname.splice(0,7)
  console.log("splice:"+number2);

  var users = ["mahi", "hari", "bharath", "naresh"];
  console.log("ex"+users.slice(users.indexOf('bharath'), users.indexOf('bharath')+1));
  
var users = ["mahi", "hari", "bharath", "naresh"];
var index = users.indexOf('bharath');
var filteredUsers = users.slice(0, index).concat(users.slice(index + 1));
console.log("f"+filteredUsers);
   var users = ["mahi", "hari", "bharath", "naresh"];

    users.splice(2,1,'hi')
    console.log(users)
    console.log(users.splice(2,1))


*/ 









/*import React, { useContext } from 'react';
import { Store } from './App';

const Home = () => {
  const [ data, setData ] = useContext(Store);

  return (
    <div>
      home
      <p>{data}</p>
      <button onClick={()=>setData(data+1)}>homeset</button>
    </div>
  );
};

export default Home;*/









/*import React, { useContext } from 'react';
import { MyContext } from './App';

const Home = () => {
  const value = useContext(MyContext);

  return (
    <div>
      home
      {value}
    </div>
  )
}

export default Home;*/
