import React from "react";
import HeaderOne from "../components/HeaderOne/HeaderOne";
import Footer from "../components/Footer/Footer";
import SignUpUser from "../components/SignUp/SignUpUser";

function SignUp({ signUpFunc }) {
  return (
    <div>
      <HeaderOne />
      <SignUpUser signUpFunc={signUpFunc} />
      <Footer />
    </div>
  );
}

export default SignUp;
