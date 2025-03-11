import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './pages/Start'
import Home from './pages/Home'
import Test from './pages/Test'
import Res from './pages/Res'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'


function App() {
  const [score,setScore] = useState(0);

  const Add = ()=>{
    setScore(score+10);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home score={score}/>} />

        <Route path="/test/sport" element={<Test name='sport' updateScore={Add} score={score}/>} />
        <Route path="/test/science" element={<Test name='science' updateScore={Add} score={score}/>} />
        <Route path="/test/math" element={<Test name='math' updateScore={Add} score={score}/>} />
        
        <Route path="/res" element={<Res score={score} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
