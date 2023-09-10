import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const dashboard = () => {
  return (
    <div>
      <center>
      dashboard
        <Link to='/about' className='link'>About</Link> <br/>
        <Link to='/' className='link'>Home back</Link> <br/>
  </center>  
  </div>
  )
}

export default dashboard