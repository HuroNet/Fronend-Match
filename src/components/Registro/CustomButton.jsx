import * as React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children }) => {

    return (
        <Button
            className='RegisterForm-button-submit'
            type="submit"
            variant="contained"
            sx={{
                mt: 1,
                mb: 14,
                bgcolor: '#48b6a1',
                color: 'white',
                borderRadius: '8px',
                padding: '12px 25px',
                textTransform: 'none',
            }}>
            {children}
        </Button>
    )
}
export { CustomButton };
