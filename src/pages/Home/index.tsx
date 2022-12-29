import Fixtures from '../Fixtures'
import HeroTitle from '@/src/components/HeroTitle'
import Squad from '../Squad'
import Standings from '../Standings'
import React, { useState } from 'react'
import Modal from '@/src/components/Modal'

const Home = () => {
  const [name, setName] = useState('')
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-gradient-to-r from-red-900 via-red-600 to-red-500 text-white">
      <HeroTitle />
      <label
        htmlFor="my-modal-3"
        className="mx-auto my-0 text-center text-2xl font-bold transition-all  after:invisible after:block after:h-[3px]  after:scale-x-0 after:bg-white after:text-center  after:duration-300 after:ease-in-out after:content-[''] after:hover:visible after:hover:scale-x-100 md:text-3xl after:md:h-[5px]  lg:text-4xl"
        onClick={() => setName('Fixtures')}
      >
        Fixtures
      </label>
      <label
        htmlFor="my-modal-3"
        className="mx-auto my-0 text-center  text-2xl font-bold transition-all  after:invisible after:block after:h-[3px]  after:scale-x-0 after:bg-white after:text-center  after:duration-300 after:ease-in-out after:content-[''] after:hover:visible after:hover:scale-x-100 md:text-3xl after:md:h-[5px]  lg:text-4xl"
        onClick={() => setName('Standings')}
      >
        Standings
      </label>
      <label
        htmlFor="my-modal-3"
        className="mx-auto my-0 text-center  text-2xl font-bold transition-all  after:invisible after:block after:h-[3px]  after:scale-x-0 after:bg-white after:text-center  after:duration-300 after:ease-in-out after:content-[''] after:hover:visible after:hover:scale-x-100 md:text-3xl after:md:h-[5px]  lg:text-4xl"
        onClick={() => setName('Squad')}
      >
        Squad
      </label>
      <Modal name={name} />
    </div>
  )
}

export default Home
