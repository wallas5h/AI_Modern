import * as React from 'react';
import possibility from '../../assets/possibility.png';
import './_possibility.scss';


export const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Access to Get Started</h4>
        <h1 className="gradient-text">Imagination creates reality</h1>
        <p>GPT-3 also proved capable of having spiritual and philosophical conversations that might go beyond our cognitive boundaries.</p>
        <h4>Request Access to Get Started</h4>
      </div>
    </div>
  )
}