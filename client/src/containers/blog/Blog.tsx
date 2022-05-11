import * as React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './_blog.scss';


export const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient-text">Blog & News</h1>

      </div>
      <div className="gpt3__blog-container">
        <div className="groupA">
          <Article imgUrl={blog01}
            date={'Apr 06, 2022'}
            title={'DALL·E 2 a new AI system that can create realistic images'}
            click={'https://openai.com/dall-e-2/'} />
        </div>
        <div className="groupB">
          <Article imgUrl={blog02}
            date={'Jul 28, 2021'}
            title={'Triton: Open-Source GPU Programming for Neural Networks'}
            click={'https://openai.com/blog/triton/'} />

          <Article imgUrl={blog03}
            date={'Jan 16, 2021'}
            title={'DALL-E a powerful visual idea generator '}
            click={'https://venturebeat.com/2021/01/16/openais-text-to-image-engine-dall-e-is-a-powerful-visual-idea-generator/'} />
          <Article imgUrl={blog04}
            date={'Apr 30, 2020'}
            title={'Jukebox a social media player'}
            click={'https://openai.com/blog/jukebox/'} />
          <Article imgUrl={blog05}
            date={'Apr 14, 2020'}
            title={'OpenAI Microscope'}
            click={'https://openai.com/blog/microscope/'} />
        </div>

      </div>
    </div>
  )
}