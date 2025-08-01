import React, { useState } from 'react';
import { fetchUserData } from '../services/github';

function Search() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: '1rem' }}>
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we can't find the user.</p>}
        {user && (
          <div>
            <img
              src={user.avatar_url}
              alt={user.login}
              width="100"
              style={{ borderRadius: '50%' }}
            />
            <h3>{user.name || user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
