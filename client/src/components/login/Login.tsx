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
  const [resetPasword, setResetPassword] = useState<boolean>(false);
  const [serverSignupMessage, setServerSignupMessage] = useState<string | null>(null);
  const [serverSigninMessage, setServerSigninMessage] = useState<string | null>(null)



  const changeLoadingLogData = (value: boolean) => {
    setLoading(value)
  }

  const changeResetPassword = (value: boolean) => {
    setResetPassword(value)
  }

  if (!loginVisible) {
    return null
  }

  return (
    <LoginContext.Provider value={{
      loadingLogData: loading,
      changeLoadingLogData,
      serverSignupMessage,
      setServerSignupMessage,
      serverSigninMessage,
      setServerSigninMessage,
      resetPasword,
      changeResetPassword
    }}>
      <div className="gpt__login-wrapper">
        <LoginComponent />
      </div>
    </LoginContext.Provider>
  )
}