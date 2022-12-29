import { useGetStandings } from '@/src/components/Hooks/useMu'

interface Team {
  rank: number
  team: {
    name: string
  }
  all: {
    played: number
    win: number
    draw: number
    lose: number
    goals: { for: number; against: number }
  }
  GD: number
  points: number
}
const Standings = () => {
  const { status, data, error } = useGetStandings()
  console.log(data)

  if (error) return <div>{'An error has occurred: ' + error} </div>
  if (status === 'loading') return <div> loading...</div>
  return (
    <div className="space-y-8 ">
      <h1 className="text-center text-6xl font-bold text-white ">STANDINGS</h1>
      <div className="overflow-x-auto ">
        <table className="table  w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>POINTS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team: Team) => (
              <tr
                key={team.rank}
                className={
                  team.team.name == 'Manchester United' ? `active` : ''
                }
              >
                <th>{team.rank}</th>
                <td
                  className={
                    team.team.name == 'Manchester United' ? `text-red-600` : ''
                  }
                >
                  {team.team.name}
                </td>
                <td>{team.all.played}</td>
                <td>{team.all.win}</td>
                <th>{team.all.draw}</th>
                <td>{team.all.lose}</td>
                <td>{team.all.goals.for}</td>
                <td>{team.all.goals.against}</td>
                <td>{team.all.goals.for - team.all.goals.against}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Standings
