import React from "react";
import Navbar from "../components/navbar/Navbar.js";
import Foto from "../components/foto/Foto.js";
import Form from "../components/formulario/Formulario";
import "./Dashboard_pages.css";
// import imagenlogin from "./wallhaven.png";

function Dashboard() {
  return (
    <body className="body_dash">
      <Navbar 
      nombre="Edwar Rojas"
      correo="lsgalindo14@misena.edu.co"/>
      <section className="dashboard">
        <div className="bienvenido">
          <h1>Bienvenido, Mark Zuckerberg</h1>
        </div>

        <div className="info">
          <Foto 
          titulo="Cambiar contraseña"
          img="https://marketing4ecommerce.net/wp-content/uploads/2019/09/nueva-portada-enero-16.jpg" />
  
          <Form />
        </div>
      </section>
    </body>
  );
}

export default Dashboard;
