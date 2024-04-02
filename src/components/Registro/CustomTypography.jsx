import * as React from 'react';
import { Typography } from '@mui/material';

const CustomTypography = ({ children }) => {

    return (
        <Typography 
        className='RegisterForm-text'
        sx={{
            color: 'white',
            fontSize: '30px',
            fontWeight: 'lighter',
            marginBottom: '-40px',
            marginTop: '40px'
        }}>
            {children}
        </Typography>
    )
}
export { CustomTypography };
