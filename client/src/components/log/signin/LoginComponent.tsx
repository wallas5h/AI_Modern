import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { AppContext } from '../../../AppContext';
import { Spinner } from '../../spinner/Spinner';
import { ResetPassword } from '../resetPassword/ResetPassword';
import '../sass/_loginComponent.scss';
import { LogContext } from './LogContext';
import { LogTypes } from "./Login";
import { LoginForm } from "./LoginForm";




export const LoginComponent = () => {

  const { changeLoginVisible } = React.useContext(AppContext);

  const { resetPasword, changeResetPassword, setServerSigninMessage } = React.useContext(LogContext);

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

  const loginContext = React.useContext(LogContext);
  const { loadingLogData } = loginContext

  const toggleChangeMode = () => {
    if (loginMode === LogTypes.SIGNUP) {
      changeLoginMode(LogTypes.SIGNIN)
    }
    else {
      changeLoginMode(LogTypes.SIGNUP)
    }

  }

  return (
    <>
      <header className="form-block__header">

        {loadingLogData ?
          <Spinner />
          :
          <div>
            <h1>{loginMode === LogTypes.SIGNIN ? 'Sign in!' : 'Sign up!'}</h1>
            < ToggleInput loginMode={loginMode} toggleChangeMode={toggleChangeMode} />
            <LoginForm />
          </div>
        }

      </header>
    </>
  )
}


interface toggleProps {
  loginMode: LogTypes
  toggleChangeMode: () => void
}

const ToggleInput = ({ loginMode, toggleChangeMode }: toggleProps) => {


  return (
    <>
      <div className="form-block__toggle-block">
        <span>{loginMode === LogTypes.SIGNIN ? 'Don\'t' : 'Already'} have an account? Click here </span>
        <input className="input--toggler" id="form-toggler" type="checkbox" onChange={toggleChangeMode} />
        <label htmlFor="form-toggler"></label>

      </div>
    </>
  )
}