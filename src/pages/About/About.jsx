import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutHero from '../../components/AboutHero/AboutHero'
import AboutDescp from '../../components/AboutDescp/AboutDescp'

export const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <AboutDescp/>
    </div>
  )
}
