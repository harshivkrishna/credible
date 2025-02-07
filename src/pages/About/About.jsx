import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutHero from '../../components/AboutHero/AboutHero'
import AboutDescp from '../../components/AboutDescp/AboutDescp'
import Category from '../../components/Category/Category'
import Inquiry from '../../components/Inquiry/Inquiry'
import Footer from '../../components/Footer/Footer'
import Detail from '../../components/Detail/Detail'
export const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <AboutDescp/>
        <Detail/>
        <Category/>
        <Inquiry/>
        <Footer/>
    </div>
  )
}
