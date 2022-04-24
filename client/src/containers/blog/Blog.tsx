import * as React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './_blog.scss';


export const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient-text">A lot is happening,</h1>
        <h1 className="gradient-text"> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="groupA">
          <Article imgUrl={blog01}
            date={'Apr 22, 2022'}
            title={'We invest in the future.'} />
        </div>
        <div className="groupB">
          <Article imgUrl={blog02}
            date={'Apr 22, 2022'}
            title={'We invest in the future.'} />
          <Article imgUrl={blog03}
            date={'Apr 22, 2022'}
            title={'We invest in the future.'} />
          <Article imgUrl={blog04}
            date={'Apr 22, 2022'}
            title={'We invest in the future.'} />
          <Article imgUrl={blog05}
            date={'Apr 22, 2022'}
            title={'We invest in the future.'} />
        </div>

      </div>
    </div>
  )
}