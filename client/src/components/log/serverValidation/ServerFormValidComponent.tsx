import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import { LogContext } from "../signin/LogContext";
import { SigninFormValidationComponent } from "../signin/SigninFormValidComponent";

interface Props {
  serverMessage: string | null;
  setServerMessage: (value: string | null) => void
}

export const ServerFormValidationComponent = ({ serverMessage, setServerMessage }: Props) => {

  const { changeLoginVisible } = useContext(AppContext);
  const { changeResetPassword, serverSigninMessage } = useContext(LogContext);

  const handleClick = () => {

    changeResetPassword(false);
    changeLoginVisible(false);
    setServerMessage(null);
  }


  return (
    <div className="form-group__validation--server">

      <span> {serverMessage}</span>
      {serverSigninMessage === 'Incorrect e-mail or password. ' && <SigninFormValidationComponent />}
      <button className="button button--primary full-width" onClick={handleClick}>OK</button>
    </div>
  )
}