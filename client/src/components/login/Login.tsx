import React, { useState } from "react";
import { AppContext } from './../../AppContext';
import { LoginComponent } from "./LoginComponent";
import './_login.scss';


// https://codepen.io/Mr_Dzi/pen/WpeYNQ

export const enum LoginTypes {
  SIGNIN = 'signin',
  SIGNUP = 'signup'

}

interface loginContextType {
  mode: LoginTypes,
  changeMode: (value: LoginTypes) => void
}

export const LoginContext = React.createContext<loginContextType>({
  mode: LoginTypes.SIGNIN,
  changeMode: () => { },
});

export const Login = () => {

  const [mode, setMode] = useState(LoginTypes.SIGNIN);

  const context = React.useContext(AppContext)
  const { isUserLogged, loginVisible, loginMode, changeLoginMode } = context;


  if (!loginVisible) {
    return null
  }


  return (
    <div className="gpt__login-wrapper">
      <LoginComponent />
    </div>

  )
}