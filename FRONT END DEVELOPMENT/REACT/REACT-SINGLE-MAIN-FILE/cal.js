import React ,{useState} from 'react'



 const App = () => {
  
    const [input,setInput] =useState("");
   
    const handler =e =>{
        setInput(e.target.value);
    }
    return (
    <div>
        <center>
        <input type="text" value ={input} name="input" onChange={handler}/>
        <br/>
        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button><br/>

        
        <button onClick={()=>setInput(input+'6')}>1</button>
        <button onClick={()=>setInput(input+'7')}>1</button>
        <button onClick={()=>setInput(input+'8')}>1</button>
        <button onClick={()=>setInput(input+'9')}>1</button>
        <button onClick={()=>setInput(input+'0')}>1</button><br/>

        
        <button onClick={()=>setInput(input+'+')}>+</button>
        <button onClick={()=>setInput(input+'-')}>-</button>
        <button onClick={()=>setInput(input+'*')}>*</button>
        <button onClick={()=>setInput(input+'/')}>/</button>
        <button onClick={()=>setInput(input+'=')}>=</button>
        <button onClick={()=>setInput('')}>clr</button><br/>
        <button>Result</button>


        </center>        
  </div>
  )
}
export default App