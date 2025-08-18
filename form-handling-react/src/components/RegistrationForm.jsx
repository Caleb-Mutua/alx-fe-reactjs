// src/components/RegistrationForm.jsx
import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    // If no errors, simulate API call
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", { username, email, password });
      alert("User registered successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-700 text-center">
        User Registration
      </h2>

      {/* Username */}
      <div>
        <label className="block text-sm font-medium text-gray-600">
          Username
        </label>
        <input
          type="text"
          value={username} // ✅ controlled input
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          value={email} // ✅ controlled input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          value={password} // ✅ controlled input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
