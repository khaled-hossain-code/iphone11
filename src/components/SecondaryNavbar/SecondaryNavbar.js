import React from "react"
import PropTypes from "prop-types"
import Navbar, { NavItem } from "../../component-library/Navbar"
import Button from "../../component-library/Button"

function SecondaryNavbar(props) {
  return (
    <nav className="secondary-nav">
      <Navbar>
        <NavItem to="/">
          <span className="title">iPhone11</span>
        </NavItem>
        <div className="secondary-nav__menu">
          <NavItem to="/overview">Overview</NavItem>
          <NavItem to="/tech-specs">Tech Specs</NavItem>
          <NavItem to="/buy">
            <Button
              userColor={{ backgroundColor: "#0071e3", color: "#ffffff" }}
              label="Buy"
            />
          </NavItem>
        </div>
      </Navbar>
    </nav>
  )
}

SecondaryNavbar.defaultProps = {}
SecondaryNavbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default SecondaryNavbar
