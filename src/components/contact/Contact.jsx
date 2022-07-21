import React, { useRef, useState } from 'react'
import "./contact.css"
import ContactData from './contactapi';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const Contact = () => {
const[data]=useState(ContactData);
const [Name,setName]=useState("");
const form=useRef();
const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oqcmz2f', 'template_6clct6j', form.current, 
    '3LY8Td2ZasENpKA5F')
e.target.reset();
swal(`Hi ${Name} Your Email Has Been Sent a SuccessFully`);
}

  return (
    <section id='contact'>
<h5>Get in Touch</h5>
<h2>Contact</h2>
<div className='container contact-container'>
<div className='contact-options'>
{
data.map((item)=>{
    return(
<article className='contact-option'>
<i className='icon'>{item.icon}</i>
<h4>{item.h4}</h4>
<a href={item.link} rel="noreferrer" target="_blank">Send a Message</a>
</article>
    );
})
}
</div>
{/*Start of Form*/}
<form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Your Full Name' required
    onChange={(e)=> setName(e.target.value)}/>
    <input type="text" name='email' placeholder='example@mail.com' required/>
    <textarea name='message' placeholder='Your Message' rows="7" required/>
    <button type='submit' className='btn btn-primary'>Send Message</button>
 
    { /* <Recaptcha
       sitekey="6LfEn8YgAAAAAOjiYEn_u5mpc7Q2OYabvDKAPSHn"
        onLoadCallBack={onChange}
      />
      */
    }
   
</form>

</div>

    </section>
  )
}

export default Contact
