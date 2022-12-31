import React from 'react'
import { Article } from '../pages/News/Types'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

const NewsCard = ({ article }: { article: Article }) => {
  dayjs.extend(localizedFormat)

  return (
    <div className="card card-side my-10 flex-col bg-base-100 shadow-xl md:flex-row">
      <figure>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-[30rem]"
        />
      </figure>
      <div className="card-body w-96">
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
