import React from "react";
import { RiCloseLine } from 'react-icons/ri';
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
      <div className="form-group__validation">
        <RiCloseLine className="xBtn--validation" onClick={() => setServerSigninMessage("")} />
        <span> {serverSigninMessage}</span>

        <div onClick={handleForgotPwd} className="button">Forgot password</div>
      </div>
    </>
  )
}