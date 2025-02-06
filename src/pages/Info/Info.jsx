import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import InfoMain from '../../components/InfoMain/InfoMain'
import InfoDescp from '../../components/InfoDescp/InfoDescp'
import './Info.css'
import Booking from '../../components/Booking/Booking'
import Footer from '../../components/Footer/Footer'
const Info = () => {
  return (
    <div>
        <Navbar/>
        <InfoMain/>
        <InfoDescp/>
        <div className='info-img-1'></div>
        <Booking/>
        <div className='info-img-2'></div>
        <Footer/>
    </div>
  )
}

export default Info