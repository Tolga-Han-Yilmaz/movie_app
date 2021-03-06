import { useState } from "react";
import { register } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { wrong, success } from "../../components/helper/Toasts";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password, navigate, wrong, success);
    console.log(user);
  };
  return (
    <div
      style={{ height: "88vh" }}
      className="d-flex justify-content-center align-items-center bg-movie"
    >
      <form onSubmit={handleSubmit} className="form text-center">
        <label htmlFor="">E-Mail</label>
        <br />
        <input
          type="email"
          placeholder="e-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          className="my-1"
          type="password"
          placeholder="XXXXXX"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button
          disabled={!email || !password}
          className="btn btn-primary my-3 w-50"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
