import React from 'react';
import Card from '../Card/Card';
import Heading from '../Heading/Heading';
import style from './Portfolio.module.css';
import img1 from './img/cabin.png';
import img2 from './img/cake.png';
import img3 from './img/circus.png';
import img4 from './img/game.png';
import img5 from './img/safe.png';
import img6 from './img/submarine.png';


function Portfolio() {
  const arrayOfImg=[img1,img2,img3,img4,img5,img6];
  return (
    <div id='portfolio'>
        <Heading title={'PORTFOLIO'} override={true}/>
        <div className={style.container}>
          {arrayOfImg.map((imgsrc,index)=>
          <Card img={imgsrc} key={index}/>)}
        </div>
        
    </div>
  )
}

export default Portfolio