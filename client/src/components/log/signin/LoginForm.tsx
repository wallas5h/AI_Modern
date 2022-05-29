
import React from "react";
import { AppContext } from "../../../AppContext";
import '../sass/_loginForm.scss';
import { SignUpForm } from "../signup/SignupForm";
import { LogTypes } from "./Login";
import { SignInForm } from "./SigninForm";


export const LoginForm = () => {

  const { loginMode } = React.useContext(AppContext);

  return (
    <>
      {loginMode === LogTypes.SIGNIN ? <SignInForm /> : <SignUpForm />}
    </>
  )
}


