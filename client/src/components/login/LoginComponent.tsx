import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { AppContext } from './../../AppContext';
import { LoginTypes } from "./Login";
import { LoginContext } from './LoginContext';
import { LoginForm } from "./LoginForm";
import { ResetPassword } from './ResetPassword';
import './sass/_loginComponent.scss';
import { Spinner } from './Spinner';


export const LoginComponent = () => {

  const context = React.useContext(AppContext);
  const { changeLoginVisible } = context;

  const loginContext = React.useContext(LoginContext);
  const { loadingLogData, resetPasword, changeResetPassword, setServerSigninMessage } = loginContext;

  const handleCloseLogWindow = () => {
    changeLoginVisible(false);
    changeResetPassword(false);
    setServerSigninMessage(null)
  }

  return (
    <>
      <div className='form-block-wrapper '></div>

      <section className='form-block '>
        <div className="btnComponent">
          <RiCloseLine color='#fff' size={42} className="xBtn" onClick={handleCloseLogWindow} />
        </div>

        {resetPasword ? <ResetPassword /> : <FormBlockHeader />}

      </section>
    </>
  )
}


const FormBlockHeader = () => {

  const context = React.useContext(AppContext);
  const { loginMode, changeLoginMode } = context;

  const loginContext = React.useContext(LoginContext);
  const { loadingLogData } = loginContext

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
      <header className="form-block__header">

        {loadingLogData ?
          <Spinner />
          :
          <div>
            <h1>{loginMode === LoginTypes.SIGNIN ? 'Sign in!' : 'Sign up!'}</h1>
            < ToggleInput loginMode={loginMode} toggleChangeMode={toggleChangeMode} />
            <LoginForm />
          </div>
        }

      </header>
    </>
  )
}


interface toggleProps {
  loginMode: LoginTypes
  toggleChangeMode: () => void
}

const ToggleInput = ({ loginMode, toggleChangeMode }: toggleProps) => {


  return (
    <>
      <div className="form-block__toggle-block">
        <span>{loginMode === LoginTypes.SIGNIN ? 'Don\'t' : 'Already'} have an account? Click here </span>
        <input className="input--toggler" id="form-toggler" type="checkbox" onChange={toggleChangeMode} />
        <label htmlFor="form-toggler"></label>

      </div>
    </>
  )
}