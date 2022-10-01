
import React from "react";
import './nav.css'
import svgImage from './Hotelia horizontal blanco.svg'
import {Link} from 'react-router-dom';
function Nav() {
    return(
        <nav className="nav-main">
        <div className="logoq">
            <img src={svgImage} alt="Imagen"/>
            <i className="fa-solid fa-bars hamb"></i>
        </div>
        <div className="menu">
            <a to="/">Inicio</a>
            <a href="#ubicacion">Ubícanos</a>
            <a href="#contenopi">Opiniones</a>
            <Link to="/Login" className="item"><button className="navbar-button"><i className="fa-solid fa-user"></i> Iniciar Sesión</button></Link>
            
        </div>
    </nav>

    );
}
export default Nav;