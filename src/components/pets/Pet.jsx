import { Link } from 'react-router-dom';
import '../../styles/layout/Pet.scss';
import Thor from '../../images/tiredThor.png';

const Pet = () => {
  return (
    <>
      <section className="section-pets-one">
        <div className="pet">
          <img className="pet__photo" src={Thor} alt="Foto de una mascota" />
          <div className="pet__info-container">
            <h4 className="pet__info">Thor</h4>
            <p className="pet__info">Especie: Canina</p>
            <p className="pet__info">Raza: Pastor alemán</p>
            <p className="pet__info">Edad: 9 años</p>
          </div>
        </div>
        <div className="pet-sections">
          <Link to="/petInfo" className="pet__link">
            <p>
              {' '}
              <i className="fa-solid fa-bone pet__link-icon"></i>Ver el perfil
              de la mascota
            </p>
          </Link>
          <Link to="/petInfoVet" className="pet__link">
            <p>
              {' '}
              <i className="fa-solid fa-briefcase-medical pet__link-icon"></i>
              Ver sus datos veterinarios
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Pet;
