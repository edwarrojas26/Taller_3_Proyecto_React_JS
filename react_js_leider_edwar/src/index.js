import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Index'
import Register from './pages/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/Register" element={<Register />}/>
        </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
