import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
