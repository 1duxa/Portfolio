const API_KEY = "8d84846e1f3948c49bfd7b18f726311c";

export const searchRecipes = async (searchTerm: string, page: number) => {
  if (!API_KEY) {
    throw new Error("API key not found");
  }

  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

  const queryParams = {
    apiKey: API_KEY,
    query: searchTerm,
    number: "10",
    offset: ((page - 1) * 10).toString(),
  };

  url.search = new URLSearchParams(queryParams).toString();

  try {
    const searchResponse = await fetch(url.toString());
    const resultsJson = await searchResponse.json();
    return resultsJson;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipesummary = async (recipeId: string) => {
  if (!API_KEY) {
    throw new Error("API KEY NOT FOUND SUMMARY");
  }

  const url = new URL(
    `https://api.spoonacular.com/recipes/${recipeId}/summary`
  );

  const params = {
    apiKey: API_KEY,
  };
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const getFvouriteRecipes= async (ids: string[]) => {
  if (!API_KEY) {
    throw new Error("API KEY NOT FOUND FAVOURITES");
  }
const url=new URL("https://api.spoonacular.com/recipes/informationBulk")
const params ={
  apiKey:API_KEY,
  ids:ids.join(",")
}
url.search=new URLSearchParams(params).toString();
const searchResponse = await fetch(url);
const json = await searchResponse.json()
return {results:json};
};
