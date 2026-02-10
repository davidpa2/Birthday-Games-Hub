import React from 'react'

const Games = () => {
  return (
    <div className="w-96 h-56 border-white border-3 rounded-xl shadow-xs bg-gray-800/5 flex flex-col justify-between"
        style={{backgroundImage: "url(" + "src/assets/36.png" + ")", backgroundPosition: 'center', backgroundSize: '100%'}}>
      <h1 className='text-red-500 text-5xl p-2 font-[Pangolin] font-bold stroke-3 drop-shadow-[0_3px_0px_rgba(255,255,255,1)]'>Cake Drive</h1>

      <p className='text-white bg-gray-800/10 p-2'>¡Conduce hasta entre obstáculos y a través de las curvas hasta alcanzar 36 tartas!</p>
    </div>
  )
}

export default Games