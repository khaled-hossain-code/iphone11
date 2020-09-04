import React from "react"

function Navbar(props) {
  return (
    <div className="navbar">
      <ul className="navbar__items">{props.children}</ul>
    </div>
  )
}

export default Navbar
