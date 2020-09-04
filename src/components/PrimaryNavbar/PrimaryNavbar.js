import React from "react"
import PropTypes from "prop-types"
import Navbar, { NavItem } from "../../component-library/Navbar"
import Icon from "../../component-library/Icon"

function PrimaryNavbar(props) {
  return (
    <nav className="primary-nav">
      <Navbar>
        <NavItem to="/">
          <Icon name="logo" fill="#fff" height="44" width="36" />
        </NavItem>
        <NavItem to="/mac">Mac</NavItem>
        <NavItem to="/ipad">iPad</NavItem>
        <NavItem to="/iphone">iPhone</NavItem>
        <NavItem to="/watch">Watch</NavItem>
        <NavItem to="/tv">TV</NavItem>
        <NavItem to="/music">Music</NavItem>
        <NavItem to="/support">Support</NavItem>
        <NavItem>
          <Icon name="search" fill="#fff" size="medium" />
        </NavItem>
        <NavItem>
          <Icon name="bag" fill="#fff" height="44" width="37" />
        </NavItem>
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
