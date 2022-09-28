import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from '../components/banner/Banner';
import Descripcion from '../components/descripcion/Descripcion';
import Feature from '../components/feature/Feature';
import Nav from '../components/nav/Nav';
import Map from '../components/mapa/Map';
import Opiniones from '../components/opinions/Opinions';
import Footer from '../components/footer/Footer';
/*import Register from './components/register/Register'*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
              <Nav/>
              <Banner/>
              <Descripcion/>
              <Feature/>
              <Map/>
              <Opiniones/>
              <Footer/> 
              {/*<Register/>*/}
  </React.StrictMode>
);
