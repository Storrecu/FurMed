import { Link } from 'react-router-dom';
import defaultUserImage from '../../images/defaultAvatar.png';
import '../../styles/layout/Profile.scss';

const Profile = () => {
  return (
    <>
      <div className="profile">
        <h3 className="profile__title">
          Bienvenid@! Este es tu espacio personal.
        </h3>
        <h4 className="profile__subtitle">Tus datos personales</h4>
        <p className="profile__subtitle">
          Aquí puedes consultar tus datos personales, así como modificarlos si
          es preciso.
        </p>
        <form className="profile__form">
          <div className="profile__userImage">
            <label htmlFor="userImage">Imagen de Usuario</label>
            <img
              src={defaultUserImage}
              alt="image selected from user or default user image from FurMed"
              className="profile__image"
            />
            <input
              type="file"
              id="userImage"
              name="userImage"
              className="profile__changeImage"
            />
          </div>
          <label htmlFor="userName" className="profile__label">
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="profile__input"
            defaultValue="Stc193"
          />
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

          <label htmlFor="surnames" className="profile__label">
            Apellidos
          </label>
          <input
            type="text"
            id="surnames"
            name="surnames"
            className="profile__input"
            defaultValue="Torres Cubero"
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

          <Link to="/addPet">Añadir mascota</Link>
          <Link to="/removePet">Borrar mascota</Link>
        </form>
      </div>
    </>
  );
};

export default Profile;
