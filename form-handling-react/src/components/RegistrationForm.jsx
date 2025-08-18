import React, { useState } from "react";

const RegistrationForm = () => {
  // Manage form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("⚠️ All fields are required.");
      return;
    }

    setError("");
    console.log("User registered:", formData);
    alert(`✅ Registered user: ${formData.username}`);

    // reset form after submit
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">User Registration</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block mb-1 font-medium ">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username} // ✅ controlled
            onChange={handleChange}
            className=" space-x-4 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter username"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}   // ✅ controlled
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}   // ✅ controlled
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
