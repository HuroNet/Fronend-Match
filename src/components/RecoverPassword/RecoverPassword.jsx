import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';

import './recoverPassword.css';

export const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    // Simple email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setIsValid(isValidEmail);
  };

  return (
    <div className="recover-password">
      <h2>Recuperar la contraseña</h2>
      <p>Indique su correo y enviaremos una nueva contraseña a su correo</p>
      <TextField
        id="email-user-input"
        label="Email"
        type="email"
        autoComplete="current-email"
        className="email-recover"
        // sx={[inputStyle]}
        InputLabelProps={{
          style: { color: 'white' }
        }}
        value={email}
        onChange={handleEmailChange}
        InputProps={{
          style: { color: 'white' },
          endAdornment: (
            <IconButton edge="end" disableRipple disableFocusRipple>
              <EmailIcon color={isValid ? 'primary' : 'error'} />
            </IconButton>
          )
        }}
      />
      <div className="buttons-recover">
        <button> Cancelar </button>
        <button> Recuperar </button>
      </div>
    </div>
  );
};
