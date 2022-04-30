import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { AppContext } from './../../AppContext';
import { LoginContext, LoginTypes } from "./Login";
import { LoginForm } from "./LoginForm";
import './_loginComponent.scss';

interface Props {
  mode: string
  changeMode: (value: LoginTypes) => void
}

export const LoginComponent = () => {

  const context = React.useContext(AppContext);
  const loginContext = React.useContext(LoginContext);
  const { changeLoginVisible } = context;

  const { loginMode, changeLoginMode } = context;

  const toggleChangeMode = () => {
    if (loginMode === LoginTypes.SIGNUP) {
      changeLoginMode(LoginTypes.SIGNIN)
    }
    else {
      changeLoginMode(LoginTypes.SIGNUP)
    }

  }

  return (
    <>
      <div className='form-block-wrapper '></div>

      <section className='form-block '>
        <div className="btnComponent">
          <RiCloseLine color='#fff' size={42} className="xBtn" onClick={() => changeLoginVisible(false)} />
        </div>

        <header className="form-block__header">
          <h1>{loginMode === LoginTypes.SIGNIN ? 'Sign in!' : 'Sign up'}</h1>
          <div className="form-block__toggle-block">
            <span>{loginMode === LoginTypes.SIGNIN ? 'Don\'t' : 'Already'} have an account? Click here </span>
            <input id="form-toggler" type="checkbox" onChange={toggleChangeMode} />
            <label htmlFor="form-toggler"></label>
          </div>
          <LoginForm /> {/* onSubmit={this.props.onSubmit}  */}
        </header>
      </section>
    </>
  )
}
