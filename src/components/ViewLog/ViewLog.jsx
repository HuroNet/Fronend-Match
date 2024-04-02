import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Button, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

import {
  boxStylesRigth,
  boxStylesLeft,
  botonR,
  sxImgLeft,
  sxImgRigth,
  centerFlexStyles
} from './styleLog.jsx';
import './viewsLog.css';

export const ViewLog = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="logview-grid">
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', color: '#48B6A1' }}>
            <Box sx={[boxStylesLeft, sxImgLeft, centerFlexStyles]}>
              <h1>VIEWERS</h1>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', color: '#6E29CC' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Box sx={[boxStylesRigth, sxImgRigth, centerFlexStyles]}>
              <Stack style={{ display: isHovered ? 'none' : 'block' }}>
                <h1>STREAMERS</h1>
              </Stack>
              <Stack
                spacing={2}
                className="log-view-stack"
                style={{ display: isHovered ? 'block' : 'none' }}>
                <h1>STREAMERS</h1>
                <Button
                  variant="contained"
                  component={Link}
                  to="/login"
                  sx={botonR}
                  className="button-logview">
                  Iniciar Sesión
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/register"
                  sx={botonR}
                  className="button-logview">
                  Registrarte
                </Button>
                <Button variant="outlined" className="button-logview">
                  <span> Ingresa con&nbsp;</span>
                  <FontAwesomeIcon icon={faTwitch} size="lg" color="white" />
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>

        <Grid item className="textbotom">
          <h2> Conectando mundos, creando magia</h2>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewLog;
