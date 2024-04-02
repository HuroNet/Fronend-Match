import * as React from 'react';
import { Stack } from '@mui/material';
import "./registro.css"

const RegisterImage = () => {
    return (
        <Stack
            className='RegisterImage'
        >
            <picture>
                <img
                    alt="SigninImage"
                    src="/@assets/imagesProfile/image-registration.png"
                />
            </picture>
        </Stack>
    )
}

export { RegisterImage };
