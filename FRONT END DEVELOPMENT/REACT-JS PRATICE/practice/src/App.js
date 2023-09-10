import React from 'react';
import Display from './display.js';

const App = () => {
  const auth =true;

  return (
    <div>
      {auth ? <Display /> :<h1>Please Login To See List</h1>}
    </div>
  )
}

export default App
