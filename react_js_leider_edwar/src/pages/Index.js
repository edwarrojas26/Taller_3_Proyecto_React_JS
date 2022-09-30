
import Banner from '../components/banner/Banner';
import Descripcion from '../components/descripcion/Descripcion';
import Feature from '../components/feature/Feature';
import Nav from '../components/nav/Nav';
import Map from '../components/mapa/Map';
import Opiniones from '../components/opinions/Opinions';
import Footer from '../components/footer/Footer';

function indexPages() {
    return (
        <section>
        <Nav/>
        <Banner/>
        <Descripcion/>
        <Feature/>
        <Map/>
        <Opiniones/>
        <Footer/> 
        {/*<Register/>*/}
        </section>
    );
}

export default indexPages
