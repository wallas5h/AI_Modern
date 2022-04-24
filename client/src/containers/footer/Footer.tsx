import * as React from 'react';
import Logo from '../../assets/logo.svg';
import './_footer.scss';



export const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient-text">Make a new step in to the future</h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Get Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>


      </div>
      <div className="gpt3__footer-copyright">
        © 2022 All rights reserved.
      </div>


    </div>
  )
}