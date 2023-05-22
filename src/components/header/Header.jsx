import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="Logo.svg" alt="logo" />
      </div>

      <div className={styles.search_bar}>
        <input type="text" placeholder=" Search a Query/Question" />
      </div>

      <nav className={styles.navigation_btns}>
        <NavLink to="/questions">All Questions</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/login">Login/Signup</NavLink>
      </nav>
    </div>
  );
}
