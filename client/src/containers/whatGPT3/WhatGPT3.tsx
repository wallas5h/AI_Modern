import * as React from 'react';
import { Feature } from '../../containers';
import { educationText, knowledgebaseText, textChatbots, textFeature } from './whatGPTTexts';
import './_whatgpt3.scss';

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
        <Feature title={'Chatbots'} text={textChatbots} />
        <Feature title={'Knowledgebase'} text={knowledgebaseText} />
        <Feature title={'Education'} text={educationText} />
      </div>

    </div>
  )
}