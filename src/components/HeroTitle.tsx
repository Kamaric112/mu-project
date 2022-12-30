import React from 'react'
import Mu from './mu-icon.png'
const HeroTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-2xl font-medium leading-6 first-letter:text-center">
      <h1 className="text-2xl font-extrabold lg:text-6xl">
        A Manchester United Project
      </h1>
      <p>A React.js project by Truong Nguyen</p>
      <img src={Mu} alt="Manchester United" className="h-[150px] w-[150px]" />
    </div>
  )
}

export default HeroTitle
