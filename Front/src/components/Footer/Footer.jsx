import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTwo}>
        <img src="https://github.com/SkaLe3/KPI-Web-labs/blob/main/assets/skale-high-resolution-logo-white-transparent.png?raw=true" />
      </div>
      <div className={styles.footerThree}>
        <div className={styles.footerThreeOne}>
          <Link to="/home" className={styles.home}>
            OVERVIEW
          </Link>
          <Link to="/home" className={styles.home}>
            Home
          </Link>
          <Link to="/home" className={styles.home}>
            About
          </Link>
          <Link to="/home" className={styles.home}>
            Login
          </Link>
        </div>
        <div className={styles.footerThreeOne}>
          <Link to="/home" className={styles.home}>
            ABOUT US
          </Link>
          <h6>© 2024 SkaLeSync Corporation. All rights reserved.</h6>
        </div>
        <div className={styles.footerThreeOne}>
          <Link to="/home" className={styles.home}>
            FOLLOW US
          </Link>
          <Link to="/home" className={styles.home}>
            Twitter
          </Link>
          <Link to="/home" className={styles.home}>
            Facebook
          </Link>
          <Link to="/home" className={styles.home}>
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
