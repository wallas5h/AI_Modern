import React from "react";
import { RiCloseLine } from 'react-icons/ri';
import { LoginContext } from "./LoginContext";
import './sass/_loginForm.scss';



export const SigninFormValidationComponent = () => {

  const loginContext = React.useContext(LoginContext);
  const { serverSigninMessage, setServerSigninMessage, changeResetPassword } = loginContext

  return (
    <>
      <div className="form-group__validation">
        <RiCloseLine className="xBtn--validation" onClick={() => setServerSigninMessage("")} />
        <span> {serverSigninMessage}</span>

        <div onClick={() => changeResetPassword(true)} className="button">Forgot password</div>
      </div>
    </>
  )
}