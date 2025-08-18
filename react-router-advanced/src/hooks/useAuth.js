import { useState, useEffect } from "react";

export function useAuth() {
  // Replace with your real auth logic (context, API, etc.)
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example: check if user is stored in localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return { user, isAuthenticated: !!user };
}
