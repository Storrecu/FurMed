import '../../styles/layout/BreedInfo.scss';

const BreedInfo = () => {
  const mockupData = {
    breed: 'Pastor Alemán',
    description:
      'El pastor alemán es una raza de perro conocida por su inteligencia y versatilidad. Es una de las razas más populares del mundo y se destaca en diversas actividades, como el trabajo policial, el pastoreo y como mascota de compañía.',
    characteristics: {
      tamaño: 'Mediano a Grande',
      peso: '22-40 kg',
      esperanzaDeVida: '9-13 años',
      pelaje: 'Doble capa, pelaje recto y grueso',
      color: 'Negro y marrón',
      personalidad: 'Inteligente, leal, alerta',
    },
    curiosities: [
      'Fueron originalmente criados para pastorear ovejas en Alemania.',
      'Son conocidos por su papel en aplicaciones policiales y militares.',
      'Tienen un olfato agudo y son excelentes en rastreo.',
      'Son obedientes y se entrenan fácilmente.',
    ],
    care: {
      alimentacion: 'Una dieta balanceada de alta calidad.',
      ejercicio: 'Requieren ejercicio regular y actividades mentales.',
      salud: 'Visitas regulares al veterinario para chequeos.',
    },
  };

  return (
    <>
      <div className="breedInfo">
        <h2 className="breedInfo__title">{mockupData.breed}</h2>
        <p className="breedInfo__description">{mockupData.description}</p>

        <h3 className="breedInfo__section-title">Características:</h3>
        <ul className="breedInfo__list">
          {Object.entries(mockupData.characteristics).map(([key, value]) => (
            <li key={key} className="breedInfo__item">
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>

        <h3 className="breedInfo__section-title">Curiosidades:</h3>
        <ul className="breedInfo__list">
          {mockupData.curiosities.map((curiosity, index) => (
            <li key={index} className="breedInfo__item">
              {curiosity}
            </li>
          ))}
        </ul>

        <h3 className="breedInfo__section-title">Cuidados:</h3>
        <ul className="breedInfo__list">
          {Object.entries(mockupData.care).map(([key, value]) => (
            <li key={key} className="breedInfo__item">
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BreedInfo;
