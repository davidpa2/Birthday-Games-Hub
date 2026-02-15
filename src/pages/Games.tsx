import React from 'react'

interface Game {
  name: string,
  description: string,
  image: string,
  url: string
}

const gamesArray: Game[] = [
  {
    name: "Cakes",
    description: "¡Toca todas las taras para llegar hasta 34!",
    image: "src/assets/34.png",
    url: "https://davidpa2.github.io/cakes/"
  },
  {
    name: "Cake Fall",
    description: "¡Recoge las tartas y esquiva las nubes hasta llegar a 35!",
    image: "src/assets/35.png",
    url: "https://davidpa2.github.io/CakeFall/"
  },
  {
    name: "Cake Drive",
    description: "¡Conduce hasta entre obstáculos y a través de las curvas hasta alcanzar 36 tartas!",
    image: "src/assets/36.png",
    url: "https://davidpa2.github.io/CakeDrive/"
  },
  {
    name: "Cake Operation",
    description: "¡Toca las tartas realizando operaciones hasta llegar a 37!",
    image: "src/assets/37.png",
    url: "https://davidpa2.github.io/CakeOperation/"
  }
]

const Games = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center'>
      {
        gamesArray.map(game => 
          <div className="w-96 h-110 border-white border-3 rounded-xl shadow-xl bg-gray-800/5 flex flex-col items-center">

            <img src={game.image} alt="" className='w-80' />

            <h1 className='mb-2 mt-4 text-2xl font-semibold tracking-tight text-heading text-white'>{game.name}</h1>

            <p className='text-white text-center p-2'>{game.description}</p>

            <div className='w-full flex justify-center mt-3'>
              <button className='text-center ring-3 text-white w-26 h-9' onClick={() => {  window.location.href=game.url; console.log("aaaaaaaa");
              }}>
                <div className='flex'>
                  <svg className="w-7 h-7 mt-0.5 mx-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
                  </svg>
                  ¡Jugar!
                </div>
              </button>
            </div>
          </div>
        )}
    </div>
  )
}

export default Games