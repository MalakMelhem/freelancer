import React,{useState} from 'react';
import style from './Navbar.module.css';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    function handleToggle(){
       setIsActive(!isActive);
    }
  return (
    <nav className={style.navbar}>
       <div className={style.logo}>
        <a href='#'>start bootstrap</a>
       </div>
       <a href='#' className={style.toggleBtn} onClick={handleToggle}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
       </a>
       <div className={style.list}>
            <ul className={isActive?style.active:''}>
                <li><a href='#portfolio'>portfolio</a></li>
                <li><a href='#about'>about</a></li>
                <li><a href='#contact'>contact</a></li>
            </ul>
       </div>
    </nav>
  );
}
