import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { AppContext } from './../../AppContext';
import { LoginTypes } from "./Login";
import { LoginForm } from "./LoginForm";
import './_loginComponent.scss';

interface Props {
  mode: string
  changeMode: (value: LoginTypes) => void
}

export const LoginComponent = ({ mode, changeMode }: Props) => {

  const context = React.useContext(AppContext)
  const { changeLoginVisible } = context;

  return (
    <>
      <div className='form-block-wrapper '></div>

      <section className='form-block '>
        <div className="btnComponent">
          <RiCloseLine color='#fff' size={42} className="xBtn" onClick={() => changeLoginVisible(false)} />
        </div>

        <header className="form-block__header">
          <h1>{mode === LoginTypes.SIGNIN ? 'Sign in!' : 'Sign up'}</h1>
          <div className="form-block__toggle-block">
            <span>{mode === LoginTypes.SIGNIN ? 'Don\'t' : 'Already'} have an account? Click here </span>
            <input id="form-toggler" type="checkbox" />  {/* onClick={}*/}
            <label htmlFor="form-toggler"></label>
          </div>
          <LoginForm mode={mode} changeMode={changeMode} /> {/* onSubmit={this.props.onSubmit}  */}
        </header>
      </section>
    </>
  )
}
