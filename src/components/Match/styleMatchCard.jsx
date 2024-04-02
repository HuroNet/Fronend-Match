import './matchCard.css';

const mediaScreen = {
  '@media (max-width: 900px)': {
    width: '70%', // Ancho del 100% en dispositivos pequeños
    height: '29rem'
  },
  '@media (max-width: 600px)': {
    width: '100%' // Ancho del 100% en dispositivos pequeños
  }
};

export const boxMatchLeft = {
  bgcolor: '#6E29CC',
  m: 1,
  width: '90%',
  height: '100%',
  borderRadius: '16px',
  justifyContent: 'center',
  ...mediaScreen
};

export const boxMatchRigth = {
  bgcolor: '#6E29CC',
  '&:hover': {
    bgcolor: '#48B6A1'
  },
  m: 1,
  width: '70%',
  height: '100%',
  borderRadius: '16px',
  ...mediaScreen
};
export const botonR = {
  bgcolor: '#48B6A1',
  width: '150px'
};

export const matchCardComboBox = {
  width: '90%',
  bgcolor: '#8b54d6',
  border: '2px solid #48b6a1',
  input: {
    color: 'white'
  },
  '@media (max-width: 600px)': {
    width: '100%',
    fontSize: '10px'
  }
};
