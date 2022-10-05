import imagen from "./foto.jpg";
import "./foto.css";
function Foto(props) {
  return (
    <div className="foto">
      <div className="img">
        <img src={props.img} />
      </div>
      <div className="icon2">
        <i className="fa-solid fa-file-export"></i>
      </div>
      <div className="icon1">
        <i className="fa-solid fa-file-arrow-up"></i>
        <i className="fa-solid fa-upload"></i>
      </div>
      <a href="#">{props.titulo}</a>
    </div>
  );
}

export default Foto;
