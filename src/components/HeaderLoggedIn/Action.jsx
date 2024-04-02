import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './headerLoggedIn.css';

export default function Action() {
  const imgProfile = 'src/assets/imagesProfile/profile.png';
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        alt="Remy Sharp"
        src={imgProfile}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <MenuItem onClick={handleClose}>
          <Link to="/user-profile" className="Link-text">
            Perfil
          </Link>

          </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/edit-profile" className="Link-text">
            Editar Perfil
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/" className="Link-text">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
