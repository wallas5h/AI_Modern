import React, { useState } from 'react';
import { AppContext } from './AppContext';
import { Brand, CTA, Features, Login, Navbar } from './components';
import { LogTypes } from './components/log/signin/Login';
import { Blog, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './sass/App.scss';




function App() {

  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  const [loginMode, setLoginMode] = useState(LogTypes.SIGNIN);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

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
    setIsUserLogged(value)
  }

  const changeLoginMode = (value: LogTypes) => {
    setLoginMode(value)
  }

  const changeUserName = (value: string) => {
    setUserName(value)
  }

  const changeUserId = (value: string) => {
    setUserId(value)
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
        userId,
        changeUserId,
      }}>
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Login />
          <WhatGPT3 />
          <Possibility />
          <CTA />
          <Features />
          <Blog />

          <Brand />
          <Footer />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
