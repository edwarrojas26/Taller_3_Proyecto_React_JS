import './updateUser.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import svgImages from './Hotelia horizontal blanco.svg';


function ActualizarU(){

    const url="https://hoteliakuepa.herokuapp.com/users";
    
  /*1. Función asíncrona para realizar la petición*/ 
    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado y poderla usar en un componente */
    const [list,setList]=useState([]);

    /*4. agregamos otra constante al useState para actualizar el listado después de eliminar */
    const [upList,setUplist]=useState([false]);

    /*5. agregamos otra constante al useState para actualizar el estado del modal */
    const [show,setShow]=useState(false);

    const handleClose=()=>{setShow(false);}
    const handleOpen=()=>{setShow(true);}

    /*6. Estado para obtener los datos de cada registro a editar*/
    const [dataModal, setDataModal] = useState({})
    

    const handleChangeModal=({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}/${dataModal.id}`,dataModal);
        //console.log(response);  
        if(response.status===200){
            Swal.fire(
                'Cambio Guardado!',
                `El estudiante <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido actualizado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }
        else{
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el estudiante!',
                'error'
            )
        }
    }
    /*2. useEffect para ejecutar funciones desde el inicio del renderizado*/ 
    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    },[upList])//Se actualiza el listado cada vez que cambie el estado up List


    //console.log(list);
  return (
    <section>
        <div id="roomUPDATE">
            <div id="espacioUPDATE">
                <img src={svgImages} className="img-registerUPDATE" alt=""/>
                <h1 className="descripcion">Eres mas que bienvenido</h1>
            </div>

            <div className="registrateUPDATE">
                <form onSubmit={handleSubmit}>
                    <h2 className="descripcion-registerUPDATE">Registrate</h2>
                    <div>
                        <p className="tipoUPDATE">Tipo de Documento</p>
                        <select name="tipodoc" id="documentoUPDATE" onChange={handleChangeModal}>
                            <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                            <option value="Tarjeta de identidad"> Tarjeta de identidad </option>   
                            <option value="Cédula de extranjería">Cédula de extranjería</option> 
                        </select>
                        
                    </div>

                    <div className="derechaUPDATE">
                        <p className="tipoUPDATE">Numero de Documento</p>
                        <input type="number" name="_id" id="izquierdaUPDATE" value={dataModal._id} onChange={handleChangeModal}/>
                    </div>

                    <div className="nombresUPDATE">
                        <p className="tipoUPDATE">Nombres</p>
                        <input name="nombre" id="izquierdaUPDATE" value={dataModal.nombre} onChange={handleChangeModal}/>
                    </div>

                    <div className="derechaUPDATE">
                        <p className="tipoUPDATE">Apellidos</p>
                        <input name="apellido" id="izquierdaUPDATE" value={dataModal.apellido} onChange={handleChangeModal}/>
                    </div>

                    <div className="fechaUPDATE">
                        <p className="tipo">Fecha Nacimiento</p>
                        <input type="date" name="fnacimiento" id="izquierdaUPDATE" value={dataModal.fnacimiento} onChange={handleChangeModal}/>
                    </div>

                    <div className="opcionesUPDATE">
                        <p className="tipo-opcionUPDATE">Genero</p>
                        <input type="radio" name="genero" id="opciones-inputUPDATE" value={dataModal.genero} onChange={handleChangeModal}/><label>Mujer</label> 
                        <input type="radio" name="genero" id="opciones-inputUPDATE" value={dataModal.genero} onChange={handleChangeModal}/><label>Hombre</label>
                        <input type="radio" name="genero" id="opciones-inputUPDATE" value={dataModal.genero} onChange={handleChangeModal}/><label>Otro</label>
                    </div>
 
                    <div className="email-eUPDATE">
                        <p className="tipoUPDATE">Email</p>
                        <input type="email" name="email" id="izquierdaUPDATE" value={dataModal.email} onChange={handleChangeModal}/>
                    </div>
                    
                    <div className="derecha-telefonoUPDATE">
                        <p className="tipoUPDATE">Telefono de Contacto</p>
                        <input type="number" name="telefono" id="izquierdaUPDATE" value={dataModal.telefono} onChange={handleChangeModal}/>
                    </div>

                    <div>
                        <p className="tipoUPDATE">Pais de origen</p>
                        <select name="pais" id="documentoUPDATE" onChange={handleChangeModal}>
                            <option> Colombia </option>
                            <option> Venezuela </option>
                            <option> Argentina </option>
                            <option> Bolivia </option>
                        </select>
                    </div>

                    <div className="derechaUPDATE">
                        <p className="tipoUPDATE">Foto</p>
                        <input type="file" name="img" id="archivoUPDATE" value={dataModal.img} onChange={handleChangeModal}/>
                    </div>

                   

                    <div>
                        <p className="tipoUPDATE">Contraseña</p>
                        <input type="password" name="password" id="documentoUPDATE" value={dataModal.password} onChange={handleChangeModal}/>
                    </div>

                    <div className="derechaUPDATE">
                        <p className="tipoUPDATE">Confirmar Contraseña</p>
                        <input type="password" name='password' id="izquierdaUPDATE"/>
                    </div>
                    
                     <div className="tipoUPDATE">
                        <p className="tipoUPDATE">Tipo de Usuario</p>
                        <input type="text" name="tipouser" id="archivoUPDATE" value={dataModal.tipouser} onChange={handleChangeModal}/>
                    </div>
                    
                    <div className="rrUPDATE">
                        <a href="terminos.html">Acepta terminos y condiciones</a>
                    </div>

                    <div className="botonUPDATE">
                        <button className='boton1UPDATE'>Guardar</button>
                       {/*<Link to="../Login" class="boton1">Ingresar</Link>*/}
                    </div>

                </form>
            </div>
        </div>
    </section>
  );
}

export default ActualizarU;
