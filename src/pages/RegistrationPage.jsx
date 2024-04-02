import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { RegisterForm } from '../components/Registro/RegistroForm'
import { RegisterImage } from '../components/Registro/RegistroImage'
import { RegisterText } from '../components/Registro/RegistroText'
import { Box } from "@mui/material"

export const RegistrationPage = () => {
    return (
        <>
            <Header />
            <Box className='RegisterContainer'>
                <RegisterImage />
                <RegisterForm />
            </Box>
            <RegisterText />
            <Footer />
        </>
    )
}
export default RegistrationPage
