import logo from "./Hotelia horizontal negro.svg";
import logo1 from "./Group 200 login.svg";
import Link from "link-react";
import "./login.css";
function Login() {
  return (
    <body>
      <div className="container-form">
        <div className="imagen1">
          <img className="imagen_blanca" src={logo1} />
        </div>

        <img className="image" src={logo} />
        <div className="icons">
          <i className="fa-solid fa-user"></i>
        </div>

        <span>Usuario</span>
        <input type="text" className="input" />

        <span>Contraseña</span>
        <input type="password" className="input" />

        <button type="submit">
          <Link to="/login/dashboard">Ingresar</Link>
        </button>
        <p>
          ¿No tienes una cuenta? <Link> Regístrate aquí</Link>
        </p>
      </div>
    </body>
  );
}

export default Login;
