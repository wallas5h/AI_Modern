import React, { useState } from 'react';
import { AppContext } from './AppContext';
import { Brand, CTA, Features, Login, Navbar } from './components';
import { Blog, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './sass/App.scss';



function App() {

  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false)

  // true login view visible, 

  const changeLoginVisible = (value: boolean) => {
    if (value) {
      setLoginVisible(prev => !prev)
    }
    else {
      setLoginVisible(false)
    }

    console.log(loginVisible, 'działa change Visible')
  }

  const changeUserLogged = (value: boolean) => {
    if (value) {
      return setIsUserLogged(true)
    }
    else {
      setIsUserLogged(false)
    }

  }


  return (
    <>
      <AppContext.Provider value={{
        loginVisible,
        changeLoginVisible,
        isUserLogged,
        changeUserLogged
      }}>
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Login />
          <Brand />
          <WhatGPT3 />
          <Possibility />
          <Features />
          <CTA />
          <Blog />

          <Footer />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
