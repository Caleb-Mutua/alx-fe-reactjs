import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter recipes by title or description
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Check if a recipe is a favorite
  const isFavorite = (id) => favorites.some((fav) => fav?.id === id);

  return (
    <div  className="mb-8 p-6 bg-white rounded-lg shadow-md" >
      <h2 className= "text-2xl font-semibold text-gray-700 mb-4">All Recipes</h2>

      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </Link>
            </div>

            <button
              onClick={() => toggleFavorite(recipe.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.5rem',
                color: isFavorite(recipe.id) ? 'red' : 'gray',
              }}
              title={isFavorite(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite(recipe.id) ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
