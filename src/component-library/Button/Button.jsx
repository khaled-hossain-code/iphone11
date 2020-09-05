import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonSize = size => {
  switch (size) {
    case 'large':
      return 'button--large';
    case 'huge':
      return 'button--huge';
    case 'small':
      return 'button--small';
    case 'tiny':
      return 'button--tiny';
    case 'normal':
      return 'button--normal';

    default:
      return null;
  }
};

const buttonType = type => {
  switch (type) {
    case 'danger':
      return 'button--danger';
    case 'primary':
      return 'button--primary';
    case 'overImage':
      return 'button--over-image';
    case 'darkOverImage':
      return 'button-dark--over-image';
    case 'tertiary':
      return 'button--tertiary';
    default:
      return null;
  }
};

const Button = props => {
  const {
    size,
    type,
    userColor,
    dark,
    disabled,
    fullWidth,
    primary,
    submitType,
    onClick,
    className,
    icon,
    label,
    version,
  } = props;

  const btnStyle = userColor
    ? { background: userColor.backgroundColor, color: userColor.color }
    : {};

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      style={btnStyle}
      className={classNames(
        'button',
        `button--${version}`,
        buttonSize(size),
        buttonType(type),
        className,
        {
          'button-dark': dark,
          'button--disabled': disabled,
          'button--full-width': fullWidth,
          'button--primary': primary,
        }
      )}
      type={submitType}
      onClick={onClick}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {label}
    </button>
  );
};

Button.defaultProps = {
  className: null,
  label: null,
  dark: false,
  disabled: false,
  size: 'normal',
  type: null,
  fullWidth: false,
  primary: false,
  onClick: () => { },
  submitType: 'button',
  version: 'v1',
  icon: null,
  userColor: null,
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'huge', 'small', 'tiny', 'normal']),
  type: PropTypes.oneOf(['danger', 'primary', 'overImage', 'darkOverImage', 'default', 'tertiary']),
  version: PropTypes.oneOf(['v1', 'v2']),
  fullWidth: PropTypes.bool,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  submitType: PropTypes.string,
  icon: PropTypes.node,
  userColor: PropTypes.oneOfType([
    null,
    PropTypes.shape({
      backgroundColor: PropTypes.string,
      textColor: PropTypes.string,
    }),
  ]),
};

export default Button;
