import React from "react";
<<<<<<< HEAD
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
=======
import './opinions.css'

function Opiniones() {
    return (
        <section id="contenopi">
            <div id="titulo"><h1>Nuestros usuarios dicen...</h1></div>
            <div className="all">
                <div id="opinion" >
                    <div class="nombre">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfBdBWeo_usOiHgXZ2Ts7O4qPUfmQGntb6yR-OVklfZNQoeuOe9t1onhCz1KG5fOMVZI&usqp=CAU"/>
                            <h5>Diego rodriguez</h5>
                            <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                    </div>
                    <div className="descripcion">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
                <div id="opinion1">
                    <div className="nombre1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGzQ-1v8V_Du6Q3pFow6SVSjxlLaXOebtlw&usqp=CAU"/>
                            <h5>Diana Garcìa</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i v="fas fa-star"></i>
                            </div>
                    </div>
                    <div className="descripcion1">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
                <div id="opinion">
                    <div className="nombre">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WfPeH24odZ7izx8LdiqMRgnDnvRsteI-QHfQkzl9ye2bJtGDDRsdnQequg5Q5Rr7UhA&usqp=CAU"/>
                            <h5>Diego rodriguez</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                    </div>
                    <div className="descripcion">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
            </div>
    </section >

    );
}
export default Opiniones;
>>>>>>> bda8885b1238d20de2c56d0fb8cc5860e0f3541a
