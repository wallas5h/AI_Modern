import React, { useState } from "react";
import { AppContext } from '../../../AppContext';
import '../sass/_login.scss';
import { LogContext } from "./LogContext";
import { LoginComponent } from "./LoginComponent";


export const enum LogTypes {
  SIGNIN = 'signin',
  SIGNUP = 'signup'

}



export const Login = () => {

  const { loginVisible } = React.useContext(AppContext);

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
    <LogContext.Provider value={{
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
    </LogContext.Provider>
  )
}