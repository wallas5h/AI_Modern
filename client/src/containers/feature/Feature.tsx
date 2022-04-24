
import * as React from 'react';
import './_feature.scss';

interface Props {
  title: string;
  text: string;
}

export const Feature = ({ title, text }: Props) => {
  return (
    <div className="feature__component">
      <div className="container-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="container-text">
        <p>{text}</p>
      </div>
    </div>
  )
}