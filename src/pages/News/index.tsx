import { useGetNews } from '@/src/components/Hooks/useMu'
import NewsCard from '@/src/components/NewsCard'
import Paginator from '@/src/components/Paginator'
import React, { useState, useEffect } from 'react'
import { Article } from './Types'

const News = () => {
  const { status, data, error } = useGetNews()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const pageSize = 5

  const [articles, setArticles] = useState([])
  console.log(data)
  useEffect(() => {
    const getArticles = async () => {
      await setArticles(data)
      await setArticles(
        data.slice(pageSize * (currentPage - 1), pageSize * currentPage)
      )
    }
    getArticles()
  }, [data, currentPage])
  const onPageChanged = (page: number) => {
    setCurrentPage(page)
  }

  if (error) return <div>{'An error has occurred: ' + error} </div>
  if (status === 'loading') return <div> loading...</div>
  return (
    <div>
      <Paginator
        page={currentPage}
        totalRecords={data.length}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />{' '}
      {articles
        ? articles.map((article: Article) => (
            <NewsCard article={article} key={article.title} />
          ))
        : null}
    </div>
  )
}

export default News
