import { useGetPlayers } from '@/src/components/Hooks/useMu'
import React, { useEffect, useState } from 'react'
export interface Player {
  id: number
  name: string
  age: number
  number?: number
  position: string
  photo: string
}

const Squad = () => {
  const { status, data, error } = useGetPlayers()
  const [players123, setPlayers123] = useState([])
  const [currentRole, setCurrentRole] = useState('All')

  useEffect(() => setPlayers123(data), [data])

  useEffect(() => {
    if (currentRole === 'All') {
      setPlayers123(data)
    } else {
      const filtered = data.filter((player: Player) => {
        return (
          player.position === currentRole ||
          player.position.includes(currentRole)
        )
      })
      setPlayers123(filtered)
    }
  }, [currentRole, data])

  if (error) return <div>{'An error has occurred: ' + error} </div>
  if (status === 'loading') return <div> loading...</div>
  return (
    <div className="space-y-8 ">
      <h1 className="text-center text-6xl font-bold text-white ">Squad</h1>
      <div className="flex flex-col items-center justify-center gap-4 text-2xl md:flex-row">
        <button onClick={() => setCurrentRole('All')}>All</button>
        <button onClick={() => setCurrentRole('Goalkeeper')}>Goalkeeper</button>
        <button onClick={() => setCurrentRole('Defender')}>Defender</button>
        <button onClick={() => setCurrentRole('Midfielder')}>Midfielder</button>
        <button onClick={() => setCurrentRole('Attacker')}>Attacker</button>
      </div>
      <div>
        {players123
          ? players123.map((player: Player) => (
              <div
                key={player.name}
                className="Player h-2xl my-4 mx-auto flex max-w-xl flex-col justify-center"
              >
                <div className="card bg-base-100 shadow-xl lg:card-side">
                  <figure>
                    <img
                      src={player.photo}
                      alt={player.name}
                      className="h-full w-full"
                    />
                  </figure>

                  <div className="card-body">
                    <h1 className="card-title">{player.name}</h1>
                    <p>Age: {player.age}</p>
                    <p>Number: {player.number} </p>
                    <p>{player.position}</p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default Squad
