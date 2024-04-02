import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './updatePwd.css';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const UpdatePwd = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Check if passwords match whenever the password field is updated
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    // Check if passwords match whenever the confirm password field is updated
    setPasswordsMatch(password === event.target.value);
  };
  return (
    <div className="update-password">
      <h2>Cambiar Contraseña</h2>
      <p>Introduce una nueva contraseña</p>
      <TextField
        id="password-input"
        label="Contraseña"
        type={showPassword ? 'text' : 'password'} 
        autoComplete="current-password"
        className="password-field"
        value={password}
        onChange={handlePasswordChange}
        error={!passwordsMatch}
        InputLabelProps={{
          style: { color: 'white' }
        }}
        InputProps={{
          style: { color: 'white' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <TextField
        id="repeat-password-input"
        label="Repetir contraseña"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        className="password-field"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={!passwordsMatch}
        helperText={!passwordsMatch ? 'Requiere misma contraseña' : ''}
        InputLabelProps={{
          style: { color: 'white' }
        }}
        InputProps={{
          style: { color: 'white' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <div className="button-update">
        <button> Enviar </button>
      </div>
    </div>
  );
};

export default UpdatePwd;
