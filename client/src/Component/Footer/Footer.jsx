import React from "react";
import styles from "./Footer.module.css"; 
import logo from "../Footer/Image/logo-footer.png"; 
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Logo and Socials */}
      <div className={styles.logoSection}>
        <img src={logo} alt="Evangadi Logo" className={styles.logo} />
        <div className={styles.iconsWrapper}>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://www.youtube.com" aria-label="YouTube">
            <FaYoutube className={styles.icon} />
          </a>
        </div>
      </div>

      {/* Useful Links */}
      <div className={styles.linksSection}>
        <h3>Useful Links</h3>
        <ul>
            <li>
                <a href="#">How it works</a>
            </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className={styles.contactSection}>
        <h3>Contact Info</h3>
        <ul>
          <li>
            <a href="mailto:support@evangadi.com">support@evangadi.com</a>
          </li>
          <li>
            <a href="tel:+12023862702">+1-202-386-2702</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
