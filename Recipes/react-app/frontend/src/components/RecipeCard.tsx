import { Recipe } from "./types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
interface Props {
  recipe: Recipe;
  isFav: boolean;
  onClick: () => void;
  onFavBtnClick: (recipe: Recipe) => void;
}

function RecipeCard({ recipe, onClick, onFavBtnClick, isFav }: Props) {
  return (
    <div
      className="relative recipe-card flex flex-col rounded-b-lg bg-sky-600
     hover:bg-sky-800 duration-500"
      onClick={onClick}
    >
      <img className="first-letter:" alt="card-img" src={recipe.image} />
      <span
        className="absolute z-5 cursor-pointer  
        right-0 top-0 m-2 text-sky-700"
        onClick={(e) => {
          e.stopPropagation();
          onFavBtnClick(recipe);
        }}
      >
        {isFav ? (
          <AiFillHeart size={30} color="rgb(7, 89 ,253)" />
        ) : (
          <AiOutlineHeart size={30} />
        )}
      </span>
      <h3
        className="my-1
text-center text-white text-[17px]"
      >
        {recipe.title}
      </h3>
    </div>
  );
}

export default RecipeCard;
