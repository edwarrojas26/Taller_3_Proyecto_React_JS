import "./formulario.css";
function Form() {
  return (
    <form>
    <div className="columnas">
        <div className="col-1">
            <div>
                <label for="tipo">Tipo de documento</label>
                <input type="text" name="nombre" value="Cedula de ciudadania" />
            </div>
            <div>
                <label for="fecha">Fecha de nacimiento</label>
                <input type="date" name="fecha" value="1976-08-10" />
            </div>
            <div>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" value="Angie Camila" />
            </div>
            <div>
                <label for="genero">Género</label>
                <div id="genero">
                    <ul>
                        <li><input type="radio" name="genero" id="mujer" /><label for="mujer">Mujer</label>
                        </li>
                        <li><input type="radio" name="genero" id="hombre" /><label for="hombre">Hombre</label>
                        </li>
                        <li><input type="radio" name="genero" id="otro" /><label for="otro">Otro</label></li>
                    </ul>
                </div>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" placeholder="e-mail" value="Angievargas2@gmail.com" />
            </div>

            <div className="botones">
                <button type="submit">Actualizar</button>
            </div>

            <div className="pass">
                <div>
                    <label>contraseña</label>
                    <input type="password" />
                </div>
            </div>

            <div className="botones">
                <button type="submit">Cambiar</button>
            </div>

        </div>
        <div className="col-1">
            <div>
                <label for="doc">Número de documento</label>
                <input type="number" name="doc" id="doc" value="1025417456" />
            </div>
            <div>
                <label for="apellido">Apellido</label>
                <input type="text" name="apellido" id="apellido" value="Vargas Pinzon" />
            </div>
            <div>
                <label for="pais">País de origen</label>
                <input type="text" name="pais" id="pais" value="Colombia" />
            </div>
            <div>
                <label for="telefono">Telefono</label>
                <input type="number" name="telefono" id="telefono" value="3135207460" />
            </div>


            <div className="pass2">
                <div>
                    <label>Confirmar contraseña</label>
                    <input type="password" />
                </div>
            </div>

        </div>
    </div>
</form>
  );
}

export default Form;