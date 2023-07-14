import React from 'react';
import Heading from '../Heading/Heading';
import style from './About.module.css';

function About() {
  return (
    <div className={style.about} id='about'>
        <Heading title={'ABOUT'} override={false}/>
        <div className={style.content}>
            <div><p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div><p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
        </div>
        <a href='#'><i class="fa-solid fa-download"></i>free download!</a>
    </div>
  );
}

export default About;