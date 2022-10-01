import React from "react";
import './register.css'
import svgImages from './Hotelia horizontal blanco.svg'

function Register() {
  return (
    <section>
        <div id="room">
            <div id="espacio">
                <img src={svgImages} className="img-register" alt=""/>
                <h1 className="descripcion">Eres mas que bienvenido</h1>
            </div>

            <div className="registrate">
                <form>
                    <h2 className="descripcion-register">Registrate</h2>
                    <div>
                        <p className="tipo">Tipo de Documento</p>
                        <select name="Escoga" id="documento"></select>

                    </div>

                    <div className="derecha">
                        <p className="tipo">Numero de Documento</p>
                        <input name="Escoga" id="izquierda"/>
                    </div>

                    <div className="nombres">
                        <p className="tipo">Nombres</p>
                        <input name="Escoga" id="izquierda"/>
                    </div>

                    <div className="derecha">
                        <p className="tipo">Apellidos</p>
                        <input name="Escoga" id="izquierda"/>
                    </div>

                    <div className="fecha">
                        <p className="tipo">Fecha Nacimiento</p>
                        <input type="date" name="Escoga" id="izquierda"/>
                    </div>

                    <div className="opciones">
                        <p className="tipo-opcion">Genero</p>
                        <input type="radio" name="Escoga" id="opciones-input"/><label>Mujer</label> 
                        <input type="radio" name="Escoga" id="opciones-input"/><label>Hombre</label>
                        <input type="radio" name="Escoga" id="opciones-input"/><label>Otro</label>
                    </div>
 
                     <div className="email-e">
                        <p className="tipo">Email</p>
                        <input type="email" name="Escoga" id="izquierda"/>
                    </div>
                    
                    <div className="derecha-telefono">
                        <p className="tipo">Telefono de Contacto</p>
                        <input type="number" name="Escoga" id="izquierda"/>
                    </div>

                    <div>
                        <p className="tipo">Pais de origen</p>
                        <select name="Escoga" id="documento"></select>

                    </div>

                    <div className="derecha">
                        <p className="tipo">Foto</p>
                        <input type="file" id="archivo"/>

                    </div>

                    <div>
                        <p className="tipo">Contraseña</p>
                        <input type="password" name="Escoga" id="documento"></input>
                    </div>

                    <div className="derecha">
                        <p className="tipo">Confirmar Contraseña</p>
                        <input type="password" id="izquierda"/>

                    </div>
                    
                    <div className="rr">
                        <a href="terminos.html">Acepta terminos y condiciones</a>
                    </div>

                    <div className="boton">
                       <a href="login.html"class="boton1">Ingresar</a> 
                    </div>

                </form>
            </div>
        </div>
    </section>
  );
}

export default Register;
