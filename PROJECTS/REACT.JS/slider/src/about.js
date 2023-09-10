import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const about = () => {
  return (
    <div>
      <center>
      about
         <Link to='/dashboard' className='link'>Dashboard</Link> <br/>
        <Link to='/' className='link'>Home back</Link><br/>
   
      </center>
       </div>
  )
}

export default about