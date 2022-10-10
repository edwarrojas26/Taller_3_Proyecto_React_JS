import './register.css'
import svgImages from './Hotelia horizontal blanco.svg';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'

function Register() {

    const history=useNavigate();

    const [data,setData]=useState({_id:"",tipodoc:"",nombre:"",apellido:"",fnacimiento:"",genero:"",email:"",telefono:"",paisorigen:"",password:"",tipouser:"",img:""});
    
    const handleChange=({target})=>{
        //Cada vez que haya un cambio se va a guardar el valor en el estado data
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    const url="https://hoteliakuepa.herokuapp.com/users";

    const handleSubmit=async(e)=>{
            e.preventDefault();
            const response=await axios.post(url,data);//await espera hasta que se ejcute la petición
            //console.log(response);
            if (response.status === 201) {
                
                Swal.fire(
                    'Guardado!',
                    `El huesped <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido guardado exitosamente!`,
                    'success'
                )
                history.push("/");
                
            }else {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al registrar el huesped!',
                    'error'
                )
            }
        }
  return (
    <section>
        <div id="room">
            <div id="espacio">
                <img src={svgImages} className="img-register" alt=""/>
                <h1 className="descripcion">Eres mas que bienvenido</h1>
            </div>

            <div className="registrate">
                <form onSubmit={handleSubmit}>
                    <h2 className="descripcion-register">Registrate</h2>
                    <div>
                        <p className="tipo">Tipo de Documento</p>
                        <select name="tipodoc" id="documento" onChange={handleChange}>
                            <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                            <option value="Tarjeta de identidad"> Tarjeta de identidad </option>   
                            <option value="Cédula de extranjería">Cédula de extranjería</option> 
                        </select>
                        
                    </div>

                    <div className="derecha">
                        <p className="tipo">Numero de Documento</p>
                        <input type="number" name="_id" id="izquierda" value={data._id} onChange={handleChange}/>
                    </div>

                    <div className="nombres">
                        <p className="tipo">Nombres</p>
                        <input name="nombre" id="izquierda" value={data.nombre} onChange={handleChange}/>
                    </div>

                    <div className="derecha">
                        <p className="tipo">Apellidos</p>
                        <input name="apellido" id="izquierda" value={data.apellido} onChange={handleChange}/>
                    </div>

                    <div className="fecha">
                        <p className="tipo">Fecha Nacimiento</p>
                        <input type="date" name="fnacimiento" id="izquierda" value={data.fnacimiento} onChange={handleChange}/>
                    </div>

                    <div className="opciones">
                        <p className="tipo-opcion">Genero</p>
                        <input type="radio" name="genero" id="opciones-input" value={data.genero} onChange={handleChange}/><label>Mujer</label> 
                        <input type="radio" name="genero" id="opciones-input" value={data.genero} onChange={handleChange}/><label>Hombre</label>
                        <input type="radio" name="genero" id="opciones-input" value={data.genero} onChange={handleChange}/><label>Otro</label>
                    </div>
 
                    <div className="email-e">
                        <p className="tipo">Email</p>
                        <input type="email" name="email" id="izquierda" value={data.email} onChange={handleChange}/>
                    </div>
                    
                    <div className="derecha-telefono">
                        <p className="tipo">Telefono de Contacto</p>
                        <input type="number" name="telefono" id="izquierda" value={data.telefono} onChange={handleChange}/>
                    </div>

                    <div>
                        <p className="tipo">Pais de origen</p>
                        <select name="pais" id="documento" onChange={handleChange}>
                            <option> Colombia </option>
                            <option> Venezuela </option>
                            <option> Argentina </option>
                            <option> Bolivia </option>
                        </select>
                    </div>

                    <div className="derecha">
                        <p className="tipo">Foto</p>
                        <input type="file" name="img" id="archivo" value={data.img} onChange={handleChange}/>
                    </div>

                   

                    <div>
                        <p className="tipo">Contraseña</p>
                        <input type="password" name="password" id="documento" value={data.password} onChange={handleChange}/>
                    </div>

                    <div className="derecha">
                        <p className="tipo">Confirmar Contraseña</p>
                        <input type="password" name='password' id="izquierda"/>
                    </div>
                    
                     <div className="tipo">
                        <p className="tipo">Tipo de Usuario</p>
                        <input type="text" name="tipouser" id="archivo" value={data.tipouser} onChange={handleChange}/>
                    </div>
                    
                    <div className="rr">
                        <a href="terminos.html">Acepta terminos y condiciones</a>
                    </div>

                    <div className="boton">
                        <button className='boton1'>Guardar</button>
                       {/*<Link to="../Login" class="boton1">Ingresar</Link>*/}
                    </div>

                </form>
            </div>
        </div>
    </section>
  );
}

export default Register;
