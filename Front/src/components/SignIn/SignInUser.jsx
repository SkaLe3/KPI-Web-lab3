import React, { useState } from "react";
import styles from "./SignInUser.module.css"; // Путь к CSS модулю

function SignInUser({ signInFunc }) {
  return (
    <div className={styles.centerContainer}>
      <section className={styles.mainSection}>
        <h5 className="text-center text-white font-weight-bold mb-3">Log In</h5>
        <form className={styles.mainForm}>
          <div className={styles.form_group}>
            <label
              htmlFor="email"
              className="text-white font-special font-weight-bold"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control mb-2 ssc-input border-0 font-sm py-2 text-white"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className={styles.form_group}>
            <label
              htmlFor="password"
              className="text-white font-special font-weight-bold"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control mb-2 ssc-input border-0 font-sm py-2 text-white"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className={styles.secondForm}>
            <button
              type="button"
              className="btn ssc-btn-accent w-100 font-heading mt-3"
            >
              create account
            </button>
            <hr className="mx-4 my-3 default-divider" />
            <p className="font-special text-light-grey text-center font-xsm">
              Don't have an account?
            </p>
            <a
              href="login.html"
              className="nav-link nav-link-login mt-3 font-heading text-light-grey text-center"
            >
              CREATE ACCOUNT
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SignInUser;
