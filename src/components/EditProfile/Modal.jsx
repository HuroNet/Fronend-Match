import { Stack, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { profileComboBox, profileBotonR } from './styleProfile';

export const Modal = ({ setOpenModal }) => {
  return (
    <div className="main-container-modal">
      <div className="modal-text-button-top">
        <h1> Cambiar contraseña</h1>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="modal-cancel-boton"
          onClick={() => {
            setOpenModal(false);
          }}
        />
      </div>

      <Stack spacing={2} className="modal-combobox">
        <TextField
          sx={profileComboBox}
          InputLabelProps={{ style: { color: 'white' } }}
          label="Contraseña anterior"
        />
        <TextField
          sx={profileComboBox}
          InputLabelProps={{ style: { color: 'white' } }}
          label="Cambiar contraseña"
        />
        <TextField
          sx={profileComboBox}
          InputLabelProps={{ style: { color: 'white' } }}
          label="Repetir contraseña"
        />
      </Stack>

      <div className="modal-button">
        <Button
          href=""
          variant="contained"
          sx={profileBotonR}
          className="boton-guardar"
          onClick={() => {
            setOpenModal(false);
          }}>
          Guardar
        </Button>
      </div>
    </div>
  );
};
export default Modal;
