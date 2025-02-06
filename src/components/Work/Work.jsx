import React from 'react'
import './Work.css'
const Work = () => {
  return (
    <div className='work-container'>
        <div className='work-top-container'>
            <h1>HOW IT WORKS</h1>
            <p>A QUICK GLIMPSE AT OUR TIME TOGETHER</p>
            <a href="#" className='work-btn'><button>START HERE</button></a>
        </div>
        <div className="work-bottom-container">
            <div className="work-card">
                <p className='work-card-number'>01</p>
                <h4>Connect</h4>
                <p className='work-card-descp'>It's so important to have a connection with your photographer. Once you've submitted an inquiry on our contact form, we will reach out to schedule a quick call so we can get to know each other more! If we both feel it's a good fit, all we'll need to reserve your date is to Book us.</p>
            </div>
            <div className="work-card">
                <p className='work-card-number'>02</p>
                <h4>Engagement Session</h4>
                <p className='work-card-descp'>Having an engagement session is such a great way to get to know each other, get used to being in front of a camera before the wedding, and a way to capture precious images of yourselves in your "everyday" attire. This is such a special time to slow down and connect in the midst of all the planning!</p>
            </div>
            <div className="work-card">
                <p className='work-card-number'>03</p>
                <h4>Wedding Day</h4>
                <p className='work-card-descp'>It's finally here! We'll be there to capture it all so that you can be present, squeeze your people, and soak in the fact that you're getting married! No need to worry about "what to do" during photos -- you two just get to be yourselves today and we'll guide you as needed.</p>
            </div>
            <div className="work-card">
                <p className='work-card-number'>04</p>
                <h4>Heirlooms</h4>
                <p className='work-card-descp'>It's time to select your favourite moments for print! Whether you prefer looking through the moments in an album, passing them every day in the halls, flipping through them one at a time in a print box, or a combination of all three - we'll help you find the perfect heirlooms to start building your legacy.</p>
            </div>
            <a href="#" className='work-mobile-btn'><button>START HERE</button></a>
        </div>
    </div>
  )
}

export default Work