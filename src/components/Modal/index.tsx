import Fixtures from '@/src/pages/Fixtures'
import Squad from '@/src/pages/Squad'
import Standings from '@/src/pages/Standings'
import React from 'react'

const Modal = ({ name }: { name: string }) => {
  console.log(import.meta.env.VITE_RAPIDAPI_KEY)
  let component: JSX.Element | null = null
  switch (name) {
    case 'Squad':
      component = <Squad />
      break
    case 'Standings':
      component = <Standings />
      break
    case 'Fixtures':
      component = <Fixtures />
      break
    default:
      break
  }
  return (
    <>
      {/* The button to open modal */}
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal  bg-gradient-to-r from-red-200 to-red-600 text-white">
        <div className="modal-box min-h-screen w-full min-w-full flex-col items-center justify-center rounded-none bg-gray-600">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 h-8 w-8 md:h-12 md:w-12"
          >
            ✕
          </label>
          {component}
        </div>
      </div>
    </>
  )
}

export default Modal
