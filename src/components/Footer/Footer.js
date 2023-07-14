import React from 'react';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.mainFooter}>
            <div className={style.footerItem}>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
            <div className={style.footerItem}>
                <h3>AROUND THE WEB</h3>
                <ul className={style.listIcons}>
                    <li><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                    <li><i class="fa-solid fa-globe"></i></li>
                </ul>
            </div>
            <div className={style.footerItem}>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href=''>Start Bootstrap</a> .</p>
            </div>
        </div>
        <div className={style.tailFooter}>
            <p>Copyright © Your Website 2023</p>
        </div>
    </div>
  );
}

export default Footer;