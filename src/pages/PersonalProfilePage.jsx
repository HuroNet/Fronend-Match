import HeaderLoggdedIn from '../components/HeaderLoggedIn/HeaderLoggdedIn';
import Footer from '../components/Footer/Footer'
import { PersonalProfileForm } from '../components/PerfilPersonal/PerfilPersonalForm'
import { PersonalProfileImage } from '../components/PerfilPersonal/PerfilPersonalImage'
import { Box } from "@mui/material"

export const PersonalProfilePage = () => {
    return (
        <>
            <HeaderLoggdedIn />
            <Box className='UserPersonalProfileContainer'>
                <PersonalProfileImage />
                <PersonalProfileForm />
            </Box>
            <Footer />
        </>
    )
}
export default PersonalProfilePage