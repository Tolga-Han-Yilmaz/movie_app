import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    navigate("/");
  };
  return (
    <nav className="navbar   d-flex justify-content-between p-3 navbar">
      <div className="container">
        <div>
          <h3 onClick={handleClick}>React Movie App</h3>
        </div>
        <div>
          <Link to="/login" className="btn btn-dark mx-3">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-dark">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
