import React from "react"
import _ from "lodash"
import classNames from "classnames"
import PropTypes from "prop-types"

import IconMapping from "./registry"

const Icon = (props) => {
  const {
    name,
    fill,
    className,
    iconLabel,
    showLabel,
    showTooltip,
    size,
    height,
    width,
    showBGColor,
    color,
  } = props
  const MappedIcon = IconMapping[name]
  const overWriteStyle = _.pickBy({ height, width, fill }, _.isString)
  const styles = {
    display: "block",
    height: "1em",
    width: "1em",
    strokeWidth: 0,
  }

  return (
    <div
      className={classNames(
        "icon",
        `icon--${color}`,
        { "icon--with-label": iconLabel && showLabel, [`icon--${size}`]: size },
        className
      )}
    >
      {showBGColor || (iconLabel && showLabel) ? (
        <div
          className={classNames("icon__content", `icon__content--bg-${color}`)}
        >
          <MappedIcon style={{ ...styles, ...overWriteStyle }} />
        </div>
      ) : (
        <MappedIcon style={{ ...styles, ...overWriteStyle }} />
      )}
      {iconLabel && showTooltip ? (
        <div className="icon__tooltip">{iconLabel}</div>
      ) : null}
      {iconLabel && showLabel ? (
        <div className="icon__label">{iconLabel}</div>
      ) : null}
    </div>
  )
}

Icon.defaultProps = {
  className: null,
  iconLabel: null,
  showLabel: false,
  showTooltip: false,
  showBGColor: false,
  color: "tertiary",
  fill: null,
  size: null,
  height: null,
  width: null,
}

Icon.propTypes = {
  className: PropTypes.string,
  iconLabel: PropTypes.node,
  showLabel: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showBGColor: PropTypes.bool,
  color: PropTypes.oneOf(["tertiary"]),
  name: PropTypes.string.isRequired,
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "medium",
    "large",
    "huge",
    "xl",
    "xxl",
    null,
  ]),
}

export default Icon
