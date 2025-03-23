import React from 'react'
import { FaFacebookF , FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import style from './Footer.module.css'
export const Footer = () => {
  return (
    <footer>
        <div className={style.s_logo}>
     <div className={style.logo}>
        <img src={logo} alt="logo" />
        </div>  
        <div className={style.s_icon}>
            <a href="">
            <FaFacebookF />
            </a>
            <a href="">
            <FaInstagram />
            </a>
            <a href="">
            <FaYoutube />
            </a>
            </div>     
        </div>
        <div className={style.useful_links}>
            <h3>Useful Links</h3>
            <ul>
                <li>

            <a href="">How It Works</a>
                </li>
                <li>

            <a href="">Terms Of Service</a>
                </li>
                <li>

            <a href="">Privacy Policy</a>
                </li>
            </ul>

        </div>
        <div className={style.contact}>
            <h3>Contact Info</h3>
            <ul>
                <li>
                    Evangadi Networks
                </li>
                <li>
                    support@evangadi.com
                </li>
                <li>
                    +1(202)386-2702
                </li>
            </ul>

        </div>
    </footer>
  )
}
