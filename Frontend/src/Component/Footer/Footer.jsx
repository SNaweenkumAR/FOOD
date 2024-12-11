import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
           <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt=""  className='logo'/>
                <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat itaque officiis cumque quaerat odio debitis voluptates fugit quia, quo, animi eum laborum quasi suscipit, ipsa earum ratione cum repudiandae?</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About-Us</li>
                        <li>Service</li>
                        <li>Privacy-Policy</li>
                    </ul>
            </div>
            <div className='footer-content-right'>
      <h2>Get in Touch</h2>
      <ul>
           <li>+91 9093313101</li>
           <li>srimurugan@gmail.com</li>
      </ul>
            </div>

           </div>
           <hr />
           <p className="footer-copyright">Copyright 2024 © SMC.com - All Right Reserved</p>
           
    </div>
  )
}

export default Footer
