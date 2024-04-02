import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { boxStylesdiagI, boxStylesdiagD, boxStylesdiagI1, boxStylesdiagD1 } from './styleMembresia';
import './membresia.css';
import pic from '/@assets/astro.png';

export const Membresia = () => {
  return (
    <>
      <div className="membresia-text-top">
        <h1> Membresias </h1>
      </div>
      <Grid container spacing={4} className="grid-membresias">
        <Grid
          item
          xs={12}
          sm={6}
          className="membresia-item1"
          sx={{
            display: 'flex',
            justifyContent: 'right'
          }}
        >
          <Box xs={12} sm={6} md={6} lg={6} xl={6} sx={{ ...boxStylesdiagD }}>
            <div className="box-membresias">
              <img src={pic} alt="" className="imagen-membresia" />

              <h1> Suscripcion $5 </h1>
              <ul className="listas-membresias">
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Uso de plataforma para conectar
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Creacion de eventos y miniseries
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Uso del servidor manual
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Promociones y crear comunidades
                </li>
              </ul>

              <a href="https://discord.com/invite/dBYH7HbSJG">
                <button className="boton-membresias1">
                  Venta de Productos
                </button>
              </a>
            </div>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          className="membresia-item2"
          sx={{
            display: 'flex',
            justifyContent: 'left' /* estas lineas hacen que se ubique bien a mas de 600px */
          }}
        >
          <Box xs={12} sm={6} md={6} lg={6} xl={6} sx={[boxStylesdiagI]}>
            <div className="box-membresias">
              <img src={pic} alt="" className="imagen-membresia" />

              <h1> Afiliado 25$ </h1>
              <ul className="listas-membresias">
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  50 seguidores
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Emite durante 8 horas
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Media de 3 espectadores
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Creación de imagen persona
                </li>
              </ul>

              <a href="https://discord.com/invite/dBYH7HbSJG">
                <button className="boton-membresias2">
                  Comprar
                </button>
              </a>
            </div>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          className="membresia-item3"
          sx={{
            display: 'flex',
            justifyContent: 'end' /* estas lineas hacen que se ubique bien a mas de 600px */
          }}
        >
          <Box xs={12} sm={4} md={4} lg={4} xl={4} sx={[boxStylesdiagI, boxStylesdiagI1]}>
            <div className="box-membresias">
              <img src={pic} alt="" className="imagen-membresia" />

              <h1> Partner 75$ </h1>
              <ul className="listas-membresias">
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Planificacion de contenido
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Agenda de emisión por 25 horas
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Creación de servidores de discord
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Creación de imagen persona
                </li>
              </ul>

              <a href="https://discord.com/invite/dBYH7HbSJG">
                <button className="boton-membresias2">
                  Comprar

                </button>
              </a>
            </div>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          className="membresia-item4"
          sx={{
            display: 'flex',
            justifyContent: 'left' /* estas lineas hacen que se ubique bien a mas de 600px */
          }}
        >
          <Box xs={12} sm={6} md={6} lg={6} xl={6} sx={[boxStylesdiagD, boxStylesdiagD1]}>
            <div className="box-membresias">
              <img src={pic} alt="" className="imagen-membresia" />

              <h2> Diseño de logos y overlays </h2>
              <ul className="listas-membresias">
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Creación de overlays
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Creación de marca personal
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#ffffff' }} />
                  Creación de imagen personal
                </li>
              </ul>

              <a href="https://discord.com/invite/dBYH7HbSJG">
                <button className="boton-membresias1">
                  Contacta directamente
                </button>
              </a>

            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Membresia;
