
import logo from "./Hotelia horizontal blanco.svg"
import "./navbar.css"
import {Link} from 'react-router-dom';
function Navbar(props){
    return(
    <div className="nav1">
        <div className="logo1">
            <img className="Imagen1" src={logo} alt="LogoHotelia" />
            <div className="usuario1">
                <h3>{props.nombre}</h3>
                <p>{props.correo}</p>
            </div>
        </div>
        <div className="menu1">
            <div className="item1">
                <div><i className="fa-solid fa-bed"></i><a>Habitaciones</a></div>
                <div><i className="fa-solid fa-bell-concierge"></i><a>Reservas</a></div>
                <div><i className="fa-solid fa-bed"></i><a>Habitaciones</a></div>
                <div><i className="fa-solid fa-bell-concierge"></i><a>Habitaciones</a></div>
            </div>

        </div>
        <div className="exit1">
            <Link to="../Login"><i className="fa-solid fa-right-from-bracket"></i>Cerrar sesión</Link>
        </div>
    </div>
 
     
    )
}

export default Navbar;