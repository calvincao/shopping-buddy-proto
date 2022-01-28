import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <span className="nav-left">Mega Market Shopping Buddy</span>
      <span className="nav-right">
        <button>Get Lists</button>
        <button>Save List</button>
      </span>
    </div>
  )
}

export default Navbar;