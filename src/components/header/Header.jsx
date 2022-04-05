import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <section id='home'>
      <div className="container header__container">
      <a href="#about" className='scroll__down'>— Scroll Down —</a>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <HeaderSocials />
        <div className='header__content'>
        <h5>Hello, I'm</h5>
        <h1>Alexander Auermaa</h1>
        </div>
        <h5 className="text-light">Nonstack developer</h5>
        <CTA />
      </div>
    
      </section>
  )
}

export default Header