// Footer.jsx
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="developer-info">
        <h4>Datos de los Desarrolladores</h4>
        <ul>
          <li>Alfonso Vengoechea</li>
          avengoec@cuc.edu.co
          <li>Cristian Torres</li>
          ctorres37@cuc.edu.co
        </ul>
      </div>


        <div className="app-intent">
          <h4>Intención de la Aplicación</h4>
          <p>Esta aplicación tiene como objetivo brindar una experiencia interactiva en la que los usuarios puedan aprender y practicar las técnicas esenciales de desarrollo web utilizando tecnologías modernas. En términos generales, las actividades buscan el manejo del estado, las rutas e interacciones con los diferentes elementos que componen la interfaz de usuario de una aplicación web en React.</p>
        </div>
        <div className="social-icons">
          <h4>Redes Sociales</h4>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


