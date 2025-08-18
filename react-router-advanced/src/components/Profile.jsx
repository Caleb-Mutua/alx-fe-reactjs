import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

export default function Profile() {
  return (
    <ProtectedRoute>
      <div className="p-4">
        <h2>Profile Page</h2>
        <nav className="flex gap-4">
          <Link to="details">Details</Link>
          <Link to="settings">Settings</Link>
        </nav>

        {/* Nested Routes */}
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </ProtectedRoute>
  );
}
