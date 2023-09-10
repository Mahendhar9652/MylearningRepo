import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Data from './Data';

const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/data' element={<Data />} />
        </Routes>
  </BrowserRouter>
  



     
    </div>
  )
}

export default App

























/*import React, { createContext, useState } from 'react';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Dashboard from './Dashboard';
import Home from './Home';
import Data from './Data';

export const Store = createContext();

const App = () => {
  const [data, setData] = useState(0);

  return (
    <div>
    {/*  <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/data' element={<Data />} />
        </Routes>
  </BrowserRouter>*
      <Store.Provider value={[ data, setData ]}>
        <Home />
        <Data/>
      </Store.Provider>
      <button onClick={()=>setData(data+1)}>set</button>
    </div>
  );
};

export default App;*/
