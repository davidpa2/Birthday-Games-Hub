// import React from 'react'
import { useNavigate } from "react-router-dom";
import cloud from "../assets/cloud.png";
import img34 from "../assets/34.png";
import img35 from "../assets/35.png";
import img36 from "../assets/36.png";
import img37 from "../assets/37.png";
import { FaGithub } from "react-icons/fa";

interface Game {
  number: number,
  name: string,
  description: string,
  image: string,
  url: string
}

const gamesArray: Game[] = [
  {
    number: 34,
    name: "Cakes",
    description: "¡Toca todas las tartas que se mueven por la pantalla para llegar hasta 34!",
    image: img34,
    url: "https://davidpa2.github.io/cakes/"
  },
  {
    number: 35,
    name: "Cake Fall",
    description: "¡Recoge las tartas y que no te alcancen las nubes hasta llegar a 35!",
    image: img35,
    url: "https://davidpa2.github.io/CakeFall/"
  },
  {
    number: 36,
    name: "Cake Drive",
    description: "¡Conduce entre obstáculos y a través de las curvas hasta alcanzar 36 tartas!",
    image: img36,
    url: "https://davidpa2.github.io/CakeDrive/"
  },
  {
    number: 37,
    name: "Cake Operation",
    description: "¡Toca las tartas que bajan realizando operaciones hasta llegar a 37!",
    image: img37,
    url: "https://davidpa2.github.io/CakeOperation/"
  }
]

const Games = () => {
  const navigate = useNavigate();

  const openGame = (name: string, url: string) => {
    // Navegamos pasando un objeto de estado
    navigate('/game-frame', { state: { gameName: name, url: url } });
  };

  return (
    <div className="w-full h-full pb-5">
      <header>
        <h1 className="font-[CloudsOfHope] font-medium text-white text-shadow-lg/50 text-6xl ml-7 mt-6 animate-pulse">Birthday Games Hub</h1>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mt-15'>
        {
          gamesArray.map(game =>
            <>
              <div className="relative w-96 h-100 border-white border-3 rounded-xl shadow-xl bg-gray-800/5 flex flex-col items-center">
                <div className="cloud" >
                  <img src={cloud} alt="cloud image" className="cloudImage" />
                  <span className="gameNumber">{game.number}</span>
                </div>

                <img src={game.image} alt="" className='w-80 mt-6' />

                <h1 className='mb-2 mt-4 text-2xl font-semibold tracking-tight text-heading text-white'>{game.name}</h1>

                <p className='text-white text-center p-2'>{game.description}</p>

                <div className='w-full flex justify-center mt-3'>
                  <button className='text-center ring-3 text-white w-26 h-9' onClick={() => {
                    openGame(game.name, game.url);
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
            </>
          )}
      </div>

      <footer className="w-full h-28 grid-cols-2 md:grid-cols-3 relative">
        <div className="cloud" >
          <img src={cloud} alt="cloud image" className="cloudImage" />
          <span className="gameNumber"><FaGithub></FaGithub></span>
        </div>
        <div className="cloud">
          <img src={cloud} alt="cloud image" className="cloudImage" />
          <span className="gameNumber"><FaGithub></FaGithub></span>
        </div>
        <div className="cloud">
          <img src={cloud} alt="cloud image" className="cloudImage" />
          <span className="gameNumber"><FaGithub></FaGithub></span>
        </div>
      </footer>
    </div>
  )
}

export default Games