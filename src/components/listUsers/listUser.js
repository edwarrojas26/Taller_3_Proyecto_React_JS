import axios from "axios";
import { useEffect ,useState} from "react";
import './listUser.css'

function ListarUser() {

    const url="https://hoteliakuepa.herokuapp.com/users";

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    const [list,setList]=useState([]);

    useEffect(()=>{
        getData().then((response)=>{ 
            setList(response.data); 
        })
    },[])



    return(

        <div id="container-main">
            <h1>Users</h1>
            <table>
                <tr>
                    <th>No. Documento</th>
                    <th>Tipo <br/> Documento</th>
                    <th>Nombre Apellido</th>
                    <th>Fecha nacimiento</th>
                    <th >Genero</th>
                    <th >Telefono</th>
                    <th >Correo</th>
                    <th >Pais de origen</th>
                    <th >tipo usuario</th>
                </tr>
                {list.map((lis,index)=>(
                    <tr>
                        <td>{lis._id}</td>
                        <td>{lis.tipodoc}</td>
                        <td>{lis.nombre} {lis.apellido}</td>
                        <td>{lis.fnacimiento}</td>
                        <td>{lis.genero}</td>
                        <td>{lis.email}</td>
                        <td>{lis.telefono}</td>
                        <td>{lis.paisorigen}</td>
                        <td>{lis.tipouser}</td>
                    </tr>

                    
                ))
                }
                
            </table>
        </div>

    );
}

export default ListarUser;