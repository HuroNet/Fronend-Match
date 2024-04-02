import * as React from 'react';
import { useState } from 'react';
import { Stack, Link } from '@mui/material';
import { CustomTextField } from './CustomTextField';
import { CustomTypography } from './CustomTypography';
import { CustomButton } from './CustomButton';
import "./registro.css"

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserame] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='RegisterForm-container'>
            <Stack
                className='RegisterForm'
            >
                <Stack>
                    <CustomTypography>
                        Registro
                    </CustomTypography>
                </Stack>

                <Stack
                    sx={{
                        direction: 'row',
                        marginTop: '30px',
                        width: '80%',
                        alignItems: 'center'
                    }}>
                    <CustomTextField label="Nombre" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    <CustomTextField label="Apellido" type="text" value={lastname} onChange={(event) => setLastName(event.target.value)} />
                    <CustomTextField label="Correo" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <CustomTextField label="Username" type="text" value={username} onChange={(event) => setUserame(event.target.value)} />
                    <CustomTextField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Stack>

                <Stack className='RegisterForm-links'>

                    <Link variant="body2"
                        className='RegisterForm-link1'
                        sx={{
                            color: 'white',
                            fontSize: '16px',
                        }}>¿Te olvidaste la contraseña?
                    </Link>
                    <Link variant="body2"
                        className='RegisterForm-link2'
                        sx={
                            {
                                color: 'white',
                                fontSize: '16px'
                            }}>
                        Iniciar sesión
                    </Link>
                </Stack>

                <Stack className='RegisterForm-button'>
                    <CustomButton >
                        Inicia la aventura
                    </CustomButton>
                </Stack>
            </Stack>
        </div>
    )
}

export { RegisterForm };
