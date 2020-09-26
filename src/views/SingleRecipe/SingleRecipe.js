import React from "react";
import classes from "./SingleRecipe.module.css";
import clockIcon from "../../Assets/icons/clock.png";
import backIcon from "../../Assets/icons/back.png";
import { Link } from "react-router-dom";

const SingleRecipe = props => {
  console.log(props);
  const {
    recipeName,
    recipeImage,
    readyTime,
    recipeSourceUrl
  } = props.location.state;

  return (
    <div className={classes.singleRecipeMainWrapper}>
      <div className={classes.singleRecipeContentWrapper}>
        <h1 className={classes.recipeName}>{recipeName}</h1>
        <Link to="/" className={classes.backToAppLink}>
          <img src={backIcon} alt="back to home" className={classes.backIcon} />
          <p>Back to Home</p>
        </Link>
        <img src={recipeImage} alt={recipeName} className={classes.img} />
        <div className={classes.readyTimeWrapper}>
          <img src={clockIcon} alt="ready time" className={classes.clockIcon} />
          <p> : {readyTime} min</p>
        </div>
        <p className={classes.recipeDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          magni labore itaque illum obcaecati commodi est. Ratione harum
          pariatur dolorem ea eius suscipit sequi error quo vel obcaecati
          quibusdam, officiis aliquam id ex omnis illo, adipisci, nulla numquam.
          Ea voluptate nisi quam fugiat fuga id illo vitae? Magni, quidem
          cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nesciunt illum cupiditate rerum atque ipsum et, error corporis labore
          nemo amet!
        </p>

        <a href={recipeSourceUrl} target="_blank">
          <button className={classes.goToRecipeButton}>
            Go to this recipe
          </button>
        </a>
      </div>
    </div>
  );
};

export default SingleRecipe;
