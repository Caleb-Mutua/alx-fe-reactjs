import React, { useState } from "react";


const RegistrationForm = () => {
  // Step 1: Manage form states
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // keep other fields unchanged
      [name]: value,
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("⚠️ All fields are required.");
      return;
    }

    setError(""); // clear errors

    // Mock API simulation
    console.log("Submitting user:", formData);

    // Here you'd normally call your API, e.g.:
    // fetch("https://mockapi.com/register", { method: "POST", body: JSON.stringify(formData) })

    alert(`✅ User registered: ${formData.username}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl  " >
      <h2 className="text-2x1 font-bold mb-4 text-center">User Registration</h2>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-3">{error}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter username"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter password"
          />
        </div>

        {/* Submit */}
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
