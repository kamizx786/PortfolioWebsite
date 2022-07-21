import React, { useState } from 'react'
import Navbar  from './Navapi';
import './Nav.css';
const Nav = () => {
const[navdata,setnavadata]=useState(Navbar);
const [navactive,setnavactive]=useState('#top');
  return (
    
    <nav>
  {navdata.map((curlElem)=>{
return(
<a href={curlElem.id} onClick={()=>setnavactive(curlElem.id)}
className={navactive===curlElem.id ? 'active':""}
>{curlElem.img}</a>
);
  })
  }
    </nav>
  )
}

export default Nav
