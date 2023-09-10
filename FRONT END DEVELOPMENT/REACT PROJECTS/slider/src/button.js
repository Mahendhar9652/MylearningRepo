import React from 'react'

const button = () => {
    function alertpop(){
        alert("HELLO EVERONE")
        
    }

  return (
   <div>
    <button onClick={alertpop} >Change Color</button>
   </div>
  )
}

export default button