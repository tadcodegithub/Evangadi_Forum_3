import React, { useState } from "react"
import style from "./landing.module.css"
import LoginPage from "../Auth/LoginPage/LoginPage"
import SigninPage from "../Auth/SigninPage/SigninPage"
import LayOut from "../../Component/LayOut/LayOut"
// import ForgetPassword from "../Auth/ForgetPassword"
import About from "../../Component/About/About"
function Landing() {
  const [showLogin, setShowLogin] = useState(true)
  const [slideDirection, setSlideDirection] = useState("")

  const handleSwitch = () => {
    setSlideDirection(showLogin ? style.slideOutLeft : style.slideOutRight)

    setTimeout(() => {
      setShowLogin((prev) => !prev)
      setSlideDirection(showLogin ? style.slideInRight : style.slideInLeft)
    }, 50) // Animation time
  }
  return (
    <LayOut>
      <div className={style.landingPageContainer}>
        <div className={style.formSection}>
          <div className={`${style.formWrapper} ${slideDirection}`}>
            {showLogin ? (
              <LoginPage setShowLogin={handleSwitch} />
            ) : (
              <SigninPage setShowLogin={handleSwitch} />
            )}
          </div>
        </div>
        <div className={style.aboutSection}>
          <About />{" "}
        </div>
      </div>
    </LayOut>
  )
}

export default Landing
