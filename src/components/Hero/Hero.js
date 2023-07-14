import React from 'react';
import img from './img/avataaars.svg';
import style from './Hero.module.css';
import Heading from '../Heading/Heading';

function Hero() {
  return (
    <div className={style.hero}>
        <div className={`${style.container} ${style.displyCenter}`}>
            <div className={style.img}>
                <img src={img} />
            </div>
            <Heading title={'START BOOTSTRAP'}/>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        
    </div>
  );
}

export default Hero;