import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutHero from '../../components/AboutHero/AboutHero'
import AboutDescp from '../../components/AboutDescp/AboutDescp'
import Category from '../../components/Category/Category'
import Inquiry from '../../components/Inquiry/Inquiry'
import Footer from '../../components/Footer/Footer'
export const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <AboutDescp/>
        <Category/>
        <Inquiry/>
        <Footer/>
    </div>
  )
}
