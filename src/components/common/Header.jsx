import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fallDown as Menu } from 'react-burger-menu';
import logo from '../../images/logo.png';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //bloquear scroll al abrir el menú
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
        <button className="header_menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars menu-toggle-icon"></i>
        </button>
        <div className="header_link">
          <Link to="/">
            <img className="header_img" src={logo} alt="logo from project" />
          </Link>
        </div>
        {isMenuOpen ? (
          <div className="menu-overview" onClick={() => setMenuOpen(false)}>
            <Menu
              left
              isOpen={isMenuOpen}
              customBurgerIcon={false}
              customCrossIcon={false}
            >
              <div
                className="menu-section-close"
                onClick={() => setMenuOpen(false)}
              >
                <i className="fa-solid fa-xmark menu-section-close-xmark"></i>
              </div>

              <div className="enter-section">
                <Link className="log-sec" to="/login">
                  {' '}
                  Entrar{' '}
                  <span>
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </span>
                </Link>
                <Link className="log-sec" to="/register">
                  {' '}
                  Registrarse
                  <span>
                    <i className="fa-solid fa-user-plus"></i>
                  </span>
                </Link>
              </div>

              <Link to="/profile">Perfil de Usuario</Link>
              <Link to="/petsList">Mis Mascotas</Link>
              <Link to="/breedInfo">Curiosidades</Link>

              <div className="socialMedia-sec">
                <p className="socialMedia-sec-text">
                  Búscame en redes sociales:{' '}
                </p>
                <a
                  className="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Storrecu"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  className="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com/silviatc1993"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/silvia-torres-cubero-96a19198/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </Menu>
          </div>
        ) : null}
        <div className="header-log">
          <Link to="/login">
            <i className="fa-solid fa-user header-log-icon"></i>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
