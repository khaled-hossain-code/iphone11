import React from "react"
import PropTypes from "prop-types"
import Navbar, { NavItem } from "../../component-library/Navbar"

function PrimaryNavbar(props) {
  return (
    <nav className="primary-nav">
      <Navbar>
        <NavItem to="/">Logo</NavItem>
        <NavItem to="/mac">Mac</NavItem>
        <NavItem to="/ipad">iPad</NavItem>
        <NavItem to="/iphone">iPhone</NavItem>
        <NavItem to="/watch">Watch</NavItem>
        <NavItem to="/tv">TV</NavItem>
        <NavItem to="/music">Music</NavItem>
        <NavItem to="/support">Support</NavItem>
        <NavItem>SearchIcon</NavItem>
        <NavItem>BagIcon</NavItem>
      </Navbar>
    </nav>
  )
}

PrimaryNavbar.defaultProps = {}
PrimaryNavbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default PrimaryNavbar
