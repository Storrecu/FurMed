import '../../styles/layout/PetInfo.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import birthdayThor from '../../images/birthdayThor.jpg';
import cuteThor from '../../images/cuteThor.jpg';
import playFulThor from '../../images/playfulThor.jpg';
import sleepyThor from '../../images/sleepyThor.jpg';
import sunnyThor from '../../images/sunnyThor.jpg';

const PetInfo = () => {
  return (
    <>
      <section className="petInfo">
        <h4 className="petInfo__title">Información de tu mascota</h4>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Nombre: </span>Thor.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Especie: </span> Perro.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Raza: </span> Pastor alemán.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Edad: </span> 9 años.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Sexo: </span> Macho.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Nº chip: </span>{' '}
          941000017017413.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Nº cartilla: </span> A756585.
        </p>
        <h4 className="petInfo__title">Cuéntanos sobre tu mascota!</h4>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Carácter: </span>Sumiso,
          amigable, curioso y ansioso.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Adiestramiento:</span>No.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">
            Marca alimento habitual:
          </span>{' '}
          Affinity Última Adult de pollo o ternera, formato de 12kg.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Marca de los premios:</span>{' '}
          Marca blanca, cualquier galletita le gusta.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">
            Marca alimentos higiene bucal:
          </span>{' '}
          Pedigree dentastix.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">Juguetes favoritos:</span>
          Cualquiera, mejor darle juguetes de corcho, el resto los rompe a las
          pocas horas.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">
            ¿Se lleva bien con niños?
          </span>{' '}
          No, se pone nervioso y salta.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">
            ¿Tolera visitas en casa?
          </span>
          Se pone nervioso, pero no da problemas.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">¿Puedes viajar con él?</span>{' '}
          No, es muy miedoso.
        </p>
        <p className="petInfo__info">
          <span className="petInfo__info-question">
            ¿Tolera a otras mascotas?
          </span>{' '}
          Depende, en la calle si es sociable con otros perros en casa si no ha
          convivido con otra mascota podría haber problemas.
        </p>
        <div className="carousel-container">
          <AliceCarousel
            autoPlay={true}
            infinite={true}
            disableButtonsControls
            autoPlayInterval={3000}
            autoPlayDirection="ltr"
          >
            <img
              alt="Thor-photo"
              src={birthdayThor}
              className="sliderimg md:flex mx-auto md:h-5/6"
            />
            <img
              alt="Thor-photo"
              src={cuteThor}
              className="sliderimg md:flex mx-auto md:h-5/6"
            />
            <img
              alt="Thor-photo"
              src={playFulThor}
              className="sliderimg md:flex mx-auto md:h-5/6"
            />
            <img
              alt="Thor-photo"
              src={sleepyThor}
              className="sliderimg md:flex mx-auto md:h-5/6"
            />
            <img
              alt="Thor-photo"
              src={sunnyThor}
              className="sliderimg md:flex mx-auto md:h-5/6"
            />
          </AliceCarousel>
        </div>
      </section>
    </>
  );
};

export default PetInfo;
