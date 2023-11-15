import '../../styles/layout/PetInfoVet.scss';

const PetInfoVet = () => {
  return (
    <>
      <section className="vetInfo">
        <h4 className="vetInfo__title">Historial Veterinario</h4>

        {/* Enfermedades */}
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">
            Enfermedades Diagnosticadas
          </h5>
          <ol className="vetInfo__list">
            <li>Enfermedad Inflamatoria Crónica Intestinal o IBD.</li>
            <li>Úlcera de decúbito.</li>
            <li>Artrosis.</li>
          </ol>
        </div>

        {/* Tratamientos */}
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">Tratamientos Activos</h5>
          <div className="vetInfo__list">
            <p>Flagyl 250mg, 2 veces al día</p>
            <p>Prednisona 10mg, 1 al día</p>
            <p>Optovite ampollas, 1 a la semana</p>
            <p>Condrovet, 40 días seguidos - 2 meses de descanso </p>
          </div>
        </div>

        {/* Alergias */}
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">Alergias Diagnosticadas</h5>
          <p className="vetInfo__list">No procede.</p>
        </div>

        {/* Pruebas */}
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">Pruebas Realizadas</h5>
          <ol className="vetInfo__list">
            <li>Ecografías: confirmación de IBD.</li>
            <li>Displasia de cadera.</li>
          </ol>
        </div>

        {/* Intervenciones */}
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">Intervenciones</h5>
          <p className="vetInfo__list">Castración a los 8 meses.</p>
        </div>

        {/* Resultados */}
        {/* <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">Resultados</h5>
          <textarea
            className="vetInfo__textarea"
            placeholder="Ingresa los resultados aquí..."
            rows="4"
            cols="50"
          ></textarea>
        </div> */}

        {/* Informes */}
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">Informes</h5>
          <input className="vetInfo__file-input" type="file" accept=".pdf" />
        </div>

        {/* Cartilla */}
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">Cartilla de vacunas</h5>
          <input className="vetInfo__file-input" type="file" accept=".pdf" />
        </div>

        {/* Vacunas
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">Vacunas</h5>
          <ul className="vetInfo__list">
            <li>Vacuna 1</li>
            <li>Vacuna 2</li>
          </ul>
        </div> */}

        {/* Profesional y Centro Veterinario */}
        <div className="vetInfo__section">
          <h5 className="vetInfo__section-title">
            Profesional y Centro Veterinario
          </h5>
          <span>Nombre del Veterinario: </span>{' '}
          <p className="vetInfo__list">Daniel Rabanal</p>
          <span>Nº Colegiado: </span> <p className="vetInfo__list">3829</p>
          <span>Centro Veterinario: </span>
          <p className="vetInfo__list">
            Clínicas Riera Alta, centro veterinario San Andrés
          </p>
          <span>Dirección:</span>{' '}
          <p className="vetInfo__list">Calle Irlanda, 5-9, 08030, Barcelona</p>
          <span>Horario: </span>{' '}
          <p className="vetInfo__list">L a V 9-21h, S-D 10 a 14h y 16 a 20h</p>
          <span>Teléfono:</span> <p className="vetInfo__list">933 115 372</p>
        </div>
      </section>
    </>
  );
};

export default PetInfoVet;
