// Header.jsx
import { Link } from "react-router-dom";

import React from "react";
import styles from "./HeaderOne.module.css";

function HeaderOne(props) {
  return (
    <div className={styles.headerMainOne}>
      <div className={styles.optionOne}>
        <img src="https://github.com/SkaLe3/KPI-Web-labs/blob/main/assets/skale-high-resolution-logo-white-transparent.png?raw=true" />
        <Link to="/home" className={styles.home}>
          HOME
        </Link>
        <Link to="/about" className={styles.about}>
          ABOUT
        </Link>
      </div>
      <div className={styles.optionOne}>
        <Link to="/signUp" className={styles.signUp}>
          CREATE ACCOUNT
        </Link>
        <Link to="/signIn" className={styles.signIn}>
          LOGIN
        </Link>
      </div>
    </div>
  );
}

export default HeaderOne;
