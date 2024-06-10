import React from "react";
import HeaderOne from "../components/HeaderOne/HeaderOne";
import Footer from "../components/Footer/Footer";
import Create from "../components/Create/Create";
import styles from "./Style.module.css";
import { useState } from "react";
import Products from "../components/Products/Products";
import About from "../components/About/About";

function MainForm({ createProductFunc }) {
  return (
    <div>
      <HeaderOne />
      <Create createProductFunc={createProductFunc} />
      <Footer />
    </div>
  );
}

export default MainForm;
