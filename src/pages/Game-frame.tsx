import { useLocation } from 'react-router-dom';

const GameFrame = () => {
    const location = useLocation();
    const { gameName, url } = location.state || { gameName: 'Cargando...', url: '' };

    return (
        <div className="w-full h-screen">
            <h1 className="text-center py-4 text-4xl">{gameName}</h1>
            <iframe 
                src={url} 
                className="w-full h-[80vh]" 
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default GameFrame;