import * as React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children }) => {

    return (
        <Button
            className='PersonalProfileForm-button-submit'
            type="submit"
            variant="contained"
            sx={{
                mt: 1,
                mb: 14,
                bgcolor: '#48b6a1',
                color: 'white',
                borderRadius: '8px',
                paddingLeft: '45px',
                paddingRight: '45px',
                paddingBottom: '12px',
                paddingTop: '12px',
                textTransform: 'none'
            }}>
            {children}
        </Button>
    )
}
export { CustomButton };