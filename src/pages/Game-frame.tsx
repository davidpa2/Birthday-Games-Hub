import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const GameFrame = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { gameName, url } = location.state || { gameName: 'Cargando...', url: '' };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-end">
            <header className='w-full sm:w-[80vh] md:w-[70vh] lg:w-[60vh] grid grid-cols-[20%_80%]'>
                <FaArrowLeft className='text-4xl ml-3 flex self-center justify-end cursor-pointer' onClick={() => navigate("/games")}/>
                <h1 className="text-center mr-5 py-4 text-4xl flex justify-end">{gameName}</h1>
            </header>
            <iframe 
                src={url} 
                id='frame'
                className="w-full sm:w-[80vh] md:w-[70vh] lg:w-[60vh] h-[95vh]" 
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default GameFrame;