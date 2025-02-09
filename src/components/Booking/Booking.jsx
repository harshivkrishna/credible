import React from 'react'
import './Booking.css'
const Booking = () => {
  return (
    <div className='booking-container'>
        <div className="booking-top">
            <h1>OUR BOOKING <br /> PROCESS</h1>
            <p>what makes us different & how you get the image you deserve</p>
            <img src="/assets/flower2.svg" alt="" />
        </div>  

        <div className='booking-bottom'>
            <div className="booking-card">
                <p className='number'>01</p>
                <h4>Inquire</h4>
                <p className='booking-descp'>Fill out our inquiry form and give us all the details about you, your significant other and your hopes for your wedding day!</p>
                <a href="/connect"><button>CONTACT US</button></a>
            </div>

            <div className="booking-card">
                <p className='number'>02</p>
                <h4>Connect</h4>
                <p className='booking-descp'>We take a limited number of weddings each year. We're big believers in connection and making sure we're the best fit to serve you.</p>
                <a href="/about"><button>GET TO KNOW US</button></a>
            </div>

            <div className="booking-card">
                <p className='number'>03</p>
                <h4>Celebrate</h4>
                <p className='booking-descp'>Feeling like this is a great fit? Once we've had a chance to chat, all we'll need to reserve your date is a booking amount.</p>
            </div>
        </div>
    </div>
  )
}

export default Booking