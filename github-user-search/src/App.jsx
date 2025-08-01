import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchUser } from "./services/github";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const result = await fetchUser(username);
    setUser(result);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
