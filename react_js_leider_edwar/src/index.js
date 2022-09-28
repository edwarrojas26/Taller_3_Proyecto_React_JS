import React from 'react';
import ReactDOM from 'react-dom/client';
/*import Banner from './components/banner/Banner';*/
import Navbar from './components/navbar/Navbar.js'
import Foto from './components/foto/Foto.js'
import Dash from './components/dashboard/Dashboard.js'

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Foto/>
    <Dash/>
  </React.StrictMode>
);


