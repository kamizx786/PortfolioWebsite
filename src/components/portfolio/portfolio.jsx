import React, { useState } from 'react'
import './portfolio.css'
import Portfolioitem from './portfolioapi'
const Portfolio = () => {
const[portfoliodata,setportfoliodata]=useState(Portfolioitem);
  return (
    <section id='portfolio'>
<h5>My Recent Work</h5>
<h2>My Portfolio</h2>
<div className='container portfolio_container'>
{
    portfoliodata.map((item)=>{
        return(
<article className='portfolio_item'>
<div className='portfolio_image'>
<img src={item.image}/>
</div>
<h3>{item.title}</h3>
<div className='portfolio_cta'>
<a href={item.github} target="_blank" className='btn'>Github</a>
<a href={item.demo} target="_blank" className='btn btn-primary'>Live Demo</a>
</div>
</article>
        );
    })
}

</div>
    </section>
  )
}

export default Portfolio
