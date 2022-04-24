import React from 'react';
import { Brand, CTA, Features, Navbar } from './components';
import { Blog, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './sass/App.scss';

function App() {


  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Possibility />
        <Features />
        <CTA />
        <Blog />

        <Footer />
      </div>
    </>
  );
}

export default App;
