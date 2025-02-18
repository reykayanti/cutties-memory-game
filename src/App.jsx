import { useState } from 'react'
import './App.css'
import Board from './Pages/Board/Board'
import { Home } from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Gift from './Pages/Gift/Gift'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/board' element={<Board />}></Route>
        <Route path='/gift' element={<Gift />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
