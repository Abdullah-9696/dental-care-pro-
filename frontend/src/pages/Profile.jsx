import { useState } from "react";
import Navbar from "../components/navbar";

export default function Profile() {
  const [profile, setProfile] = useState({ name: "John Doe", email: "john@example.com" });

  const update = () => {
    alert("Profile updated (dummy)");
  };

  return (
    <div>
      <Navbar />
      <div className="box">
        <h2>Profile</h2>
        <input value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
        <input value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} />
        <button onClick={update}>Update Profile</button>
      </div>
    </div>
  );
}
