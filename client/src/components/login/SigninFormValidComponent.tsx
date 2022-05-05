import React from "react";
import { RiCloseLine } from 'react-icons/ri';
import { LoginContext } from "./LoginContext";
import './sass/_loginForm.scss';



export const SigninFormValidationComponent = () => {

  const { serverSigninMessage, setServerSigninMessage, changeResetPassword } = React.useContext(LoginContext);

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