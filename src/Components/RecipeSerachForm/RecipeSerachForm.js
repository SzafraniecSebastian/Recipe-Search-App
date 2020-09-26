import React from "react";
import classes from "./RecipeSerachForm.module.css";

const RecipesSearchForm = ({ getRecipe }) => {
  return (
    <form onSubmit={getRecipe}>
      <input
        type="text"
        name="recipeSearch"
        placeholder="please type dish name"
      />
      {/* <label htmlFor="dishPrepareTime">How fast you need your dish</label> */}
      <select name="dishPrepareTime" id="dishPrepareTime">
        <option value="fast">Fast - Max 30 min</option>
        <option value="medium">Medium - from 30 min up to 60min</option>
        <option value="low">Low - over 60 min</option>
      </select>
      <button className={classes.button}>Search</button>
    </form>
  );
};

export default RecipesSearchForm;
