import{Link} from 'react-router-dom';
import logo from '../../imagenes/LogoFlowBlanco.png';


const Header = (props) => {
    return (
        <header>
            <Link to="/home"><img className="logo" src={logo} alt="Logo Liga Master Flow"/></Link>
            <nav>
                <ul className="menu">
                    <li><Link to="/noticias">Noticias</Link></li>
                    <li><Link to="/teams">Equipos</Link></li>
                    <li><Link to="/fixture">Fixture</Link></li>
                    <li><Link to="/tabla">Tabla de Posiciones</Link></li>
                </ul>
            </nav>
            <Link to="/contact"><p className="contact">Contactanos</p></Link>
        </header>
    );
}
export default Header;