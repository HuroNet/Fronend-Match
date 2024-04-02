/* eslint-disable prettier/prettier */
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './login.css';
import { boxLogin, inputStyle } from './styleLogin.jsx';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (email.trim() === '' || password.trim() === '') {
      console.log("no")
    } else {
      // Use history to navigate to the desired page
      history.push('/user-profile');
    }
  };

  return (
    <>
      <div className="card-login">
        <Box sx={[boxLogin]}>
          <div className="formulario-login">
            <div className="iniciar-secion">
              <Typography
                component="h5"
                sx={{
                  color: 'white',
                  fontSize: '25px'
                }}>
                Iniciar Sesion
              </Typography>
            </div>
            <div className="ingreso-datos">
              <TextField
                className="textField"
                required
                color="primary"
                id="name"
                label="Nombre de Usuario"
                InputLabelProps={{
                  style: { color: 'white' }
                }}
                name="email"
                autoComplete="email"
                sx={[inputStyle]}
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                name="password"
                label="Contraseña"
                InputLabelProps={{ style: { color: 'white' } }}
                type="password"
                id="password"
                sx={[inputStyle]}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className="password-forget">
              <Link className="forget-password" to="/recover-pwd">
                Olvidaste la contraseña?
              </Link>
            </div>
            <div className="password-forget">
              <Link className="forget-password2" to="/register">
                Registrate
              </Link>
            </div>
    
            <div>
                <button className="boton-login" onClick={handleLoginClick}>Iniciar Sesion</button>
            </div>
          </div>
        </Box>
      </div>
      <div className="frase-login">
        <h1> Conectando mundo, creando magia</h1>
      </div>
    </>
  );
};

export default Login;
