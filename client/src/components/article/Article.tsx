import * as React from 'react';
import './_article.scss';

interface Props {
  imgUrl: string,
  date: string,
  title: string
}

export const Article = ({ imgUrl, date, title }: Props) => {
  return (
    <div className="blog__article">
      <div className="blog__article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="blog__article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}