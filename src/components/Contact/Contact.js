import React from 'react';
import Heading from '../Heading/Heading';
import style from './Contact.module.css';

function Contact() {
  return (
    <div className={style.contact} id='contact'>
        <Heading title={'CONTACT ME'} override={true}/>
        <div className={style.contactForm}>
          <form>
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" name="name"/>

            <label htmlFor="lname">Email address</label>
            <input type="email" id="email" name="email"/>  

            <label htmlFor="phone">Phone number</label>
            <input type="text" id="phone" name="phone"/> 

            <label htmlFor="message">Message</label> 
            <textarea  id="message" type="text" data-sb-validations="required" data-sb-can-submit="no"></textarea> 
            <button type='submit'>Send</button>          
          </form>
        </div>
    </div>
  )
}

export default Contact