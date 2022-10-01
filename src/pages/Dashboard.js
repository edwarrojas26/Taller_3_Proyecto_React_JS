import React from "react";
import Navbar from "../components/navbar/Navbar.js";
import Foto from "../components/foto/Foto.js";
import Form from "../components/formulario/Formulario";
import "./index.css";

function Dashboard() {
  return (
    <><Navbar /><section className="dashboard">
      <div className="info">
        <div className="bienvenido">
          <h1>Bienvenido, Angie Vargas</h1>
        </div>

        <div className="info">
          <Foto />
          {/* // titulo="Cambiar contraseña"
    // img="https://seeklogo.com/images/M/millonarios-fc-logo-E6A1F289DD-seeklogo.com.png" */}
          <Form />
        </div>
      </div>
    </section></>
  );
}

export default Dashboard;
