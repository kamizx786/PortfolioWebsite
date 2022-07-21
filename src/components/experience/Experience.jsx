import React, { useState } from 'react'
import ExpDetail1 from './experienceapi'
import {BsFillPatchCheckFill} from "react-icons/bs"
import "./experience.css"
const Experience = () => {
const[front,setfront]=useState(ExpDetail1);
  return (
   <section id="experience">
    <h5>What skills I have</h5>
    <h2>My Experience</h2>
    <div className='container experience_container'>
{
    front.Experience.map((curlElem)=>{
        return(
            <div>
     <h3>{curlElem.heading}</h3>
    <div className='experience_content'>
        {
            curlElem.exp.map((item)=>{
                return(
            <article className='experience_detail'>
            <i className='icon'>{item.icon}</i>
            <div>
            <h4>{item.h4}</h4>
            <small className='text-light'>{item.small}</small>
            </div>
            </article>
                );
            })
        }
            </div>
    </div>
    
        );
    })
}

    </div>
   </section>
  )
}

export default Experience
