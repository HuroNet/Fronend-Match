import MatchCard from '../components/Match/MatchCard';
import HeaderLoggdedIn from '../components/HeaderLoggedIn/HeaderLoggdedIn';
import Footer from '../components/Footer/Footer';

export const MatchPage = () => {
  return (
    <>
      <HeaderLoggdedIn />
      <MatchCard />
      <Footer />
    </>
  );
};
export default MatchPage;
