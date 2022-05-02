
import React, { ChangeEvent, FormEvent, useState } from "react";
import { RiCloseLine } from 'react-icons/ri';
import { UserLogInReq, UserLogInRes } from 'types';
import { AppContext } from './../../AppContext';
import { LoginContext } from "./LoginContext";
import { messagesValidation as messages, singinFormValidation } from "./logs.utils";
import './sass/_loginForm.scss';

export const SignInForm = () => {

  const loginContext = React.useContext(LoginContext);
  const { changeLoadingLogData } = loginContext

  const appContext = React.useContext(AppContext);
  const { changeUserName, changeUserLogged } = appContext;

  const [form, setForm] = useState<UserLogInReq>({
    mail: '',
    password: ''
  });

  const [validationError, setValidationError] = useState<boolean>(false);

  const [mailValidation, setMailValidation] = useState<boolean>(false)

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: String(e.target.value)
    }))
  }

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    changeLoadingLogData(true);

    const validation = singinFormValidation(form);

    if (validation.mail) {



      try {
        const res = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'aplication/json'
          },
          body: JSON.stringify(form)
        })

        const data: UserLogInRes = await res.json();

        if (!data._id) {
          setValidationError(true);
        }
        else if (typeof data.mail === 'string') {
          changeUserLogged(true);
          changeUserName(data.mail)
        }
      }
      finally {
        changeLoadingLogData(false);
        setForm({
          mail: '',
          password: ''
        })
      }
    }
    else {
      setMailValidation(!validation.mail);
      changeLoadingLogData(false);
    }
  }

  return (
    <>
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
            {validationError &&
              <div className="form-group__validation">
                <RiCloseLine className="xBtn--validation" onClick={() => setValidationError(false)} />
                <span> Incorrect mail or password</span>
                <a className="button">Forgot password</a>
              </div>
            }
          </div>
        </div>
        <button className="button button--primary full-width" type="submit">Sign In</button>
      </form>
    </>
  )
}
