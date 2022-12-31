import React from 'react'

interface PaginatorProps {
  page: number
  pageSize: number
  totalRecords: number
  onPageChanged: (page: number) => void
}

const Paginator = ({
  page,
  pageSize,
  totalRecords,
  onPageChanged
}: PaginatorProps) => {
  const totalPage = pageSize > 0 ? Math.ceil(totalRecords / pageSize) : 0
  return (
    <div className="btn-group grid w-full grid-cols-3">
      <button
        className="btn-outline btn"
        onClick={() => onPageChanged(page - 1)}
        disabled={page == 1}
      >
        Previous page
      </button>
      <button
        className="btn-outline btn"
        onClick={() => onPageChanged(page + 1)}
        disabled={page == totalPage}
      >
        Next
      </button>
      <button
        className="btn-outline btn"
        onClick={() => onPageChanged(totalPage)}
      >
        {totalPage}
      </button>
    </div>
  )
}

export default Paginator
