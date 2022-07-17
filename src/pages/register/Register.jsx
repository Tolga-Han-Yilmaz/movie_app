import { useState } from "react";
import { register } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
    navigate("/login");
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
          required
        />
        <br />
        <input
          className="my-1"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
