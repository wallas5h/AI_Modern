import * as React from 'react';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
import './_header.scss';


export const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1>
          GPT-3 — The Largest Neural Network Ever Created
        </h1>
        <p>
          AI will have a strong impact on the world. Are you ready for this?
        </p>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Over 1 600 people use our services</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI face" />
      </div>
    </div>
  )
}