import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const GameFrame = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { gameName, url } = location.state || { gameName: 'Cargando...', url: '' };

    return (
        <div className="w-full h-screen flex flex-col items-center">
            <header className='w-full sm:w-[80vh] md:w-[70vh] lg:w-[60vh] grid grid-cols-2'>
                <FaArrowLeft className='text-4xl flex self-center justify-end cursor-pointer' onClick={() => navigate("/games")}/>
                <h1 className="text-center py-4 text-4xl flex justify-end">{gameName}</h1>
            </header>
            <iframe 
                src={url} 
                id='frame'
                className="w-full sm:w-[80vh] md:w-[70vh] lg:w-[60vh] h-[90vh]" 
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default GameFrame;