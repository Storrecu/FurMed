import React from 'react';
import '../../styles/layout/Profile.scss';

const Profile = () => {
  return (
    <>
      <div className="profile">
        <h3 className="profile__title">
          Bienvenid@! Este es tu espacio personal.
        </h3>
        <h4 className="profile__subtitle">Modificar/añadir datos</h4>
        <form className="profile__form">
          <label htmlFor="name" className="profile__label">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="profile__input"
            defaultValue="Silvia"
          />
          <label htmlFor="population" className="profile__label">
            Población
          </label>
          <input
            type="text"
            id="population"
            name="population"
            className="profile__input"
            defaultValue="Barcelona"
          />
          <label htmlFor="province" className="profile__label">
            Provincia
          </label>
          <input
            type="text"
            id="province"
            name="province"
            className="profile__input"
            defaultValue="Barcelona"
          />
          <label htmlFor="phone" className="profile__label">
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="profile__input"
            defaultValue="123-456-7890"
          />
          <button className="profile__button">Enviar</button>
        </form>
        <h4 className="profile__subtitle">Modificar datos de acceso</h4>
        <form className="profile__form">
          <label htmlFor="email" className="profile__label">
            Correo electrónico
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="profile__input"
            defaultValue="silvia@example.com"
          />
          <label htmlFor="password" className="profile__label">
            Contraseña
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="profile__input"
            defaultValue="********"
          />
          <label htmlFor="password-repeat" className="profile__label">
            Repetir contraseña
          </label>
          <input
            type="text"
            id="password-repeat"
            name="password-repeat"
            className="profile__input"
            defaultValue="********"
          />
          <button className="profile__button">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
