import '../../styles/layout/Footer.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <Link className="footer__menu-link" to="/">A jugar</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link active" to="/instructions">¿Cómo se juega?</Link>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link" to="/options">Más opciones</Link>
          </li>
        </ul>
      </nav>
      <div className='infoAutor'>
      <small className="footer__copy">© BarbaraBravoRedondo</small>
      <div className="footer__icons">
        <a className="footer__icon-link" href="https://github.com/BarbaraBravoRedondo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="footer__icon-link" href="https://www.linkedin.com/in/barbara-bravo-redondo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div></div>
    </footer>
  );
}

export default Footer;
