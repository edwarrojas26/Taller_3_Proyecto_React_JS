
import React from "react";
import './nav.css'
import svgImage from './Hotelia horizontal blanco.svg'
import {Link} from 'react-router-dom';
function Nav() {
    return(
        <nav>
        <div className="logo">
            <img src={svgImage}/>
            <i className="fa-solid fa-bars hamb"></i>
        </div>
        <div className="menu">
            <Link to="/">Inicio</Link>
            <Link to="/">Ubícanos</Link>
            <Link to="/">Opiniones</Link>
            <Link to="/Register" class="item"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar Sesión</button></Link>
            
        </div>
    </nav>

    );
}
export default Nav;