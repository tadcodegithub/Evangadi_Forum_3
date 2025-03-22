import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import style from "./Header.module.css"
import { AppState } from "../../App"

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(AppState)

  const handleAuthClick = () => {
    setIsLoggedIn((prevState) => !prevState)
    navigate(isLoggedIn ? "/login" : "/landing")
  }

  return (
    <header className={style.header_container}>
      <div className={style.logo_div}>
        <div className={style.logo}>
          <img src="/Logo.png" alt="/Home" />
        </div>
      </div>
      <div className={style.login_logout_div}>
        <Link to="/Home">Home</Link>
        <Link to="/How it works">How it Works</Link>
        <button onClick={handleAuthClick}>
          {" "}
          {isLoggedIn ? "LOG OUT" : "SIGN IN"}{" "}
        </button>
      </div>
    </header>
  )
}

export default Header
