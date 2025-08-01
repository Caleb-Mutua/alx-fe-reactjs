import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [query, setQuery] = React.useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub user"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  
  export default SearchBar;
  