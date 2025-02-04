import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Descp from '../../components/Descp/Descp'
import Video from '../../components/Video/Video'
import Everything from '../../components/Everything/Everything'
import Whyus from '../../components/Whyus/Whyus'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Descp/>
      <Video/>
      <Everything/>
      <Whyus/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Home