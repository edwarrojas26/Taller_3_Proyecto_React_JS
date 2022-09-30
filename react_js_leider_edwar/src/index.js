import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './pages/inicio.js'
import Register from './pages/Register.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
  </BrowserRouter>
);
