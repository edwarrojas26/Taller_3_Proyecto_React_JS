import foto from "./foto.jpg"
import "./foto.css"
function Navbar() {
    return (
        <section className="dashboard">

        <div class="bienvenido">
            <h1>Bienvenido, Angie Vargas</h1>
        </div>

            <div className="info">
                <div className="foto">
                    <div className="img"><img src={foto} /></div>
                    <div className="icon2">
                        <i className="fa-solid fa-file-export"></i>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-file-arrow-up"></i>
                        <i className="fa-solid fa-upload"></i>
                    </div>
                    <a>Cambiar contraseña</a>
                </div>

            </div>

        </section>



    )
}

export default Navbar;