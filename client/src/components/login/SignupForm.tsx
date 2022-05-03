import React, { ChangeEvent, FormEvent, useState } from "react";
import { UserRegisterRes } from 'types';
import { LoginContext } from "./LoginContext";
import { messagesValidation as messages, singupFormValidation as formValidation } from "./logs.utils";
import './sass/_loginForm.scss';

export const SignUpForm = () => {

  const loginContext = React.useContext(LoginContext);
  const { changeLoadingLogData, serverSignupMessage: serverMessage, setServerSignupMessage: setServerMessage } = loginContext

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    password: '',
    repeat: '',
    terms: false
  })

  const [validationErrors, setValidationErrors] = useState({
    firstName: false,
    lastName: false,
    mail: false,
    password: false,
    repeat: false,
    terms: false
  })


  const change = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.type === 'checkbox') {
      setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.checked
      }))
    }
    else {
      setForm(prev => ({
        ...prev,
        [e.target.name]: String(e.target.value)
      }))
    }

  }

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    changeLoadingLogData(true);
    const validation = formValidation(form)

    if (validation.correct) {
      try {
        const res = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            mail: form.mail,
            password: form.password,
            terms: form.terms
          })
        })

        const data: UserRegisterRes = await res.json();

        if (data.message) {
          setServerMessage(data.message)
        }

      }

      finally {
        changeLoadingLogData(false);
        setForm({
          firstName: '',
          lastName: '',
          mail: '',
          password: '',
          repeat: '',
          terms: false
        })
      }
    }
    else {
      setValidationErrors({
        firstName: !validation.firstName,
        lastName: !validation.lastName,
        mail: !validation.mail,
        password: !validation.password,
        repeat: !validation.repeat,
        terms: !validation.terms
      })
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
              type="text"
              name="firstName"
              id="firstName"
              placeholder="first name"
              required
              value={form.firstName}
              onChange={change}
            />
            {validationErrors.firstName &&
              <div className="form-group__validation form-group__validation--signup">
                <span> {messages.name__incorect}</span>
              </div>
            }
            <input
              className="form-group__input"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="last name"
              required
              value={form.lastName}
              onChange={change}
            />
            {validationErrors.lastName &&
              <div className="form-group__validation form-group__validation--signup">
                <span> {messages.name__incorect}</span>
              </div>
            }
            <input
              className="form-group__input"
              type="email"
              name="mail"
              id="email"
              required
              placeholder="e-mail"
              value={form.mail}
              onChange={change}
            />
            {validationErrors.mail &&
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
            {validationErrors.password &&
              <div className="form-group__validation form-group__validation--signup">
                <span> {messages.password__incorect}</span>
              </div>
            }
            <input
              className="form-group__input"
              type="password"
              name="repeat"
              id="repeatPassword"
              placeholder="repeat password"
              required
              value={form.repeat}
              onChange={change}
            />
            {validationErrors.repeat &&
              <div className="form-group__validation form-group__validation--signup">
                <span> {messages.repeat__incorect}</span>
              </div>
            }
            <label htmlFor="terms" className="form-group__validation__checkbox">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                required
                checked={form.terms}
                onChange={change}
              /> I agree to the <a href="http://localhost:3001/terms">terms of service</a>
            </label>
            {validationErrors.terms &&
              <div className="form-group__validation form-group__validation--signup">
                <span> {messages.terms__incorect}</span>
              </div>
            }
          </div>
        </div>
        <button className="button button--primary full-width" type="submit">Sign Up</button>
        {serverMessage &&
          <div className="form-group__validation--server">

            <span> {serverMessage}</span>
            <button className="button button--primary full-width" onClick={() => setServerMessage(null)}>OK</button>
          </div>
        }
      </form>
    </>
  )
}