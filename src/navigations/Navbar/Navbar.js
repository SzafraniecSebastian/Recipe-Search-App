import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={classes.menuWrapper}>
        <li className={classes.link}>
          <NavLink exact to="/" activeClassName={classes.activeNavLink}>
            Home
          </NavLink>
        </li>
        <li className={classes.link}>
          <NavLink exact to="/about" activeClassName={classes.activeNavLink}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
