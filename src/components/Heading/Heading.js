import React from 'react';
import style from './Heading.module.css';

function Heading({title,override}) {
  return (
    <div className={style.heading}>
        <h1 className={override?style.HeaderClass:''}>{title}</h1>
    <div className={`${style.icon} ${override?style.iconClass:''}`}><i className='fa-solid fa-star'></i></div>
  </div>
  );
}

export default Heading;