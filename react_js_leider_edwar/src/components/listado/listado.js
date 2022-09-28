import React from "react";
import './listado.css'
import svgImages from './hotelia campana.svg'
import svgImage from './Hotelia horizontal blanco.svg'
import imagens from './sinfondo.jpg'
import room from './habitacion.jpeg'

function Listado() {
    return (
        <><section className="seccion-arriba">
            <div className="all">
                <div className="logo">
                    <img src={svgImage} className="destop" />
                    <img src={svgImages} className="mobile" />
                </div>

                <div className="perfil">
                    <div>
                        <img src={imagens} alt="" /></div>
                    <div className="angie">
                        <h3>Angie Vargas</h3></div>
                    <div className="gmail">
                        <h4>angie@gmail.com</h4></div>

                </div>
            </div>
            <div className="izquiera-all">
                <div className="izquierda">
                    <a href="listado.html" className="iconos"><i className="fa-solid fa-bed" id="opciones"></i>
                        <p>Habitaciones</p>
                    </a>
                    <a href="habitacion.html" className="iconos"><i className="fa-solid fa-bed" id="opciones"></i>
                        <p>Registar Habitaciones</p>
                    </a>
                    <a href="dashboard.html" className="iconos"><i className="fa-solid fa-pencil" id="opciones"></i>
                        <p>Editar Perfil</p>
                    </a>
                </div>

                <div className="sign-out">
                    <a href="index.html"><i className="fa-solid fa-arrow-right-from-bracket" id="menu"></i>
                        <p>Cerrar Sesion</p>
                    </a>
                </div>
            </div>
        </section>
            <section>
                <div>
                    <h1 className="rooms">Habitaciones</h1>
                </div>
                <div className="fondo">
                    <div className="fondo-1">
                        <p className="letra">Categoria</p>
                        <select aria-placeholder="Todas" className="opcion"></select>
                    </div>
                    <div className="fondo-2">
                        <p className="letra">Estado</p>
                        <select aria-placeholder="Todas" className="opcion1"></select>
                    </div>
                </div>
            </section><section>
                <div className="tarjeta">
                    <div id="pieza">
                        <p className="card-blue">Habitacion doble
                        </p><img src={room} />

                    </div>
                    <div className="precio">$128.000</div>
                    <div>
                        <p className="texto">Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel </p>
                    </div>
                    <div className="botones">
                        <button className="modificar">Modificar</button>
                        <button className="inactivar">Inactivar</button>
                    </div>
                </div>

                <div className="tarjeta-1">
                    <div id="pieza">
                        <p className="card-blue">Habitacion doble</p>
                        <img src={room} />
                    </div>
                    <div className="precio">$250.000</div>
                    <div>
                        <p className="texto">Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel </p>
                    </div>

                    <button className="modificar">Modificar</button>
                    <button className="inactivar">Inactivar</button>

                </div>

                <div className="tarjeta-2">
                    <div id="pieza">

                        <p className="card-blue">Habitacion doble
                            <p className="reservado">Reservado</p>
                        </p>
                        <img src={room} />

                    </div>
                    <div className="precio">$166.000</div>
                    <div>
                        <p className="texto">Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel </p>
                    </div>

                    <button className="modificar">Modificar</button>
                    <button className="inactivar">Inactivar</button>

                </div>

                <div className="tarjeta-3">
                    <div id="pieza">

                        <p className="card-blue">Habitacion doble
                            <p className="reservado">Reservado</p>
                        </p>
                        <img src={room} />

                    </div>
                    <div className="precio">$195.000</div>
                    <div>
                        <p className="texto">Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel </p>
                    </div>

                    <button className="modificar">Modificar</button>
                    <button className="inactivar">Inactivar</button>

                </div>

                <div className="tarjeta-4">
                    <div id="pieza">

                        <p className="card-blue">Habitacion doble
                        </p><img src={room} />

                    </div>
                    <div className="precio">$180.000</div>
                    <div>
                        <p className="texto">Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel </p>
                    </div>

                    <button className="modificar">Modificar</button>
                    <button className="inactivar">Inactivar</button>

                </div>


                <div className="tarjeta-5">
                    <div id="pieza">

                        <p className="card-blue">Habitacion doble
                        </p><img src={room} />

                    </div>
                    <div className="precio">$220.000</div>
                    <div>
                        <p className="texto">Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel </p>
                    </div>

                    <button className="modificar">Modificar</button>
                    <button className="inactivar">Inactivar</button>

                </div>


            </section></>
    );
}

export default Listado;
