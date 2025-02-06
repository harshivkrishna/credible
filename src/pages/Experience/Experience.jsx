import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ExpHero from '../../components/ExpHero/ExpHero'
import Footer from '../../components/Footer/Footer'
import ExpDescp from '../../components/ExpDescp/ExpDescp'
import './Experience.css'
import Faq from '../../components/Faq/Faq'
const Experience = () => {
  return (
    <div>
        <Navbar/>
        <ExpHero/>
        <ExpDescp/>
        <div className='present'>
            <h2>Present Over Perfect</h2>
        </div>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Experience