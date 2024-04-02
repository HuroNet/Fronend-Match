import * as React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ label, type, ...rest }) => {

    return (
        <TextField
            className='RegisterForm-TextField'
            margin="normal"
            required
            color="primary"
            label={label}
            type={type}
            InputLabelProps={{
                style: { color: 'white' }
            }}
            sx={{
                width: '95%',
                bgcolor: '#8b54d6',
                borderRadius: '10px',
                border: '2px solid #48b6a1',
                '& .MuiInputLabel-asterisk': {
                    display: 'none'
                }
            }}
            inputProps={{
                style: { color: 'white' }
            }}
            {...rest}
        />
    )
}
export { CustomTextField };
