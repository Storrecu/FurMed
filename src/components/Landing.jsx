import React from 'react';
import '../styles/Landing.scss';
import puppy from '../images/puppy.jpeg';
import birdy from '../images/birdy.jpeg';
import petsVet from '../images/petsVet.jpg';
import lizardVet from '../images/lizardVet.jpeg';

const Landing = () => {
  return (
    <>
      <section className="landing-section info-start">
        <h2>¿Qué es FurMed?</h2>
        <br />
        <p>
          FurMed es tu centro digital para gestionar la información completa de
          tus mascotas. Almacena desde detalles personales hasta datos
          veterinarios, todo en un solo lugar.
        </p>
      </section>

      <section className="landing-section info">
        <h2>Crea el perfil de tus mascotas</h2>
        <br />
        <p>
          Registra la personalidad, gustos y preferencias de tus mascotas, desde
          comportamientos divertidos hasta sus marcas favoritas.
        </p>
        <br />
        <div className="img-container">
          <img className="img" src={puppy} alt="little dog puppy" />
          <img className="img" src={birdy} alt="little bird playing" />
        </div>
      </section>

      <section className="landing-section info">
        <h2>Controla la información veterinaria</h2>
        <br />
        <p>
          Gestiona alergias, medicamentos, intervenciones y más. Mantén un
          historial completo para un cuidado óptimo de tus mascotas.
        </p>
        <br />
        <div className="img-container">
          <img className="img-two" src={petsVet} alt="puppys on vet" />
          <img className="img-two" src={lizardVet} alt="lizard on vet" />
        </div>
      </section>

      <section className="landing-section info">
        <h2>Perfil de usuario</h2>
        <br />
        <p>
          Regístrate en FurMed, completa los perfiles de tus mascotas y olvídate
          del papeleo veterinario tradicional.
        </p>
      </section>

      <section className="landing-section info-end">
        <h2>Todo en un único lugar</h2>
        <br />
        <p>
          Accesible desde cualquier veterinario y dispositivo. FurMed simplifica
          la vida de los dueños de mascotas y garantiza un cuidado integral.
        </p>
      </section>

      <section className="landing-section faq-section">
        <h2>Preguntas Frecuentes</h2>

        <div className="faq-item">
          <h3>
            {' '}
            <i className="fa-solid fa-paw faq-item-icon"></i> ¿Cómo puedo
            empezar a usar FurMed?
          </h3>
          <p>
            Es muy sencillo. Solo necesitas registrarte, crear perfiles para tus
            mascotas y comenzar a ingresar la información relevante.
          </p>
        </div>

        <div className="faq-item">
          <h3>
            <i className="fa-solid fa-paw faq-item-icon"></i>
            ¿Es seguro almacenar la información de mis mascotas en FurMed?
          </h3>
          <p>
            ¡Absolutamente! Nos tomamos la privacidad y seguridad muy en serio.
            Todos los datos están cifrados y solo tú tienes acceso a ellos.
          </p>
        </div>

        <div className="faq-item">
          <h3>
            <i className="fa-solid fa-paw faq-item-icon"></i>
            ¿Puedo acceder a FurMed desde cualquier dispositivo?
          </h3>
          <p>
            Sí, FurMed es accesible desde cualquier dispositivo con conexión a
            internet. Puedes acceder a tus datos en cualquier momento y lugar.
          </p>
        </div>
      </section>
    </>
  );
};

export default Landing;
