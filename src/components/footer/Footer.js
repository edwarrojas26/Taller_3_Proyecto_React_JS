import React from "react";
import './Footer.css'

function Footer() {
    return (
        <div class="footer-section">
        <section>
            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean
                auctor vel diam dictum
            </p>

            <hr class="split-lines"/>

            <div class="icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </section>
        <section>
            <div class="footer-direction">
                <i class="fa-solid fa-location-dot"></i>
                <span>Avenida Carrera 8, #12A-42, Bogotá DC, Colombia</span>
            </div>
            <div class="footer-cellphone">
                <i class="fa-solid fa-phone"></i>
                <span> +57 601 4567899</span>
            </div>
            <hr class="split-lines"/>
        </section>
        <section>
            <div class="footer-policies">
                <p>Politicas de privacidad</p><br></br>
                <p>Politicas de privacidad</p>
            </div>
            <hr class="split-lines"/>
            <div class="icons_mobile">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </section>
    </div>
    );
}
export default Footer;

