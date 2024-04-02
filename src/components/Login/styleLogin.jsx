const mediaLoginScreen = {
  '@media (max-width: 430px)': {
      width: '99%', 
      height: '22rem',
  }
}

export const boxLogin = {
  bgcolor: '#6e29CC',
  m: 3,
  width: "550px",
  top: "19%",
  height: '22rem',
  borderRadius: "20px",
  ...mediaLoginScreen
};

export const inputStyle = {
  input: { color: 'white', background: ' #8b54d6' },
  border: '2.5px solid #48b6a1',
  borderRadius: '10px',
  borderStyle: 'solid',
  width: '100%',
  '@media (max-width: 430px)': {
    width: '320px'
  },
}

export const botonStyle = {
  mt: 1,
  mb: 1,
  bgcolor: '#48b6a1',
  color: 'white',
  borderRadius: '8px',
  marginTop: '10px',
  marginLeft: '300px', 
  padding: '10px'
}

export const registro={
  
  color: 'white',
  whiteSpace: 'nowrap',
  marginLeft: '90px',
  fontSize: '16px',
  '@media (max-width: 430px)': {
  marginLeft: '20px',//aqui
}
}