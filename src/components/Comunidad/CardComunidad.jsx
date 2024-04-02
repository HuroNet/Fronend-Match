import { Grid, Box } from '@mui/material';
import { boxStylesmid } from './StyleComunidad';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faTwitch } from '@fortawesome/free-brands-svg-icons';
import './comunidad.css';

import iconChat from '/@assets/icons/chat.svg';

export const ComunidadCard = (props) => {
  return (
    <div id="grid-card">
      <Box sx={[boxStylesmid]}>
        <div className="comunidad-card">
          <div>
            <img src={props.imagen} alt="" className="imagenComunidad" />
          </div>
          <div className="nombre-y-chat">
            <p className="comunidad-name">{props.nombre}</p>
            <a href={props.chat} className="card-a">
              {/* <i className='icono-chat'> <FontAwesomeIcon icon={iconChat} /></i> */}
              <img src={iconChat} className="icono-chat" />
            </a>
          </div>
          <div className="redes-sociales">
            <button className="iconos-redes">
              <a href={`https://www.instagram.com/${props.link1}`} className="card-a">
                <i>
                  {' '}
                  <FontAwesomeIcon icon={faInstagram} />{' '}
                </i>
              </a>
            </button>
            <button className="iconos-redes">
              <a href={props.link2} className="card-a">
                <i className="twt">
                  {' '}
                  <FontAwesomeIcon icon={faTwitch} />{' '}
                </i>
              </a>
            </button>
            <button className="iconos-redes">
              <a href={props.link3} className="card-a">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ComunidadCard;
