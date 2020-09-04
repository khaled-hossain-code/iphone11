import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Badge from '../Badge';

const buttonSize = size => {
  switch (size) {
    case 'large':
      return 'icon-button--large';
    case 'huge':
      return 'icon-button--huge';
    case 'small':
      return 'icon-button--small';
    case 'tiny':
      return 'icon-button--tiny';
    default:
      return null;
  }
};

const labelPlacementClass = labelPlacement => {
  switch (labelPlacement) {
    case 'right':
      return 'icon-button__label--right';
    case 'left':
      return 'icon-button__label--left';
    case 'top':
      return 'icon-button__label--top';
    default:
      return null;
  }
};

const IconButton = props => {
  const {
    style,
    standalone,
    dark,
    disabled,
    action,
    isIconOnly,
    onClick,
    label,
    labelPlacement,
    icon,
    className,
    size,
    version,
    badgeCount,
  } = props;
  const backgroundColor = style.backgroundColor;
  const inlineStyle = backgroundColor !== '' ? { backgroundColor } : {};

  return (
    <div
      className={classNames(`icon-button ${className} icon-button--${version}`, buttonSize(size), {
        'icon-button--standalone': standalone,
        'icon-button-dark': dark,
        'icon-button--disabled': disabled,
        'icon-button--action': action,
        'icon-button--icon-only': isIconOnly,
      })}
      style={inlineStyle}
      onClick={onClick}
      role="presentation"
    >
      {label && (
        <span className={classNames('icon-button__label', labelPlacementClass(labelPlacement))}>
          {label}
        </span>
      )}
      <div className="icon-button__icon">{icon}</div>
      {badgeCount > 0 ? <Badge classNameForBadge="icon-button__badge" /> : null}
    </div>
  );
};

IconButton.defaultProps = {
  isIconOnly: false,
  label: null,
  action: false,
  standalone: false,
  size: null,
  dark: false,
  labelPlacement: null,
  version: 'v1',
  disabled: false,
  onClick: () => {},
  className: '',
  style: {
    backgroundColor: '',
  },
  badgeCount: 0,
};

IconButton.propTypes = {
  action: PropTypes.bool,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  isIconOnly: PropTypes.bool,
  label: PropTypes.node,
  labelPlacement: PropTypes.oneOf(['right', 'left', 'top']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['tiny', 'small', 'large', 'huge']),
  standalone: PropTypes.bool,
  version: PropTypes.oneOf(['v1', 'v2']),
  className: PropTypes.string,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
  badgeCount: PropTypes.number,
};

export default IconButton;
