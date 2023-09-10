import React from 'react';
import {Link} from 'react-router-dom';
const home1 = () => {
  return (
    <div>home1
        <Link to ='/dashboard'>Dashboard</Link>
        <Link to ='/about'>About</Link>
    </div>
  )
}

export default home1