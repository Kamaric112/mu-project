import React from 'react'
import { Article } from '../pages/News/Types'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

const NewsCard = ({ article }: { article: Article }) => {
  dayjs.extend(localizedFormat)

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={article.urlToImage} alt={article.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <h3 className="card-title">
          {' '}
          {dayjs(article.publishedAt.toString()).format('LLLL')}
        </h3>

        <p>{article.url}</p>
        <div className="card-actions justify-end">
          <a className="btn-primary btn" href={article.url}>
            Go to Article
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
