import * as React from 'react';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { CustomTextField } from './CustomTextField';
import { CustomTypography } from './CustomTypography';
import { CustomButton } from './CustomButton';
import "./perfilpersonal.css"

const PersonalProfileForm = () => {

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserame] = useState('');

    return (
        <div className='PersonalProfileForm-container'>
            <Stack
                className='PersonalProfileForm'
            >
                <Stack className="PersonalProfileForm-text">
                    <CustomTypography>
                        Perfil personal
                    </CustomTypography>
                </Stack>

                <picture className='PersonalProfileForm-img'>
                    <img src="src/assets/icons/user-profile.svg" alt="" />
                </picture>

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
                </Stack>


                <Stack className='PersonalProfileForm-button'>
                    <CustomButton>
                        Actualizar
                    </CustomButton>
                </Stack>
            </Stack>
        </div>
    )
}

export { PersonalProfileForm }