import React from "react";
import '../sass/_loginForm.scss';
import { LogContext } from "./LogContext";



export const SigninFormValidationComponent = () => {

  const { serverSigninMessage, setServerSigninMessage, changeResetPassword } = React.useContext(LogContext);

  const handleForgotPwd = () => {
    changeResetPassword(true);
    setServerSigninMessage("");
  }

  return (
    <>
      <div >

        <div onClick={handleForgotPwd} className="button">Forgot password</div>
      </div>
    </>
  )
}