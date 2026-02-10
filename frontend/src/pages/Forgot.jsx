import { useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const submit = () => {
    alert("Reset link sent to " + email + " (dummy)");
  };

  return (
    <div className="box">
      <h2>Forgot Password</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={submit}>Send Reset Link</button>
    </div>
  );
}
