import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';
import LogViewsPage from './pages/LogViewsPage';
import LoginPage from './pages/LoginPage';
import MatchPage from './pages/MatchPage';
import ComunicadosPage from './pages/ComunicadosPage';
import MembresiaPage from './pages/MembresiaPage';
import ProfilePage from './pages/EditProfilePage';
import ComunidadPage from './pages/ComunidadPaje';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage';
import PersonalProfilePage from './pages/PersonalProfilePage';
import RecoverPasswordPage from './pages/RecoverPasswordPage';
import UpdatePwdPage from './pages/UpdatePwdPage';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="HomePage" render={() => <HomePage />} />
        <Route exact path="/logview" name="LogViewsPage" render={() => <LogViewsPage />} />
        <Route exact path="/login" name="LoginPage" render={() => <LoginPage />} />
        <Route exact path="/match" name="MatchPage" render={() => <MatchPage />} />
        <Route
          exact
          path="/comunicados"
          name="ComunicadosPage"
          render={() => <ComunicadosPage />}
        />
        <Route exact path="/membresias" name="MembresiaPage" render={() => <MembresiaPage />} />
        <Route exact path="/edit-profile" name="ProfilePage" render={() => <ProfilePage />} />
        <Route exact path="/comunidad" name="ComunidadPage" render={() => <ComunidadPage />} />
        <Route exact path="/register" name="RegistrationPage" render={() => <RegistrationPage />} />
        <Route
          exact
          path="/user-profile"
          name="UserPersonalProfilePage"
          render={() => <PersonalProfilePage />}
        />
        <Route
          exact
          path="/recover-pwd"
          name="RecoverPasswordPage"
          render={() => <RecoverPasswordPage />}
        />
        <Route exact path="/update-pwd" name="UpdatePwdPage" render={() => <UpdatePwdPage />} />
        <Route path="*" render={() => <NotFoundPage />} />
      </Switch>
    </Router>
  );
};
export default Routes;
