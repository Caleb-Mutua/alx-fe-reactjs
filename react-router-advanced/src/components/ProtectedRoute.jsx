import { Navigate } from "react-router-dom";

// Simulate authentication state
const isAuthenticated = false; // toggle this manually to test

export default function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
