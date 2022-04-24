import * as React from 'react';
import { Feature } from '../../containers';
import './_whatgpt3.scss';

const textFeature = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, omnis! Et eveniet necessitatibus commodi. Quidem ipsa fugit quibusdam cumque ex!'

export const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={'What is GPT-3'}
          text={textFeature} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Expolore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title={'Chatbots'} text={textFeature} />
        <Feature title={'Knowledgebase'} text={textFeature} />
        <Feature title={'Education'} text={textFeature} />
      </div>

    </div>
  )
}