import React from "react";
import styles from "./SignUpUser.module.css";
import { useState } from "react";

function SignUpUser() {
  return (
    <div className={styles.centerContainer}>
      <section className={styles.mainSection}>
        <h5 className="text-center text-white font-weight-bold mb-3">
          Create account
        </h5>
        <form className={styles.mainForm}>
          <div className={styles.form_group}>
            <label
              htmlFor="username"
              className="text-white font-special font-weight-bold"
            >
              Username
            </label>
            <input
              type="text"
              className="form-control mb-2 ssc-input border-0 font-sm py-2 text-white"
              id="username"
              placeholder="Enter username"
            />
          </div>
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
          <div className={styles.form_group}>
            <label
              htmlFor="dob"
              className="text-white font-special font-weight-bold"
            >
              Date Of Birth
            </label>
            <div className="container-fluid p-0">
              <div className={styles.date_row}>
                <div className="col-4 pe-1">
                  <select
                    className="form-control mb-2 ssc-input border-0 font-sm py-2 text-white"
                    id="day"
                  >
                    <option selected>dd</option>
                    {[...Array(31).keys()].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-4 px-1">
                  <select
                    className="form-control mb-2 ssc-input border-0 font-sm py-2 text-white"
                    id="month"
                  >
                    <option selected>mm</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-4 ps-1">
                  <select
                    className="form-control mb-2 ssc-input border-0 font-sm py-2 text-white"
                    id="year"
                  >
                    <option selected>yyyy</option>
                    {Array.from({ length: 50 }, (_, i) => 1975 + i)
                      .reverse()
                      .map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form_group}>
            <label
              htmlFor="gender"
              className="text-white font-special font-weight-bold"
            >
              Gender
            </label>
            <select
              className="form-control mb-2 ssc-input border-0 font-sm py-2 text-white"
              id="SelectGender"
            >
              <option selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Deer">Deer</option>
            </select>
          </div>
          <div className={styles.secondForm}>
            <div className="form-check ms-1">
              <input
                className="form-check-input ssc-bg-secondary ssc-checkbox"
                type="checkbox"
                id="exampleCheckbox"
              />
              <label
                className="form-check-label text-light-grey font-xsm font-low ms-3"
                htmlFor="exampleCheckbox"
              >
                I consent to SkaLe Ratings to use my personal data to send me
                direct marketing communications (such as newsletters,
                promotional emails (including partner promotions), event
                updates, and suggestions).
              </label>
            </div>
            <button
              type="button"
              className="btn ssc-btn-accent w-100 font-heading mt-3"
            >
              create account
            </button>
            <p className="font-special text-light-grey text-center font-xsm mt-1">
              By signing up to our service, you agree to our Terms & Conditions
            </p>
            <hr className="mx-4 my-3 default-divider" />
            <p className="font-special text-light-grey text-center font-xsm">
              Already registered?
            </p>
            <a
              href="login.html"
              className="nav-link nav-link-login mt-3 font-heading text-light-grey text-center"
            >
              LOG IN
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SignUpUser;
