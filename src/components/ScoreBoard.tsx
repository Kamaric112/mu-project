import React from 'react'
import { Match } from '../pages/Fixtures/Types'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'

const ScoreBoard = ({ match }: { match: Match }) => {
  dayjs.extend(localizedFormat)

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          <div className="p-2 text-center sm:p-10">
            <div className="flex max-w-sm items-center justify-center overflow-hidden rounded bg-white shadow-lg hover:bg-white">
              <div className="space-y-10">
                <div className="px-6 py-4">
                  <div className="max-w-2xl px-10">
                    <img
                      className="m-auto h-20 w-20"
                      src={match.teams.home.logo}
                      alt={match.teams.home.name}
                    />
                  </div>
                  <div className="space-y-5">
                    <div className="mb-2 text-xl font-bold">
                      {match.teams.home.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 text-center sm:p-10">
            <div className="flex max-w-sm items-center justify-center overflow-hidden rounded bg-orange-500 shadow-lg hover:bg-orange-600">
              <div className="space-y-10">
                <div className="px-6 py-4">
                  <div className="space-y-5">
                    <div className="mb-2 text-xl font-bold">Result</div>
                    <p className="text-base lg:text-6xl">
                      {match.goals.home == null
                        ? `H - A`
                        : `${match.goals.home} - ${match.goals.away}`}
                    </p>
                    <p id="data" className="text-base">
                      {dayjs(match.fixture.date.toString()).format('LLLL')}
                    </p>
                    <p id="ref" className="text-base">
                      {match.fixture.referee}
                    </p>
                    <p id="stadium" className="text-base">
                      {match.fixture.venue.name} | {match.teams.home.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 text-center sm:p-10">
            <div className="flex max-w-sm items-center justify-center overflow-hidden rounded bg-white shadow-lg hover:bg-white ">
              <div className="space-y-10">
                <div className="px-6 py-4">
                  <div className="max-w-2xl px-10">
                    <img
                      className="m-auto h-20 w-20"
                      src={match.teams.away.logo}
                      alt={match.teams.away.name}
                    />
                  </div>
                  <div className="space-y-5">
                    <div className="mb-2 text-xl font-bold">
                      {match.teams.away.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
