import React from "react";
import HeaderOne from "../components/HeaderOne/HeaderOne";
import Footer from "../components/Footer/Footer";
import Create from "../components/Create/Create";
import Products from "../components/Products/Products";

function ProductsInfo({ addGameFunc, info }) {
  return (
    <div>
      <HeaderOne />
      <Products addGameFunc={addGameFunc} info={info} />
      <Footer />
    </div>
  );
}

export default ProductsInfo;
