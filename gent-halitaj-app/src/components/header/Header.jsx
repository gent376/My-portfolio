import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/genti.jpg'
import HS from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
        <div className='container header__container'>
      <h5>Hello, I am</h5>
      <h1>Gent Halitaj</h1>
      <h5 className='text-lights'>and I am a Front-end developer</h5>
      <CTA/>
      <HS/>
      <div className='me'>
        <img src={ME} alt="Gent Halitaj" width='200px' />
      </div>

      <a className='scroll__down' href='#contact'>Scroll Down</a>

    </div>
    </header>

  )
}

export default Header
