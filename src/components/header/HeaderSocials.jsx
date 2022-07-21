import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className='header_social'>
      <a href='https://github.com/' target="_blank"><BsGithub/></a>
      <a href='https://www.linkedin.com/in/kamran-ali-21a7051b3/' target="_blank"><BsLinkedin/></a>
      <a href='https://www.facebook.com/insane0222/' target="_blank"><BsFacebook/></a>  
      
    </div>
  )
}

export default HeaderSocials
