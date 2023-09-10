import React from 'react';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from './home.js';
import Login from './login.js';
import Verify from './verify.js';
import PhoneDisplay from './phone-display.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/phone-display' element={<PhoneDisplay/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App