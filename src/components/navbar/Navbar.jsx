import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar   d-flex justify-content-between p-3 navbar">
      <div className="container">
        <div>
          <h3>React Movie App</h3>
        </div>
        <div>
          <button type="button" className="btn btn-dark mx-3">
            Login
          </button>
          <button type="button" className="btn btn-outline-dark">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
