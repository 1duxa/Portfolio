import { FormEvent, useEffect, useRef, useState } from "react";
import * as API from "./components/API";
import { Recipe } from "./components/types";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";

type Tabs = "search" | "favourites";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(
    undefined
  );
  const [selectedTab, setSelectedTab] = useState<Tabs>("search");
  const [favRecipe, setFavRecipe] = useState<Recipe[]>([]);

  const pageNumber = useRef(1);

  useEffect(() => {
    const fetchFavRecipes = async () => {
      try {
        const favRecipes = await API.getFavouriteRecipes();
        setFavRecipe(favRecipes.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavRecipes();
  }, []);

  const handleSearchSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const results = await API.searchRecipes(searchTerm, 1);

      setRecipes(results.results);
      pageNumber.current = 1;
    } catch (error) {
      console.log("Ne baza");
      console.error(error);
    }
  };
  const handleViewMore = async () => {
    const nextPage = pageNumber.current + 1;

    try {
      const nextRecipes = await API.searchRecipes(searchTerm, nextPage);
      setRecipes([...recipes, ...nextRecipes.results]);
      pageNumber.current = nextPage;
    } catch (error) {
      console.log(error);
    }
  };
  const addFavRecipe = async (recipe: Recipe) => {
    try {
      await API.addFavRecipe(recipe);
      setFavRecipe([...favRecipe, recipe]);
    } catch (error) {
      console.log(error);
    }
  };
  const removeFavRecipe = async (recipe: Recipe) => {
    try {
      await API.removeFavRecipe(recipe);

      const updRecipes = favRecipe.filter(
        (favRecipes) => recipe.id != favRecipes.id
      );
      setFavRecipe(updRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-blueNav-900 min-h-screen">
      <Navbar />
      <div className="bg-blueNav-900 max-w-[1200px] m-auto">
        <div className="flex flex-col items-center ">
          <Hero />
          <div className="mt-7 mb-1 flex text-white gap-10 text-[24px]">
            <h1
              className="focus:border-blueNav-700 border-b-4 border-sky-500 cursor-pointer"
              onClick={(e) => {
                e.preventDefault;
                setSelectedTab("search");
              }}
              tabIndex={selectedTab === "search" ? 1 : 0}
            >
              Recipe Search
            </h1>
            <h1
              className="focus:border-blueNav-700 border-b-4 border-sky-500 cursor-pointer"
              onClick={(e) => {
                e.preventDefault;
                setSelectedTab("favourites");
              }}
              tabIndex={selectedTab === "favourites" ? 1 : 0}
            >
              Favourites
            </h1>
          </div>
          {selectedTab === "search" && (
            <>
              <form
                onSubmit={(e) => handleSearchSubmit(e)}
                className="flex gap-3 justify-center 
       items-center w-full px-4 my-5"
              >
                <input
                  type="text"
                  required
                  placeholder="Enter a search term"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-2xl bg-sky-600
         h-[45px] rounded-lg outline-none w-[70%]
          text-center text-white flex-1 placeholder-white
          border-b-4 border-blue-900"
                ></input>

                <button
                  className="bg-blueNav-700 text-white
            rounded-lg flex-[0.3] h-[45px] text-[20px]
            hover:bg-sky-600 duration-[.5s]
            border-b-4 border-blue-900"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <div className="grid  grid-cols-3 md:grid-cols-5 px-4 gap-4 ">
                {recipes.map((recipe: Recipe) => {
                  const isFav = favRecipe.some(
                    (favRecipe) => recipe.id === favRecipe.id
                  );

                  return (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      onClick={() => setSelectedRecipe(recipe)}
                      onFavBtnClick={isFav ? removeFavRecipe : addFavRecipe}
                      isFav={isFav}
                    />
                  );
                })}
              </div>
              <button
                className="bg-blueNav-700 text-white
                rounded-lg my-4 w-[150px] h-[45px] text-[20px]
                hover:bg-sky-600 duration-[.5s]
                border-b-4 border-blue-900"
                onClick={handleViewMore}
              >
                View more
              </button>
            </>
          )}
          {selectedTab === "favourites" && (
            <div className="my-4 grid  grid-cols-3 md:grid-cols-5 px-4 gap-4 ">
              {favRecipe.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => setSelectedRecipe(recipe)}
                  onFavBtnClick={removeFavRecipe}
                  isFav={true}
                />
              ))}
            </div>
          )}
          {selectedRecipe && (
            <RecipeModal
              recipeId={selectedRecipe.id.toString()}
              onClose={() => setSelectedRecipe(undefined)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
