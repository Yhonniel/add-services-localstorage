import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container px-4">
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar_menu"
          aria-controls="navbar_menu"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div id="navbar_menu" className="navbar-collapse collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
