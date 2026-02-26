import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Games from './pages/Games';
import GameFrame from './pages/Game-frame';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/games" element={<Games/>} />
      <Route path="/game-frame" element={<GameFrame />} />
    </Routes>
    </>
  );
}

export default App
