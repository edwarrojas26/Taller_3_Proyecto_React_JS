import imagen from "./foto.jpg";
import "./foto.css";
function Foto() {
  return (
    <div className="foto">
      <div className="img">
        <img src={imagen} />
      </div>
      <div className="icon2">
        <i className="fa-solid fa-file-export"></i>
      </div>
      <div className="icon">
        <i className="fa-solid fa-file-arrow-up"></i>
        <i className="fa-solid fa-upload"></i>
      </div>
      <a href="#">Cambiar contraseña</a>
    </div>
  );
}

export default Foto;
