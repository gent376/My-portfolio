import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>GENT HALITAJ</a>

      <ul className='permalinks'>
        <a href="#header">Home</a>
        <a href="#about">About me</a>
        <a href="#experience">My experience</a>
        <a href="#services">My services</a>
        <a href="#contact">Contact me</a>
      </ul>

      <div className="footer-sociales">
        <a href="https://www.facebook.com/"><FaFacebook/></a>
        <a href="https://www.instagram.com/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/feed/"><AiFillLinkedin/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; GENT HALITAJ. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
