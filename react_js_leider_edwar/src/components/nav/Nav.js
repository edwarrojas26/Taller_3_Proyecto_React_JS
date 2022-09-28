<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> bda8885b1238d20de2c56d0fb8cc5860e0f3541a
import React from "react";
import './nav.css'
import svgImage from './Hotelia horizontal blanco.svg'

function Nav() {
    return(
        <nav>
        <div className="logo">
            <img src={svgImage}/>
            <i className="fa-solid fa-bars hamb"></i>
        </div>
        <div className="menu">
            <a href="#slider">Inicio</a>
            <a href="#ubicacion">Ubícanos</a>
            <a href="#contenopi">Opiniones</a>
<<<<<<< HEAD
            <Link to="/login" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar Sesión</button></Link>

=======
            <a v="item"><button v="navbar-button"><i className="fa-solid fa-user"></i> Iniciar Sesión</button></a>
>>>>>>> bda8885b1238d20de2c56d0fb8cc5860e0f3541a
        </div>
    </nav>

    );
}
export default Nav;