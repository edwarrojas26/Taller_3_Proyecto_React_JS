import React from "react";
import Navbar from "../components/navbar/Navbar.js";
import Foto from "../components/foto/Foto.js";
import Form from "../components/formulario/Formulario";
// import Login from "../components/login/Login.js";
import "./index.css";

function Dashboard() {
  <React.StrictMode>
    
    <Navbar />
    <section className="dashboard">
      <div className="info">
        <div className="bienvenido">
          <h1>Bienvenido, Angie Vargas</h1>
        </div>

        <div className="info">
          <Foto
            titulo="Cambiar contraseña"
            img="https://seeklogo.com/images/M/millonarios-fc-logo-E6A1F289DD-seeklogo.com.png"
          />
          <Form />
        </div>
      </div>
    </section>
  </React.StrictMode>;
}

export default Dashboard;
