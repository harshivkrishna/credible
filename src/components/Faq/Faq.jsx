import React from 'react'
import './Faq.css'
const Faq = () => {
  return (
    <div className='faq-container'>
        <h2>FAQ</h2>
        <div className='question-container'>
            <div className='question-top'>
                <h4>Where are you based? Are you open to travel for my wedding?</h4>
                <p>We are based in Raipur, India. We have shot weddings all over the India, and are happy to travel to your wedding in any corner of India and abroad too.</p>
            </div>
            <div className="question-bottom">
                <h4>When can we expect the delivery?</h4>
                <p>Editing a film is a creative process and we take it very seriously. Each film goes through a series of iterations till we reach a point where we ourselves are satisfied with it. It usually takes us 20 weeks to deliver the complete wedding film based on our work schedule. And for delivery of edited photos takes us 4 weeks.</p>
            </div>
        </div>
        <a href="/info">CONTINUE TO FAQ PAGE</a>
    </div>
  )
}

export default Faq