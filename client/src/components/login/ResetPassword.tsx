import React, { ChangeEvent, FormEvent, useState } from "react";
import { LoginContext } from "./LoginContext";
import { singinFormValidation } from "./logs.utils";


export const ResetPassword = () => {

  const loginContext = React.useContext(LoginContext);
  const { changeLoadingLogData, resetPasword, changeResetPassword } = loginContext;

  const [form, setForm] = useState({
    mail: ''
  })

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: String(e.target.value)
    }))
  }

  const sendForm = (e: FormEvent) => {
    e.preventDefault();
    changeLoadingLogData(true);

    const validation = singinFormValidation(form);
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
              {/* {mailValidation &&
              <div className="form-group__validation form-group__validation--signup">
                <span> {messages.mail__incorect}</span>
              </div>
            } */}

              {/* {serverMessage && <SigninFormValidationComponent />} */}

            </div>
          </div>
          <button className="button button--primary full-width" type="submit">Reset password</button>
        </form>
      </header>
    </>)
}