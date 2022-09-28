import logo from "./Hotelia horizontal negro.svg"
import logo1 from "./Group 200 login.svg"
import "./login.css"
function Banner(){
    return(
        <body>
  
            <div className="container-form">
            <div className="imagen1">
            <img className="imagen_blanca" src={logo1}/>
            </div>

            <img className="image" src={logo}/>
            <div className="icons"><i className="fa-solid fa-user"></i></div>

            <span>Usuario</span>
            <input type="text" className="input"/>

            <span>Contraseña</span>
            <input type="password" className="input"/>

            <button type="submit"><a>Ingresar</a></button>
            <p>¿No tienes una cuenta? <a> Regístrate aquí</a></p>
        </div>

        </body>

     
    )
}

export default Banner;