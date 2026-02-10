import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    // Dummy login
    localStorage.setItem("token", "dummy_token");
    navigate("/");
  };

  return (
    <div className="box">
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
      <p>
        <Link to="/register">Register</Link> | <Link to="/forgot">Forgot Password?</Link>
      </p>
    </div>
  );
}
