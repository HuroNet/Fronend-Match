import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faTiktok,
  faYoutube,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="footer">
      <hr></hr>
      <div className="sb__footer-links">
        <div className="sb__footer-links-div">
          <div className="button1">
            <h4>BosterST</h4>
            <a>
              {' '}
              <p>Mexico</p>{' '}
            </a>
            <a>
              {' '}
              <p>Ecuador</p>{' '}
            </a>
            <button className="btn_shadow1">
              <a href="https://www.instagram.com/boster.st ">
                <i>
                  {' '}
                  <FontAwesomeIcon icon={faInstagram} size="lg" />{' '}
                </i>
              </a>
            </button>
            <button className="btn_shadow1">
              <a href="http://">
                <i>
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </i>
              </a>
            </button>
            <button className="btn_shadow1">
              <a href="https://www.youtube.com/@BosterST">
                <i>
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </i>
              </a>
            </button>
            <button className="btn_shadow1">
              <a href="https://www.tiktok.com/@bosterst?_t=8h430VBYBZV&_r=1">
                <i>
                  <FontAwesomeIcon icon={faTiktok} size="lg" />
                </i>
              </a>
            </button>
            <button className="btn_shadow1">
              <a href="https://twitter.com/">
                <i>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </i>
              </a>
            </button>
            <button className="btn_shadow1">
              <a href="https://www.linkedin.com/">
                <i>
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </i>
              </a>
            </button>

            <button className="btn_shadow1">
              <a href="https://github.com/">
                <i>
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </i>
              </a>
            </button>
          </div>
        </div>
        <div className="sb__footer-links-div">
          <h4>Contactame con BosterST</h4>
          <a>
            {' '}
            <p>Soporte al cliente</p>{' '}
          </a>
          <a>
            {' '}
            <p>Politicas de privacidad</p>{' '}
          </a>
          <a>
            {' '}
            <p>Términos y condiciones</p>{' '}
          </a>
          <a>
            {' '}
            <p>Politicas de reembolso</p>{' '}
          </a>
          <a>
            {' '}
            <p>Servicios</p>{' '}
          </a>
        </div>
        <div className="sb__footer-links-div">
          <h4>Acerca de la empresa</h4>
          <Link to="#section-somos">
            <p>Qué es BosterST?</p>
          </Link>
          <a href="/">
            {' '}
            <p>El equipo</p>{' '}
          </a>
        </div>
        <div className="sb__footer-links-div">
          <h4>Otros Proyectos</h4>
          <a href="https://dvux.lat/">
            {' '}
            <p>Agencia</p>{' '}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
