import '../../styles/layout/Footer.scss';

const Footer = () => {
  const miCorreo = 'silviatc1993@gmail.com';
  return (
    <>
      <footer className="footer">
        <a className="footer-mail" href={`mailto: ${miCorreo}`}>
          Contacto
        </a>
        <p className="footer-info">Creado por Silvia Torres</p>
      </footer>
    </>
  );
};

export default Footer;
