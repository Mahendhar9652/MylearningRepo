import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home.js';
import Dashboard from './Dashboard.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:name" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
