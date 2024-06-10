import React from "react";
import HeaderOne from "../components/HeaderOne/HeaderOne";
import Footer from "../components/Footer/Footer";
import Create from "../components/Create/Create";
import AboutInfo from "../components/About/About";

function About(props) {
  return (
    <div>
      <HeaderOne />
      <AboutInfo />
      <Footer />
    </div>
  );
}

export default About;
