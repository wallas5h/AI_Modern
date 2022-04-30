import React, { useEffect, useState } from "react";
import { AppContext } from './../../AppContext';
import { LoginComponent } from "./LoginComponent";
import './_login.scss';


// https://codepen.io/Mr_Dzi/pen/WpeYNQ

export const enum LoginTypes {
  SIGNIN = 'signin',
  SIGNUP = 'signup'

}


export const Login = () => {

  const context = React.useContext(AppContext)
  const { isUserLogged, loginVisible } = context;

  // const isUserLogged = true;
  // const loginVisible = false;

  const [mode, setMode] = useState(LoginTypes.SIGNIN);

  useEffect(() => {
    if (!isUserLogged) {
      setMode(LoginTypes.SIGNIN)
    }
    else {
      setMode(LoginTypes.SIGNUP)
    }
  }, [loginVisible])

  if (!loginVisible) {
    return null
  }

  const changeMode = (value: LoginTypes) => {
    setMode(value)
  }

  return (

    <div className="gpt__login-wrapper">
      <LoginComponent mode={mode} changeMode={changeMode} />
    </div>

  )
}