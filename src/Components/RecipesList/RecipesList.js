import React from "react";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../../Helper/helpers";
import classes from "./RecipesList.module.css";

const RecipesList = ({ inputValue, dishPrepareTime }) => {
  console.log(dishPrepareTime);
  return (
    <ul className={classes.recipesWrapper}>
      {inputValue.map(recipe => {
        switch (dishPrepareTime) {
          case "fast":
            if (recipe.readyInMinutes < 30) {
              return (
                <Link
                  to={{
                    pathname: `/recipe/${recipe.title.replace(/\s/g, "")}`,
                    state: {
                      recipeName: recipe.title,
                      recipeImage: `${baseImageUrl}${recipe.image}`,
                      readyTime: recipe.readyInMinutes,
                      recipeSourceUrl: recipe.sourceUrl
                    }
                  }}
                >
                  <li key={recipe.id} className={classes.singleRecipeWrapper}>
                    <img src={`${baseImageUrl}${recipe.image}`} />
                    <div className={classes.dishDetailsWrapper}>
                      <p className={classes.recipeTitle}>{recipe.title}</p>
                      <p className={classes.recipeTime}>
                        Time: {recipe.readyInMinutes} minutes
                      </p>
                    </div>
                    <button>Go to recipe</button>
                  </li>
                </Link>
              );
            }
            break;

          case "medium":
            if (recipe.readyInMinutes > 30 && recipe.readyInMinutes <= 60) {
              return (
                <Link
                  to={{
                    pathname: `/recipe/${recipe.title.replace(/\s/g, "")}`,
                    state: {
                      recipeName: recipe.title,
                      recipeImage: `${baseImageUrl}${recipe.image}`,
                      readyTime: recipe.readyInMinutes,
                      recipeSourceUrl: recipe.sourceUrl
                    }
                  }}
                >
                  <li key={recipe.id} className={classes.singleRecipeWrapper}>
                    <img src={`${baseImageUrl}${recipe.image}`} />
                    <div className={classes.dishDetailsWrapper}>
                      <p className={classes.recipeTitle}>{recipe.title}</p>
                      <p>Time: {recipe.readyInMinutes} minutes</p>
                    </div>
                    <button>Go to recipe</button>
                  </li>
                </Link>
              );
            }
            break;

          case "low":
            if (recipe.readyInMinutes > 60) {
              return (
                <Link
                  to={{
                    pathname: `/recipe/${recipe.title.replace(/\s/g, "")}`,
                    state: {
                      recipeName: recipe.title,
                      recipeImage: `${baseImageUrl}${recipe.image}`,
                      readyTime: recipe.readyInMinutes,
                      recipeSourceUrl: recipe.sourceUrl
                    }
                  }}
                >
                  <li key={recipe.id} className={classes.singleRecipeWrapper}>
                    <img src={`${baseImageUrl}${recipe.image}`} />
                    <div className={classes.dishDetailsWrapper}>
                      <p className={classes.recipeTitle}>{recipe.title}</p>
                      <p>Time: {recipe.readyInMinutes} minutes</p>
                    </div>
                    <button>Go to recipe</button>
                  </li>
                </Link>
              );
            }
            break;

          default:
            console.log("Sorry We can't load");
        }
      })}
    </ul>
  );
};

export default RecipesList;
