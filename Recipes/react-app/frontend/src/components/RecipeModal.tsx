import { useState, useEffect } from "react";
import { RecipeSummary } from "./types";
import * as RecipeAPI from "./API";

interface Props{
  recipeId:string;
  onClose:()=>void;
}


function RecipeModal({recipeId,onClose}:Props) {

  const [recipeSummary, setRecipeSummary] = useState<RecipeSummary>();
  useEffect(() => {
    const fetchRecipeSummary = async () => {
      try {
        const summaryRecipe = await RecipeAPI.getRecipeSummary(recipeId);
        setRecipeSummary(summaryRecipe);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipeSummary();
  },[recipeId]);

  if (!recipeSummary) {
    return <></>;
  }
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{recipeSummary.title}</h2>
            <span className="cursor-pointer" onClick={onClose}>&times;</span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: recipeSummary.summary }}></p>
        </div>
      </div>
    </>
  );
}

export default RecipeModal;
