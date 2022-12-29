import Fixtures from '../Fixtures'
import HeroTitle from '@/src/components/HeroTitle'
import Squad from '../Squad'
import Standings from '../Standings'
import React, { useState } from 'react'
import Modal from '@/src/components/Modal'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'
const Home = () => {
  dayjs.extend(customParseFormat)
  dayjs.extend(localizedFormat)
  const [name, setName] = useState('')
  console.log(dayjs('2022-08-07T13:00:00+00:00').format('LLLL')) // true)
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-gradient-to-r from-red-900 via-red-600 to-red-500 text-white">
      <HeroTitle />
      <label
        htmlFor="my-modal-3"
        className="after-line mx-auto my-0 text-center text-2xl font-bold transition-all md:text-3xl   lg:text-4xl"
        onClick={() => setName('Fixtures')}
      >
        Fixtures
      </label>
      <label
        htmlFor="my-modal-3"
        className="after-line mx-auto my-0 text-center text-2xl font-bold transition-all md:text-3xl   lg:text-4xl"
        onClick={() => setName('Standings')}
      >
        Standings
      </label>
      <label
        htmlFor="my-modal-3"
        className="after-line mx-auto my-0 text-center text-2xl font-bold transition-all md:text-3xl lg:text-4xl"
        onClick={() => setName('Squad')}
      >
        Squad
      </label>
      <Modal name={name} />
    </div>
  )
}

export default Home
