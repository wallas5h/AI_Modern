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
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nostrum minima nesciunt nobis neque deleniti vel? Veritatis voluptas quo molestias!</p>
        <h4>Request Access to Get Started</h4>
      </div>
    </div>
  )
}