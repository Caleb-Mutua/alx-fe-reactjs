import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      className=" .mb-4 .mb-8 p-6 bg-white rounded-lg shadow-md"
      onChange={(e) => setSearchTerm(e.target.value)}
   
    />
  );
};

export default SearchBar;