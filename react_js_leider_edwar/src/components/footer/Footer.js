import React from "react";
import './footer.css'

function Footer() {
    return (
    <footer class="pie-pagina" >
        <div class="texto">
            <div class="parrafo">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores, necessitatibus impedit tempora nulla nemo?</p>
                <hr class="menu-hr" noshade=""/>
                <div class="sociales">
                    <div class="redes">
                        <i class="fa-brands fa-instagram"></i>     
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>      
                </div>
            </div>
            <hr class="menu-hr" noshade=""/>
            <div class="linea1">
                <div class="icons">
                    <div>
                        <i class="fa-solid fa-location-dot"></i><p id="direccionamiento">Avenida Carrera 8, #12A-42, Bogotá DC, Colombia</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone"></i><p id="direccionamiento">+57 601 4567899</p>
                    </div>
                </div>
            </div><hr class="menu-hr" noshade=""/>
            <div class="politicas">
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