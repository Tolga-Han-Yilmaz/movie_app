import { googleLogin, login } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { wrong, success } from "../../components/helper/Toasts";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password, wrong, success, navigate);
    console.log(user);
  };
  const handleGoogle = async (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-unused-vars
    const user = await googleLogin(success, navigate);
  };
  return (
    <div
      style={{ height: "88vh" }}
      className="d-flex justify-content-center flex-column align-items-center bg-movie"
    >
      <form onSubmit={handleSubmit} className="form text-center">
        <label htmlFor="">E-Mail</label>
        <br />
        <input
          type="email"
          placeholder="e-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          disabled={!email || !password}
          style={{ background: "orange" }}
          className="btn my-3  w-50"
        >
          Login
        </button>
        <br />
      </form>
      <form onSubmit={handleGoogle} className="form text-center">
        <button type="submit" className="btn btn-primary w-50 my-1">
          <FaGoogle /> OO
          <FaGoogle />
          LE
        </button>
      </form>
    </div>
  );
};

export default Login;
