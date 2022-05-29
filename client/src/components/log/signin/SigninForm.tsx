
import React, { ChangeEvent, FormEvent, useState } from "react";
import { UserLogInReq, UserLogInRes } from 'types';
import { AppContext } from '../../../AppContext';
import { apiUrl } from "../../../config/api";
import { messagesValidation as messages, singinFunctionFormValidation } from "../../../utils/logs.utils";
import '../sass/_loginForm.scss';
import { ServerFormValidationComponent } from "../serverValidation/ServerFormValidComponent";
import { LogContext } from "./LogContext";
import { SigninFormValidationComponent } from "./SigninFormValidComponent";


export const SignInForm = () => {

  const { changeLoadingLogData, serverSigninMessage, setServerSigninMessage } = React.useContext(LogContext);

  const { changeUserName, changeUserLogged, changeUserId } = React.useContext(AppContext);


  const [form, setForm] = useState<UserLogInReq>({
    mail: '',
    password: ''
  });

  //mailValidation=true show component with error

  const [mailValidation, setMailValidation] = useState<boolean>(false)

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: String(e.target.value)
    }))
  }

  const sendForm = async (e: FormEvent) => {
    // debugger;
    e.preventDefault();
    changeLoadingLogData(true);

    const validation = singinFunctionFormValidation(form);

    if (!validation.mail) {
      setMailValidation(true);
      changeLoadingLogData(false);
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data: UserLogInRes = await res.json();

      if (data.message) {
        setServerSigninMessage(data.message)
      }

      if (data.firstName && data.id) {
        changeUserLogged(true);
        changeUserName(data.firstName);
        changeUserId(data.id);
      }


    } catch (err) {
      throw new Error()
    }
    finally {
      changeLoadingLogData(false);
      setForm({
        mail: '',
        password: ''
      })
    }

  }

  return (
    <>{serverSigninMessage ?

      <ServerFormValidationComponent serverMessage={serverSigninMessage} setServerMessage={setServerSigninMessage} />

      :

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
                <span> {messages.mail__incorect}</span>
              </div>
            }
            <input
              className="form-group__input"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              value={form.password}
              onChange={change}
            />
            {serverSigninMessage && <SigninFormValidationComponent />}

          </div>
        </div>
        <button className="button button--primary full-width" type="submit">Sign In</button>

      </form>
    }
    </>
  )
}
