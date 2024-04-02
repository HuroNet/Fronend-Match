import * as React from 'react';
import { Typography } from '@mui/material';

const CustomTypography = ({ children }) => {

    return (
        <Typography 
        className="PersonalProfileForm-text"
        sx={{
            color: 'white',
            fontSize: '35px',
            fontWeight: 'lighter',
            marginTop: '50%',
            marginBottom: '5%',
        }}>
            {children}
        </Typography>
    )
}
export { CustomTypography };