import React from 'react'
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { About } from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Info from './pages/Info/Info'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/experience' element={<Experience/>}></Route>
        <Route path='/info' element={<Info/>}></Route>
      </Routes>
    </div>
  )
}

export default App