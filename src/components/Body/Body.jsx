import React from 'react';
import './body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import logoPhoto from '/@assets/logo_izquierda.png';
import quiensSomosPhoto from'/@assets/quienesSomos.png';
import fotogino from '/@assets/fotogino.jpg';
import fotojanice from '/@assets/fotojanice.jpg';
import fotocarlos from '/@assets/fotocarlos2.jpg';
import fotokevin from '/@assets/fotokevin.jpg';

export const Body = () => {
  return (
    <>
      <section>
        <div className="grid-home ">
          <div className="grid-home-inicio">
            <div className="home-inicio">
              <p>
                "Conectando mundos, creando
                <br /> magia. Donde las pasiones se <br /> conviertien en profesiones."
              </p>
              <button className="home-button">
                <Link to="/logview">Comienza el viaje!!</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" grid-mision">
          <div className="col-sm-5 col-md-6 home-logo-container">
            <img src={logoPhoto} className="home-logo-image" alt="Logo" />
          </div>
          <div className="home-text-container">
            <h1>Nuestra Misión</h1>
            <p>
              Facilitar conexiones significativas a través de streamers, creando experiencias
              compartidas que unen a creadores de contenido de toda LATAM. Nuestra misión es
              promover la amistad, la colaboración e integración, al mismo tiempo que construimos
              comunidades sólidas y duraderas en torno a la pasión de todo tipo de contenido.
            </p>
          </div>
        </div>
      </section>
      <section id="section-equipo">
        <div className="container">
          <h1 className="team-title">El Equipo</h1>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={fotojanice} />
                </div>
                <div className="team-content">
                  <h3 className="name">Janice Chen</h3>
                  <h4 className="title">Co-Founder</h4>
                </div>
                <ul className="social">
                  <a href="https://www.instagram.com/hey.janiz/">
                    <i>
                      {' '}
                      <FontAwesomeIcon icon={faInstagram} size="lg" />{' '}
                    </i>
                  </a>
                  <a href="https://www.linkedin.com/in/janice-chen97/">
                    <li>
                      <FontAwesomeIcon
                        href="https://codepen.io/collection/XdWJOQ/"
                        icon={faLinkedinIn}
                        size="lg"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={fotogino} />
                </div>
                <div className="team-content">
                  <h3 className="name">Marcos Hernández</h3>
                  <h4 className="title">Co-Founder</h4>
                </div>
                <ul className="social">
                  <a href="https://www.instagram.com/ginolml/">
                    <i>
                      {' '}
                      <FontAwesomeIcon icon={faInstagram} size="lg" />{' '}
                    </i>
                  </a>
                  <a href="https://www.linkedin.com/in/marcos-hernandez-896b11185/">
                    <li>
                      <FontAwesomeIcon
                        href="https://codepen.io/collection/XdWJOQ/"
                        icon={faLinkedinIn}
                        size="lg"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={fotocarlos} />
                </div>
                <div className="team-content">
                  <h3 className="name">Carlos Paredes</h3>
                  <h4 className="title">Co-Founder</h4>
                </div>
                <ul className="social">
                  <a href="https://instagram.com/rovert.lh?igshid=YzAwZjE1ZTI0Zg==">
                    <i>
                      {' '}
                      <FontAwesomeIcon icon={faInstagram} size="lg" />{' '}
                    </i>
                  </a>
                  <a href="https://www.linkedin.com/in/roberto-reyes-ib/">
                    <li>
                      <FontAwesomeIcon
                        href="https://codepen.io/collection/XdWJOQ/"
                        icon={faLinkedinIn}
                        size="lg"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={fotokevin} />
                </div>
                <div className="team-content">
                  <h3 className="name">Kevin Cárdenas</h3>
                  <h4 className="title">Co-Founder</h4>
                </div>
                <ul className="social">
                  <a href="https://www.instagram.com/kevin_f11/">
                    <i>
                      {' '}
                      <FontAwesomeIcon icon={faInstagram} size="lg" />{' '}
                    </i>
                  </a>
                  <a href="https://www.linkedin.com/in/kevin-cárdenas-365210283/">
                    <li>
                      <FontAwesomeIcon
                        href="https://codepen.io/collection/XdWJOQ/"
                        icon={faLinkedinIn}
                        size="lg"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-somos">
        <div className="col-sm-5 col-md-6 grid-somos">
          <div className="content-quienes-somos">
            <h1>¿Quiénes somos?</h1>
            <p>
              Somos una startup apasionada en la creación de contenido por medio del streaming. Nos
              esforzamos por crear experiencias para la creación de contenido entre streamers que
              desean cumplir su sueño de streamear y encontrar gente alrededor de toda LATAM con sus
              mismas metas de juego compartidas que trascienden las fronteras geográficas,
              permitiendo a jugadores de todo el mundo conectarse, colaborar y formar amistades
              sólidas.
            </p>
          </div>
          <div className="banner-pc">
            <img src={quiensSomosPhoto} className="banner-pc-image" alt="Banner" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Body;
