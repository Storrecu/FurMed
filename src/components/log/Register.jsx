import '../../styles/layout/Register.scss';

const Register = () => {
  return (
    <>
      <form className="register__form">
        <h4 className="register__form-title">Fromulario de registro</h4>
        <fieldset className="register__fieldset">
          <legend className="register__legend">Información del usuario</legend>
          <label htmlFor="name" className="register__label">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="register__input"
          />
          <label htmlFor="surnames" className="register__label">
            Apellidos
          </label>
          <input
            type="text"
            id="surnames"
            name="surnames"
            className="register__input"
          />
          <label htmlFor="phone" className="register__label">
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="register__input"
          />
          <label htmlFor="email" className="register__label">
            Correo electrónico
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="register__input"
          />
          <label htmlFor="password" className="register__label">
            Contraseña
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="register__input"
          />
        </fieldset>
        <fieldset className="register__fieldset">
          <legend className="register__legend">Política de privacidad</legend>
          <div className="register__checkbox">
            <input type="checkbox" name="" id="" />
            <span>He leído y acepto la Política de Privacidad y Cookies</span>
          </div>
        </fieldset>
        <button className="register__button">Enviar</button>
      </form>
    </>
  );
};

export default Register;
