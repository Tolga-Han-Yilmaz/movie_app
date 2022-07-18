import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useMovieContext } from "../../context/MovieContextProvider";
import { signout } from "../../firebase";

const Navbar = () => {
  const { currentUser } = useMovieContext();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = async () => {
    await signout();
    navigate("/login");
  };
  return (
    <nav className="navbar   d-flex justify-content-between p-3 navbar">
      <div className="container">
        <div>
          <h3 onClick={handleClick}>Movies</h3>
        </div>
        <div>
          {!currentUser ? (
            <div>
              <button className="btn btn-dark mx-3" onClick={handleLogin}>
                Login
              </button>
              <button className="btn btn-outline-dark" onClick={handleRegister}>
                Register
              </button>
            </div>
          ) : (
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
