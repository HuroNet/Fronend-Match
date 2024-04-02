import React from 'react';
import { Grid, Box } from '@mui/material';
import { boxStyleslados, boxStylesmid } from './styleComunicados';
import './comunicados.css';
import pic from '/@assets/astro.png';

export const Comunicados = () => {
  return (
    <div id="gridCoulum-comunicados">
      <Grid xs={12} className="text-comunuicados1">
        <h2> Conectando mundos, creando magia</h2>
      </Grid>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={3}
          className="membresia-item1"
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Box xs={12} sm={6} md={6} lg={6} xl={6} sx={[boxStyleslados]}>
            <div className="comunicacion-box">
              <img src={pic} alt="" className="logotipo-comunicados" />
              <h2> Patrocinadores </h2>
              <a href="https://discord.com/invite/dBYH7HbSJG">
                <button className="boton-comunicados1">Quiero serlo!</button>
              </a>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={19}
          sm={3}
          className="membresia-item1"
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Box sx={[boxStylesmid]}>
            <div className="comunicacion-box">
              <img src={pic} alt="" className="logotipo-comunicados" />
              <h2> Campañas disponibles </h2>
              <a href="https://discord.com/invite/dBYH7HbSJG">
                <button className="boton-comunicados2">Ver disponibles</button>
              </a>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={19}
          sm={3}
          className="membresia-item1"
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Box sx={[boxStyleslados]}>
            <div className="comunicacion-box">
              <img src={pic} alt="" className="logotipo-comunicados" />
              <h2> Drops disponibles </h2>

              <a href="https://discord.com/invite/dBYH7HbSJG">
                <button className="boton-comunicados1">Ver disponibles</button>
              </a>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Comunicados;
