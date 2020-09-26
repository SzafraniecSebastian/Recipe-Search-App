import React, { useState } from "react";
import RecipesList from "./Components/RecipesList/RecipesList";
import RecipesSearchForm from "./Components/RecipeSerachForm/RecipeSerachForm";
import axios from "axios";

import classes from "./App.module.css";
import Navbar from "./navigations/Navbar/Navbar";

const App = () => {
  const [inputValue, setInputValue] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState();
  const [isRecipesLoaded, setIsRecipesLoaded] = useState(false);
  const [dishPrepareTime, setDishPrepareTime] = useState();

  const getRecipe = e => {
    e.preventDefault();
    const inputValue = e.target.recipeSearch.value;
    setSearchInputValue(inputValue);
    const inputDishTimeValue = e.target.dishPrepareTime.value;
    setDishPrepareTime(inputDishTimeValue);

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=ebf6a42fb05545d093776da0262716d5&query=${inputValue}&number=100`
      )
      .then(res => {
        setInputValue([...res.data.results]);
        setIsRecipesLoaded(true);
      });

    // e.target.reset();
  };

  let information = null;
  if (isRecipesLoaded) {
    information = (
      <h1>Below please find delicious {searchInputValue} recipes</h1>
    );
  }

  return (
    <>
      <Navbar />
      <div className={classes.mainWrapper}>
        <div className={classes.contentWrapper}>
          <RecipesSearchForm getRecipe={getRecipe} />
          {information}
          <RecipesList
            inputValue={inputValue}
            dishPrepareTime={dishPrepareTime}
          />
        </div>
      </div>
    </>
  );
};

export default App;
