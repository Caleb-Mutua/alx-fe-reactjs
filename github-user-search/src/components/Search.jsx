import React, { useState } from 'react';
import { fetchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await fetchUsers({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Advanced GitHub User Search</h1>
      <form
        onSubmit={handleSearch}
        className="grid gap-4 md:grid-cols-3 items-end bg-white shadow-md rounded-md p-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Min Repositories</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <div className="md:col-span-3">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">Something went wrong.</p>}

        {users.length > 0 && (
          <ul className="grid gap-4 mt-4">
            {users.map((user) => (
              <li key={user.id} className="p-4 border rounded shadow-sm">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{user.login}</h2>
                    <p>Score: {user.score}</p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
