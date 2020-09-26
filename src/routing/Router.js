import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import About from "../views/About/About";
import SingleRecipe from "../views/SingleRecipe/SingleRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route path="/recipe/:title" component={SingleRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
