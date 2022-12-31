import Paginator from '@/src/components/Paginator'
import React, { useEffect, useState } from 'react'
import { useGetFixtures } from '@/src/components/Hooks/useMu'
import { Match } from './Types'
import ScoreBoard from '@/src/components/ScoreBoard'
const Fixtures = () => {
  const { status, data, error } = useGetFixtures()
  const [fixtures, setFixtures] = useState([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const pageSize = 5
  useEffect(() => {
    const getData = async () => {
      await setFixtures(data)
      await setFixtures(
        data.slice(pageSize * (currentPage - 1), pageSize * currentPage)
      )
    }
    getData()
  }, [data, currentPage])

  const onPageChanged = (page: number) => {
    setCurrentPage(page)
  }
  console.log(data)
  if (error) return <div>{'An error has occurred: ' + error} </div>
  if (status === 'loading') return <div> loading...</div>
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        {' '}
        <Paginator
          page={currentPage}
          totalRecords={data.length}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
        />
      </div>
      <div>
        {fixtures
          ? fixtures.map((match: Match) => (
              <ScoreBoard key={match.fixture.id} match={match} />
            ))
          : null}
      </div>
    </div>
  )
}

export default Fixtures
