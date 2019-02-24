import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ children, type, size, variant, onClick, classList }) => {
  const getClassname = () =>
    `button ${size} ${variant} ${classList}`;

  return (
      <button type={type} onClick={onClick} className={getClassname()}>
        {children}
      </button>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  classList:'',
};

Button.propTypes = {
  variant: PropTypes.string,
  classList: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
