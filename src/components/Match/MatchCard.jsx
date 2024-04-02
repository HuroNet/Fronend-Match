import { Stack, Box, Grid, Button } from '@mui/material';
import { boxMatchLeft, boxMatchRigth, botonR, matchCardComboBox } from './styleMatchCard';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './matchCard.css';

import Card from './Card';
import { labelsToMatch } from './labelsToMatch';

export const MatchCard = () => {
  return (
    <div id="matchCardId">
      <Grid container spacing={1} justifyContent="center">
        <Grid justifyContent="center" xs={12} container>
          <h2>Conectando mundos, creando magia</h2>
        </Grid>

        <Grid item xs={8} sm={8} md={5} container justifyContent="center" alignItems="center">
          <Box sx={[boxMatchLeft]} xs={12} sm={6} md={6} lg={6} xl={6}>
            <Stack spacing={2} direction="column" padding={5}>
              <p style={{ fontSize: '25px' }}>Ecuentra tu duo perfecto</p>
              <Autocomplete
                disablePortal
                id="combo-box-match"
                options={labelsToMatch}
                sx={matchCardComboBox}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ style: { color: 'white' } }}
                    label="Selecciona tu juego"
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-match"
                options={labelsToMatch}
                sx={matchCardComboBox}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ style: { color: 'white' } }}
                    label="Horarios de juego (Ejemplo:18:00-20:00)"
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-match"
                options={labelsToMatch}
                sx={matchCardComboBox}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ style: { color: 'white' } }}
                    label="Selecciona tu zona horaria"
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-match"
                options={labelsToMatch}
                sx={matchCardComboBox}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{ style: { color: 'white' } }}
                    label="Selecciona tu modo de juego"
                  />
                )}
              />
              <Button variant="contained" sx={botonR} className="button-match">
                Haz tu Match
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Card para cargar las imagenes */}
        <Grid item xs={8} sm={8} md={5} container justifyContent="center" alignItems="center">
          <Box sx={[boxMatchRigth]} xs={12} sm={6} md={6} lg={6} xl={6}>
            <Card />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default MatchCard;
