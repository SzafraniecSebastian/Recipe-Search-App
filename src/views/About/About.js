import React from "react";
import Navbar from "../../navigations/Navbar/Navbar";
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={classes.aboutMainWrapper}>
        <div className={classes.aboutContentWrapper}>
          <p className={classes.aboutParagraph}>
            This aplication is designed to search dishes receipes
          </p>
          <p className={classes.aboutParagraph}>
            It uses Spoonacular recipe and food API
          </p>
          <p className={classes.aboutParagraph}>
            It was build with REACT.js with hooks, styling is done by modules.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
