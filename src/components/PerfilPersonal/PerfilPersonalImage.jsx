import * as React from 'react';
import { Stack } from '@mui/material';
import "./perfilpersonal.css"

const PersonalProfileImage = () => {
    return (
        <Stack
            className='PersonalProfileImage'
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

export { PersonalProfileImage }