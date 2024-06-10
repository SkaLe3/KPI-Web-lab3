import React from "react";
import HeaderOne from "../components/HeaderOne/HeaderOne";
import Footer from "../components/Footer/Footer";
import SignInUser from "../components/SignIn/SignInUser";

function SignIn({ signInFunc }) {
  return (
    <div>
      <HeaderOne />
      <SignInUser signInFunc={signInFunc} />
      <Footer />
    </div>
  );
}

export default SignIn;
