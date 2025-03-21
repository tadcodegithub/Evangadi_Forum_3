import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "./images/Logo.png";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  
  const handleAuthClick = () => {
    setIsLoggedIn((prevState) => !prevState);
    navigate(isLoggedIn ? "/login" : "/dashboard"); 
  };

  return (
    <header className={classes.headerContainer}>
      {/* Logo (Clickable for Navigation) */}
      <div className={classes.innerClass} onClick={() => navigate("/HomePages")}>
        <img className={classes.headerImg} src={logo} alt="/HomePage" />
      </div>

      {/* Navigation Links */}
      <nav className={classes.navLinks}>
        <Link to="/HomePages">Home</Link>
        <Link to="/How-it-works">How it works</Link>
      </nav>

      {/* Authentication Button */}
      <div className={classes.authButton}>
        <button
          className={isLoggedIn ? classes.logoutButton : classes.signInButton}
          onClick={handleAuthClick}
        >
          {isLoggedIn ? "LOG OUT" : "SIGN IN"}
        </button>
      </div>
    </header>
  );
}

export default Header;
