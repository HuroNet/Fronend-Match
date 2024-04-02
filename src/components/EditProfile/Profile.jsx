import { Stack, Button } from '@mui/material';
// import { dataImages } from './dataPhotos.json';
import { profileBotonR } from './styleProfile';
import { Modal } from './Modal.jsx';
import { useState } from 'react';
import './profile.css';
import { CustomTextField } from '../Registro/CustomTextField';
import { ImageUpload } from './ImageUpload';
import { Link } from "react-router-dom"

const imgProfile = '/@assets/imagesProfile/profile.png';

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const openModals = () => {
    setShowModal(true);
    // Block scroll by adding a class to the body element
    document.body.classList.add('modal-open');
  };

  const [profileImage, setProfileImage] = useState(imgProfile);
  const handleImageChange = (newImageUrl) => {
    setProfileImage(newImageUrl);
  };

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [socialNetwork, setSocialNetwork] = useState('');
  const [zonaHoraria, setZonaHoraria] = useState('');
  const [username, setUserame] = useState('');
  // const [password, setPassword] = useState('');
  const [games, setGames] = useState('');

  return (
    <div className="profile">
      <div>{showModal && <Modal openModal={showModal} setOpenModal={setShowModal} />}</div>
      <Stack direction={'column'} width={'100%'} justifyContent={'center'}>
        <div className="container-images">
          <img src={profileImage} className="slide-image" />
          <ImageUpload onImageChange={handleImageChange} />
        </div>
        <div className="profile-text">
          <h2>Perfil personal</h2>
        </div>
        <Stack direction={'row'} width={'100%'} justifyContent={'center'}>
          <Stack
            width={'100%'}
            direction="column"
            className={showModal ? 'profile-stack-main-blur' : 'profile-stack-main'}>
            <Stack className="profile-combobox">
              <CustomTextField
                label="Nombre"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <CustomTextField
                label="Añadir descripcion"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <CustomTextField
                label="Correo"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <CustomTextField
                label="¿Cuáles son mi redes sociales?"
                type="text"
                value={socialNetwork}
                onChange={(event) => setSocialNetwork(event.target.value)}
              />
              <CustomTextField
                label="Cambiar zona horaria"
                type="text"
                value={zonaHoraria}
                onChange={(event) => setZonaHoraria(event.target.value)}
              />
            </Stack>
          </Stack>
          <Stack className="profile-combobox">
            <CustomTextField
              label="Apellido"
              type="text"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
            />
            <CustomTextField
              label="Username"
              type="text"
              value={username}
              onChange={(event) => setUserame(event.target.value)}
            />
            <CustomTextField
              label="¿Juegos que más me gustan?"
              type="text"
              value={games}
              onChange={(event) => setGames(event.target.value)}
            />

            <div className="profile-buttons">
              <Button
                href=""
                variant="contained"
                sx={profileBotonR}
                className="boton-left"
                disable={openModals}
                onClick={openModals}>
                Cambiar contraseña
              </Button>
              <Link to="/user-profile">
                <Button variant="contained" sx={profileBotonR} className="boton-right">
                  Guardar
                </Button>
              </Link>
            </div>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};
export default Profile;
