import { useState } from 'react'
import './App.css'
import Board from './Pages/Board/Board'
import { Home } from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/board' element={<Board />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
