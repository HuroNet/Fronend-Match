// photos
import fotoLeft from '/@assets/viewer.jpg';
import fotoRigth from '/@assets/streamer.jpg';

export const boxStylesRigth = {
  // bgcolor: '#6E29CC',
  m: 1,
  border: 5,
  width: '80%',
  height: '25rem',
  borderRadius: '16px'
};
export const boxStylesLeft = {
  m: 1,
  border: 5,
  width: '80%',
  height: '25rem',
  borderRadius: '16px'
};
export const botonR = {
  bgcolor: '#48B6A1',
  width: '100%'
};

export const sxImgLeft = {
  backgroundColor: {
    backgroundImage: `url(${fotoLeft})`,
    backgroundSize: 'cover',
    backgroundReat: 'no-repeat',
    backgroundPosition: 'center'
  },
  '&:hover': {
    backgroundImage: 'None'
  }
};
export const sxImgRigth = {
  backgroundColor: {
    backgroundImage: `url(${fotoRigth})`,
    backgroundSize: 'cover',
    backgroundReat: 'no-repeat',
    backgroundPosition: 'center'
  },

  '&:hover': {
    backgroundImage: 'None'
  }
};

export const centerFlexStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
