import Profile from '../components/EditProfile/Profile';
import HeaderLoggdedIn from '../components/HeaderLoggedIn/HeaderLoggdedIn';
import Footer from '../components/Footer/Footer';

export const ProfilePage = () => {
  return (
    <div>
      <HeaderLoggdedIn />
      <Profile />
      <Footer />
    </div>
  );
};
export default ProfilePage;
