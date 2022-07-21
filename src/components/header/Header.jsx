import React from 'react'
import Me from '../../assets/me.png';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <>
    <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Kamran Ali</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA/>
       <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="me"/>
          </div> 
    <a href='#contact' className='scroll_down'>Scroll Down</a>  
     
    </div>
    </header>
    </>
    )
}

export default Header
