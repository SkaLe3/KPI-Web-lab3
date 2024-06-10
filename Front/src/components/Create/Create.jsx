import React, { useState } from "react";
import styles from "./Create.module.css";
import { Link } from "react-router-dom";

function Create({ createProductFunc }) {
  return (
    <div className={styles.main}>
      <section id="home" className={styles.firstSection}>
        <div className={styles.firstDiv}>
          <img
            className={styles.bigLogo}
            src="https://github.com/SkaLe3/KPI-Web-labs/blob/main/assets/skale-high-resolution-logo-white-transparent.png?raw=true"
            alt="Logo"
          />
          <h1
            className={`${styles.textLight} ${styles.fontWeightBoldd} ${styles.fontHuge}`}
          >
            Welcome to SkaLe Ratings
          </h1>
          <h4
            className={`${styles.textLight} py-3 ${styles.fontWeightBoldd} ${styles.fontLg}`}
          >
            Find the best game for you!
            <br />
            Be aware of new releases, give your reviews, and help the industry
            grow!
          </h4>
          <p>
            <Link to="/products" className={styles.products}>
              START BROWSING NOW!
            </Link>
          </p>
        </div>
        <div className={styles.secondDiv}>
          <img
            src="https://github.com/SkaLe3/KPI-Web-labs/blob/main/assets/home_img.png?raw=true"
            alt="Home Image"
          />
        </div>
      </section>
      <section className={styles.secondSection}>
        <div className={styles.thirdDiv}>
          <div className={styles.opt}>
            <span
              className={`badge rounded-pill ${styles.sscBgPrimary} border w-75`}
            >
              <h6 className="pt-2">Users Registered</h6>
              <h5 className={styles.fontWeightBold}>41990</h5>
            </span>
            <div className="d-md-none my-3"></div>
          </div>
          <div className={styles.opt}>
            <span
              className={`badge rounded-pill ${styles.sscBgPrimary} border w-75`}
            >
              <h6 className="pt-2">Total Reviews</h6>
              <h5 className={styles.fontWeightBold}>84117</h5>
            </span>
            <div className="d-md-none my-3"></div>
          </div>
          <div className={styles.opt}>
            <span
              className={`badge rounded-pill ${styles.sscBgPrimary} border w-75`}
            >
              <h6 className="pt-2">Total Games</h6>
              <h5 className={styles.fontWeightBold}>1223</h5>
            </span>
            <div className="d-md-none my-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Create;
