import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CookiePolicy from './pages/CookiePolicy';
import Footer from './components/Footer';
import Game from './pages/Game';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
       <Routes>
        <Route path='/' index={true} element={<Home />}></Route>
        <Route path='/privacy-policy'  element={<CookiePolicy />}></Route>
        <Route path='/game/:id'  element={<Game />}></Route>
       </Routes>
      <Footer />
    </>
  )
}

export default App
