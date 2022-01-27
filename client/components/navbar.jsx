import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <span className="nav-left">Mega Market Shopping Buddy</span>
      <span className="nav-right">
        <a href="#">Saved Lists</a>
        <a href="#">Save!</a>
      </span>
    </div>
  )
}

export default Navbar;