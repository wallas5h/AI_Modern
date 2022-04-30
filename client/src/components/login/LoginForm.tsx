// import { Input } from "./Input";
import React from "react";
import { AppContext } from './../../AppContext';
import { LoginTypes } from "./Login";
import './_loginForm.scss';


interface PropsInput {
  type: string,
  id: string,
  label: string,

}

export const Input = ({ id, type, label }: PropsInput) => (
  <input className="form-group__input" type={type} id={id} placeholder={label} />
);

interface Props {
  mode: string
  changeMode: (value: LoginTypes) => void
}

export const LoginForm = () => {

  const context = React.useContext(AppContext);
  const { loginMode, changeLoginMode } = context;

  return (
    <>

      <form > {/* onSubmit={} */}
        <div className="form-block__input-wrapper">

          {loginMode === LoginTypes.SIGNIN ? <SingInForm /> : <SingUpForm />}

        </div>
        <button className="button button--primary full-width" type="submit">{loginMode === LoginTypes.SIGNIN ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </>
  )
}

const SingInForm = () => {

  return (
    <>
      <div className="form-group form-group--signin">
        <Input type="text" id="username" label="user name" />
        <Input type="password" id="password" label="password" />
      </div>
    </>
  )
}

const SingUpForm = () => {

  return (
    <>
      <div className="form-group form-group--signin">
        <Input type="text" id="fullname" label="full name" />
        <Input type="email" id="email" label="email" />
        <Input type="password" id="createpassword" label="password" />
        <Input type="password" id="repeatpassword" label="repeat password" />
      </div>
    </>
  )
}