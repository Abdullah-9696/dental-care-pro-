import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token"); // dummy login
  if (!isLoggedIn) return <Navigate to="/login" />;
  return children;
}
