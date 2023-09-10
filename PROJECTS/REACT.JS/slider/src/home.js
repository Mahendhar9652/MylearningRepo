import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const home = () => {
  return (
    <div>
        home
        <Link to='/dashboard' className='link'>Dashboard</Link><br/>
        <Link to='/about' className='link'>About</Link><br/>

    </div>
  )
}

export default home