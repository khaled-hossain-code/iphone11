import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "./nav-item.scss"

function NavItem({ children, to }) {
  return (
    <li className="navbar__nav-item">
      {to ? <Link to={to}>{children}</Link> : children}
    </li>
  )
}

NavItem.defaultProps = {
  to: null,
}

NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  to: PropTypes.string,
}

export default NavItem
