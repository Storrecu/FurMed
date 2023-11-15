import { Link } from 'react-router-dom';
import '../../styles/layout/Login.scss';

const Login = () => {
  return (
    <>
      <form className="login__form">
        <h4 className="login__form-title">Inicia sesión</h4>
        <label className="login__label" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="login__input"
          type="text"
          id="email"
          placeholder="correo@example.com"
        />
        <label className="login__label" htmlFor="password">
          Contraseña
        </label>
        <input
          className="login__input"
          type="text"
          id="password"
          placeholder="escribe tu contraseña"
        />
        <button className="login__button">Entrar</button>
        <button className="login__help">
          ¿Necesitas ayuda para iniciar sesión?
        </button>
        <p className="login__register">
          ¿No tienes una cuenta aún?{' '}
          <Link to="/register" className="login__register-link">
            Regístrate
          </Link>
          ! es gratis.
        </p>
      </form>
    </>
  );
};

export default Login;
