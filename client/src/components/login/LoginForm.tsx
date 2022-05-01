
import React from "react";
import { AppContext } from './../../AppContext';
import { LoginTypes } from "./Login";
import './sass/_loginForm.scss';
import { SignInForm } from "./SigninForm";
import { SignUpForm } from "./SignupForm";


interface PropsInput {
  type: string,
  id: string,
  label: string,

}

export const Input = ({ id, type, label }: PropsInput) => (
  <input className="form-group__input" type={type} id={id} placeholder={label} required={true} />
);



export const LoginForm = () => {

  const context = React.useContext(AppContext);
  const { loginMode, changeLoginMode } = context;

  return (
    <>
      {loginMode === LoginTypes.SIGNIN ? <SignInForm /> : <SignUpForm />}
    </>
  )
}

