
import React from "react";
import './nav.css'
import svgImage from './Hotelia horizontal blanco.svg'
import {Link} from 'react-router-dom';
function Nav() {
    return(
<nav>
        <div className="logo">
            <img src={svgImage}/>
            <label for="menu"><i className="fa-solid fa-bars"></i></label>
        </div>
        <input className="menudesplegable" type="checkbox" id="menu"/>
        <div className="menu">
            <a href="index.html" className="item">Inicio</a>
            <a href="ubicanos.html" className="item">Ubícanos</a>
            <a href="opiniones.html" className="item">Opiniones</a>
            <hr className="menu-hr"/>
            <Link to="/Login" className="item-butt"><button className="navbar-button"><i className="fa-solid fa-user"></i> Iniciar Sesión</button></Link>
        </div>
    </nav>   

    );
}
export default Nav;