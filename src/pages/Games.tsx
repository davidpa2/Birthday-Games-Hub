import React from 'react'

type Props = {}

const Games = (props: Props) => {
  return (
    <div className="w-96 h-56 border-3 rounded-xl shadow-xs bg-gray-800/25"
        style={{backgroundImage: "url(" + "src/assets/36.png" + ")", backgroundPosition: 'center', backgroundSize: '100%'}}>
      {/* <img className='11' src="src\assets\36.png" alt="" /> */}
      <h1 className='text-red-500 text-3xl font-sans'>Cake Drive</h1>

      <p className='text-white'>¡Conduce hasta entre obstáculos y a través de las curvas hasta alcanzar 36 tartas!</p>
    </div>
  )
}

export default Games