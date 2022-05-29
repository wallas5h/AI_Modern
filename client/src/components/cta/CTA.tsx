import * as React from 'react';
import './_cta.scss';


export const CTA = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content ">
        <p>Request Access to Get Started</p>
        <h4>Request today and start exploring the endless possibilities.</h4>
      </div>
      <div className="gpt3__cta-button">
        <button><a href="https://openai.com/api/" target="_blank">Get Started</a></button>
      </div>

    </div>
  )
}