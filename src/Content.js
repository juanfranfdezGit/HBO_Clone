import logo from './media/logo.png';
import './Content.css';
import Fondo from './media/from.jpg';
import Fondo2 from './media/fondo2.jpeg';
import serie1 from './media/serie1.jpg';
import serie2 from './media/serie2.webp';
import serie3 from './media/serie3.jpeg';
import serie4 from './media/serie4.jpg';
import serie5 from './media/serie5.jpg';

function Content() {
    return (
        <section>
            <header>
                <img src={logo} alt='Logo'></img>
                <nav>
                    <ul>
                        <li><h1>INICIA SESION</h1></li>
                        <li><h1>SUSCRIBETE</h1></li>
                    </ul>
                </nav>
            </header>
            <div className='FirstBack'>
                <img className='fondos' src={Fondo} alt='From'></img>
            </div>
            <div className='firstText'>
                <h1>Disfruta de las mejores peliculas</h1>
                <h3>Solo por 8,99€ al mes</h3>
                <h2 className='Suscribe'>Suscribete Ya</h2>
            </div>
            <div className='SecondBack'>
                <img className='fondo2' src={Fondo2} alt='GOT'></img>
            </div>
            <div className='Original'>
                <h4>HBO ORIGINAL</h4>
                <h1>THE HOUSE OF THE DRAGON</h1>
            </div>
            <div className='Categorias'>
                <ul>
                    <li>LO MAS POPULAR</li>
                    <li>MUY PRONTO</li>
                    <li>ESTRENOS</li>
                    <li>ACCION</li>
                    <li>ANIMACION</li>
                    <li>COMEDIA</li>
                    <li>DRAMA</li>
                    <li>CIENCIA FICCION Y FANTASIA</li>
                </ul>
            </div>
            <div className='SeriesImg'>
                <img src={serie1} alt='serie1'></img>
                <img src={serie2} alt='serie2'></img>
                <img src={serie3} alt='serie3'></img>
                <img src={serie4} alt='serie4'></img>
                <img src={serie5} alt='serie5'></img>
            </div>
            <footer>
                <h5>©2023 HBO Nordic AB. All Rights Reserved. HBO Max™ is used under license.</h5>
            </footer>
        </section>
    )
}

export default Content;





