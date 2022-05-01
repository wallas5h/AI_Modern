import React, { useState } from "react";
import { AppContext } from './../../AppContext';
import { LoginComponent } from "./LoginComponent";
import { LoginContext } from "./LoginContext";
import './sass/_login.scss';


export const enum LoginTypes {
  SIGNIN = 'signin',
  SIGNUP = 'signup'

}



export const Login = () => {

  const context = React.useContext(AppContext)
  const { isUserLogged, loginVisible, loginMode, changeLoginMode } = context;

  const [loading, setLoading] = useState<boolean>(false);


  const changeLoadingLogData = (value: boolean) => {
    setLoading(value)
  }

  if (!loginVisible) {
    return null
  }

  return (
    <LoginContext.Provider value={{
      loadingLogData: loading,
      changeLoadingLogData
    }}>
      <div className="gpt__login-wrapper">
        <LoginComponent />
      </div>
    </LoginContext.Provider>
  )
}