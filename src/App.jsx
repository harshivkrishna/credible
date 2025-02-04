import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Descp from './components/Descp/Descp'
import Video from './components/Video/Video'
import Everything from './components/Everything/Everything'
import Whyus from './components/Whyus/Whyus'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { About } from './pages/About/About'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App