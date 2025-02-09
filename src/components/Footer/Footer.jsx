import React from 'react'
import './Footer.css'
const Footer = () => {
    const date = new Date();
  return (
    <footer className='footer'>
        <div className='first-footer-container'>
            <div className='footer-title-container'>
                <p>STORIES BY</p>
                <h4>CREDIBLE</h4>
            </div>
            <p className='footer-subtitle'>CAPTURING STORIES WORLDWIDE</p>
            <div className='footer-social-icons'>
            <a href="https://www.instagram.com/credibleweddingstories?igsh=bHh3cXIxeGxhcWc1"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.facebook.com/share/15xYgMDkfZ/?mibextid=wwXIfr"><i className='bx bxl-facebook-square' ></i></a>
            <a href="http://wa.me/916379173844"><i className='bx bxl-whatsapp' ></i></a>
            <a href="https://youtube.com/@credibleweddingstories?si=KngUxz4fxqpsGMEX"><i className='bx bxl-youtube' ></i></a>
            </div>
            <p className='copy-text'>Copyright &copy; {date.getFullYear()} Stories by Credible</p>
        </div>
        <div className='connect-footer-container'>
            <div className='img-footer-container'>
                <img src="/assets/footer.jpeg" alt="" />
            </div>
            <div className='reach-footer-container'>
                <p>READY TO CONNECT? LET'S START BY GETTING TO KNOW ONE ANOTHER! HEAD TO THE LINK BELOW AND REACH OUT!</p>
                <a href="/connect"><button className='reach-btn'>REACH OUT</button></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer