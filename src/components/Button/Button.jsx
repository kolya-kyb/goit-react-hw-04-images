import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ handleClick, children }) => {
  return <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>;
};

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
