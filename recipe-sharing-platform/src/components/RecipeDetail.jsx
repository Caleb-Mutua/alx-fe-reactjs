import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching the recipe from data.json
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold">Recipe not found</h2>
        <Link
          to="/"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        {recipe.ingredients && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">📝 Ingredients</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}

        {recipe.instructions && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">👩‍🍳 Instructions</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
