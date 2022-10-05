import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './pages/inicio.js'
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Dash from './pages/Dashboard.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Dash from './components/formulario/Formulario';
// import Registro from './components/register/Register';
import NotFound from './pages/NotFound.js'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Inicio/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Dash' element={<Dash/>}/>
      <Route path = '*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>

);
