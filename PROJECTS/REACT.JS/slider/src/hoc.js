import React from 'react';

const hoc = (Component) => {
  return (    
 class  extends React.Component {
    state ={
        auth:true
    }
      render() {
        return (
          <div>

           {this.state.auth ? <Component /> :<h1>please login</h1>}

          </div>
        )
      }
    }
    
    
  )
}

export default hoc