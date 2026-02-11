import React from 'react'

const Games = () => {
  return (
    <div className="w-96 h-110 border-white border-3 rounded-xl shadow-xl bg-gray-800/5 flex flex-col items-center">
      {/*  */}

      <img src="src/assets/36.png" alt="" className='w-80' />

      <h1 className='mb-2 mt-4 text-2xl font-semibold tracking-tight text-heading text-white'>Cake Drive</h1>

      <p className='text-white text-center p-2'>¡Conduce hasta entre obstáculos y a través de las curvas hasta alcanzar 36 tartas!</p>

      <div className='w-full flex justify-center mt-3'>
        <button className='text-center ring-3 text-white w-26 h-9'>
          <div className='flex'>
            <svg className="w-7 h-7 mt-0.5 mx-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
            </svg>
            ¡Jugar!
          </div>
        </button>
      </div>
    </div>
  )
}

export default Games