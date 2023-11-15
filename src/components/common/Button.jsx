import { Link } from 'react-router-dom';

const Button = ({ to, onClick, buttonText }) => {
  return (
    <>
      <Link to={to} className="btn" onClick={onClick}>
        {buttonText}
      </Link>
    </>
  );
};

export default Button;
