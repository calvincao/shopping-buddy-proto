import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <span className="nav-left">Mega Market Shopping Buddy</span>
      <span className="nav-right">
        <button>My Lists</button>
        <button>Fav Recipes</button>
        <button>Log in</button>
      </span>
    </div>
  )
}

export default Navbar;