
import logo from "./Hotelia horizontal blanco.svg"
import "./navbar.css"
function Navbar(){
    return(
        <nav className="nav">
        <div className="logo">
            <img className="Imagen1" src={logo} alt="LogoHotelia" />
            <div className="usuario">
                <h3>Angie Vargas</h3>
                <p>Angievargas2@gmail.com</p>
            </div>
        </div>
        <div className="menu">
            <div className="item">
                <div><i className="fa-solid fa-bed"></i><a>Habitaciones</a></div>
                <div><i className="fa-solid fa-bell-concierge"></i><a>Reservas</a></div>
                <div><i className="fa-solid fa-bed"></i><a>Habitaciones</a></div>
                <div><i className="fa-solid fa-bell-concierge"></i><a>Habitaciones</a></div>
            </div>

        </div>
        <div className="exit">
            <i className="fa-solid fa-right-from-bracket"></i><a>Cerrar sesión</a>
        </div>
    </nav>

     
    )
}

export default Navbar;