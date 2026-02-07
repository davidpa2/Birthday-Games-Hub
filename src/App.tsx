import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Games from './pages/Games';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
    </Routes>
    
    <Routes>
      <Route path="/Games" element={<Games/>} />
    </Routes>
    </>
  );
}

export default App
