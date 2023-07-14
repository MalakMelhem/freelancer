import React from 'react';
import style from './Card.module.css';


function Card({img}) {
  return (
    <div className={style.card}>
        <div className={style.img}>
            <img src={img} alt='portfolio item' />
        </div>
        <div className={style.overlay}>
            <i className="fa-solid fa-plus"></i>
        </div>
    </div>
  );
}

export default Card