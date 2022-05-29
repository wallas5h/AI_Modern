import * as React from 'react';
import './_article.scss';

interface Props {
  imgUrl: string,
  date: string,
  title: string,
  click: string
}

export const Article = ({ imgUrl, date, title, click }: Props) => {
  return (
    <div className="blog__article">
      <div className="blog__article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="blog__article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <a href={click} target="_blank">Read more</a>
      </div>
    </div>
  )
}