import React, { useState } from 'react'
import list from './serviceapi'
import {BsCheck} from "react-icons/bs"
import './Services.css'
const Services = () => {
const[items,setitems]=useState(list);
  return (
    <section id="services">
  <h5>What i Offer</h5>
  <h2>My Services</h2>
  <div className='container service_container'>
  {
    items.map((curlElem)=>{
        return(
            <article className="service">
            <div className='service_head'>
            <h3>
                {curlElem.Heading}
            </h3>
            </div>
        <ul className='service_list'>
        {
           curlElem.Skillset.map((item)=>{
                return(
                    <li>
                    <BsCheck className='service_list_icon'/>
                    <p>{item.p}</p>
                    </li>
                       );
        })}
        </ul>
            </article>
        );
    })
  }
  </div>
    </section>
  )
}

export default Services
