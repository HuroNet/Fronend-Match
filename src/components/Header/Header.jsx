import React, { useState, useEffect } from 'react';
import './header.css';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import logoHeader from '/@assets/logo2.png';

const Header = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.Header');
    header.classList.toggle('active', window.scrollY > 10);
  });
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <a href="/">
        <img src={logoHeader} className="Logo" alt="logo" />
      </a>

      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit>
        <nav className="header-Nav">
          <a href="/">Inicio</a>
          <a href="/#section-somos">Quienes somos</a>
          <a href="/#section-equipo"> Equipo </a>
          <Link to="logview">Iniciar Sesión</Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="header-bar">
        <FontAwesomeIcon icon={faBars} className="header-bars-icon" />
      </button>
    </header>
  );
};

export default Header;
