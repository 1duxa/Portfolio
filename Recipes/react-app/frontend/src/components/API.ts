import { Recipe } from "./types";

export const searchRecipes = async (searchTerm: string, page: number) => {
  const baseURL = new URL("http://localhost:5000/api/recipe/search");
  baseURL.searchParams.append("searchTerm", searchTerm);
  baseURL.searchParams.append("page", String(page));

  const response = await fetch(baseURL);

  if (!response.ok) {
    throw new Error(`HTTP ERROR : ${response.status}`);
  }

  return response.json();
};

export const getRecipeSummary = async (recipeId: string) => {
  const url = new URL(`http://localhost:5000/api/recipes/${recipeId}/summary`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ERROR! STATUS ${response.status}`);
  }

  return response.json();
};

export const getFavouriteRecipes = async () => {
  const url = new URL("http://localhost:5000/api/recipes/favourite");
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP get FAV REC ERROR : ${response.status}`);
  }

  return response.json();
};

export const addFavRecipe = async (recipe: Recipe) => {
  const url = new URL("http://localhost:5000/api/recipes/favourite");
  const body = {
    recipeId: recipe.id,
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`HTTP add FAV REC ERROR : ${response.status}`);
  }
};

export const removeFavRecipe = async (recipe: Recipe) => {
  const url = new URL("http://localhost:5000/api/recipes/favourite");
  const body = {
    recipeId: recipe.id,
  };
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`HTTP delete FAV REC ERROR : ${response.status}`);
  }
};
