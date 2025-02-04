import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Descp from './components/Descp/Descp'
import Video from './components/Video/Video'
import Everything from './components/Everything/Everything'
import Whyus from './components/Whyus/Whyus'
import Gallery from './components/Gallery/Gallery'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Descp/>
      <Video/>
      <Everything/>
      <Whyus/>
      <Gallery/>
    </div>
  )
}

export default App