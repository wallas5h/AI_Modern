import * as React from 'react';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
import './_header.scss';


export const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1>
          Let's try to build something amazing with AI
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ad quia quaerat et ea quis inventore enim minima animi nihil.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" id="" placeholder='Your email adress' />
          <button type="submit">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Over 1 600 people join to us</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  )
}