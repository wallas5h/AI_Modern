import React, { useState } from 'react';
import { AppContext } from './AppContext';
import { Brand, CTA, Features, Login, Navbar } from './components';
import { LoginTypes } from './components/login/Login';
import { Blog, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './sass/App.scss';



function App() {

  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  const [loginMode, setLoginMode] = useState(LoginTypes.SIGNIN);
  const [userName, setUserName] = useState('')

  // true login view visible, 

  const changeLoginVisible = (value: boolean) => {
    if (value) {
      setLoginVisible(prev => !prev)
    }
    else {
      setLoginVisible(false)
    }
  }

  const changeUserLogged = (value: boolean) => {
    if (value) {
      return setIsUserLogged(true)
    }
    else {
      setIsUserLogged(false)
    }
  }

  const changeLoginMode = (value: LoginTypes) => {
    setLoginMode(value)
  }

  const changeUserName = (value: string) => {
    setUserName(value)
  }


  return (
    <>
      <AppContext.Provider value={{
        loginVisible,
        changeLoginVisible,
        isUserLogged,
        changeUserLogged,
        loginMode,
        changeLoginMode,
        userName,
        changeUserName,
      }}>
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Login />
          <WhatGPT3 />
          <Possibility />
          <Features />
          <CTA />
          <Blog />

          <Brand />
          <Footer />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
