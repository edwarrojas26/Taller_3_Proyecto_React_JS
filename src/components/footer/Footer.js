import React from "react";
import './Footer.css'

function Footer() {
    return (
    <footer className="pie-pagina" >
        <div className="texto">
            <div className="parrafo">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores, necessitatibus impedit tempora nulla nemo?</p>
                <hr className="menu-hr" noshade=""/>
                <div className="sociales">
                    <div className="redes">
                        <i className="fa-brands fa-instagram"></i>     
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>      
                </div>
            </div>
            <hr className="menu-hr" noshade=""/>
            <div className="linea1">
                <div className="icons">
                    <div>
                        <i className="fa-solid fa-location-dot"></i><p id="direccionamiento">Avenida Carrera 8, #12A-42, Bogotá DC, Colombia</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-phone"></i><p id="direccionamiento">+57 601 4567899</p>
                    </div>
                </div>
            </div><hr className="menu-hr" noshade=""/>
            <div className="politicas">
                <div>
                    <p>Políticas de privacidad</p>
                </div>
                <div id="separador1">
                    <p>Políticas de privacidad</p>
                </div> 
            </div>
        </div>
    </footer>
    );
}
export default Footer;

