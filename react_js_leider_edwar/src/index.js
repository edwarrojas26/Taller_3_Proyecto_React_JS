import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/Navbar.js";
import Foto from "./components/foto/Foto.js";
import Form from "./components/formulario/Formulario"
// import Banner from './components/banner/Banner';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar/>
    <section className="dashboard">
      <div className="info">
        <div className="bienvenido">
          <h1>Bienvenido, Angie Vargas</h1>
        </div>

        
        <div className="info">
          <Foto/>
          <Form/>
        </div>
      </div>
    </section>
  </React.StrictMode>
);
