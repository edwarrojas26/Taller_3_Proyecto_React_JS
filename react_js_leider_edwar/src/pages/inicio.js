
import Banner from '../components/banner/Banner.js';
import Descripcion from '../components/descripcion/Descripcion.js';
import Feature from '../components/feature/Feature.js';
import Nav from '../components/nav/Nav.js';
import Map from '../components/mapa/Map.js';
import Opiniones from '../components/opinions/Opinions.js';
import Footer from '../components/footer/Footer.js';

function Inicio() {
    return (
        <section>
        <Nav/>
        <Banner/>
        <Descripcion/>
        <Feature/>
        <Map/>
        <Opiniones/>
        <Footer/> 
        </section>
    );
}

export default Inicio
