import { Link } from 'react-router-dom';
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
            <Link to="/login" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar Sesión</button></Link>

        </div>
    </nav>

    );
}
export default Nav;