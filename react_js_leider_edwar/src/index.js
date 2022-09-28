import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Banner from './components/banner/Banner';
import Descripcion from './components/descripcion/Descripcion';
import Feature from './components/feature/Feature';
import Nav from './components/nav/Nav';
import Map from './components/mapa/Map';
import Opiniones from './components/opinions/Opinions';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Banner/>
    <Descripcion/>
    <Feature/>
    <Map/>
    <Opiniones/>
  </React.StrictMode>
);
