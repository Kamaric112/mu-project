import { useGetPlayers } from '@/src/components/Hooks/useMu'
import React from 'react'

const Squad = () => {
  const { status, data, error } = useGetPlayers()
  console.log(data)

  if (error) return <div>{'An error has occurred: ' + error} </div>
  if (status === 'loading') return <div> loading...</div>
  return (
    <div className="space-y-8 ">
      <h1 className="text-center text-6xl font-bold text-white ">Squad</h1>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <div>Goalkeeper</div>
        <div>Defender</div>
        <div>Midfielder</div>
        <div>Attacker</div>
      </div>
      <div>
        {data.map((player) => (
          <div
            key={player.name}
            className="Player h-2xl my-4 mx-auto flex max-w-xl flex-col justify-center"
          >
            <div className="card lg:card-side bg-base-100 shadow-xl">
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
        ))}
      </div>
    </div>
  )
}

export default Squad
