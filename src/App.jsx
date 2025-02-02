import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Descp from './components/Descp/Descp'
import Video from './components/Video/Video'
import Everything from './components/Everything/Everything'
import Whyus from './components/Whyus/Whyus'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Descp/>
      <Video/>
      <Everything/>
      <Whyus/>
    </div>
  )
}

export default App