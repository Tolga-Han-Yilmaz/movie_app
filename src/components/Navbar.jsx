import React from "react";

const Navbar = () => {
  return (
    <div className="container d-flex justify-content-between p-3">
      <div>
        <h3>React Movie App</h3>
      </div>
      <div>
        <button type="button" class="btn btn-primary mx-3">
          Primary
        </button>
        <button type="button" class="btn btn-outline-primary">
          Primary
        </button>
      </div>
    </div>
  );
};

export default Navbar;
