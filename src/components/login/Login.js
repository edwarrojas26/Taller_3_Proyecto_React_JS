import logo from "./Hotelia horizontal negro.svg";
import logo1 from "./Group_200_login.svg";
import {Link} from 'react-router-dom';
import "./login.css";
function Login() {
  return (
    <body className="body_login">
      <section>
      <div className="container-form">
        <div className="imagen-cont">
          <img className="imagen_blanca" src={logo1} />
        </div>

        <img className="imagen-co" src={logo} />
        <div className="iconss">
          <i className="fa-solid fa-user"></i>
        </div>

        <span>Usuario</span>
        <input type="text" className="input-user" />

        <span>Contraseña</span>
        <input type="password" className="input-pass" />

        <button className="button" type="submit">
          <Link to="/Dash" className="a">Ingresar</Link>
        </button>
        <p className="acount">
          ¿No tienes una cuenta? <Link to="/Register" className="a"> Regístrate aquí</Link>
        </p>
      </div>
      </section>
    </body>
  );
}

export default Login;
