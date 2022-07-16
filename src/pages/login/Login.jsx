import { auth, login } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    console.log(user);
    navigate("/");
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center "
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          className="my-1"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button style={{ background: "orange" }} className="btn  w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
