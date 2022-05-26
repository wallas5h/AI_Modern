import React, { ChangeEvent, FormEvent, useState } from "react";
import { UserLogInRes } from "types";
import { apiUrl } from "../../config/api";
import { LoginContext } from "./LoginContext";
import { generateQueryString, singinFunctionFormValidation } from "./logs.utils";
import { SingupFormValidation } from "./SignupForm";


export const ResetPassword = () => {

  const loginContext = React.useContext(LoginContext);
  const { changeLoadingLogData, resetPasword, changeResetPassword, serverSigninMessage: serverMessage,
    setServerSigninMessage: setServerMessage, } = loginContext;

  const [form, setForm] = useState({
    mail: ''
  });

  //mailValidation=true show component with error

  const [mailValidation, setMailValidation] = useState<boolean>(false);
  const [textValidation, setTextValidation] = useState<string | null>(null)

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: String(e.target.value)
    }))
  }

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    const clientValidation = singinFunctionFormValidation(form);

    if (!clientValidation.mail) {
      setMailValidation(true);
      setTextValidation('Check your e-mail, entered e-mail do not meet the e-mail standards');
      return
    }

    try {
      changeLoadingLogData(true);

      const res = await fetch(`${apiUrl}/account/reset/password/email/?${generateQueryString(form)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data: UserLogInRes = await res.json();

      data.message && setServerMessage(data.message)

    } catch (err) {
      throw new Error()
    }
    finally {
      changeLoadingLogData(false);
      setForm({
        mail: '',
      })
    }


  }

  return (
    <>
      <header className="form-block__header">
        <h1>Reset your password</h1>
        <p>To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process.</p>
        <form onSubmit={sendForm}>
          <div className="form-block__input-wrapper">
            <div className="form-group form-group--signin">
              <input
                className="form-group__input"
                type="email"
                name="mail"
                id="email"
                placeholder="your e-mail"
                required
                value={form.mail}
                onChange={change}
              />
              {mailValidation &&
                <div className="form-group__validation form-group__validation--signup">
                  <span> {textValidation}</span>
                </div>
              }


            </div>
          </div>
          <button className="button button--primary full-width" type="submit">Reset password</button>

          {serverMessage &&
            <SingupFormValidation serverMessage={serverMessage} setServerMessage={setServerMessage} />
          }

        </form>
      </header>
    </>)
}