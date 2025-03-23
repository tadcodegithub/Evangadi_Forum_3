import React, { useState } from "react"
import style from "./landing.module.css"
import LoginPage from "../Auth/LoginPage/LoginPage"
import SigninPage from "../Auth/SigninPage/SigninPage"
import LayOut from "../../Component/LayOut/LayOut"
// import ForgetPassword from "../Auth/ForgetPassword"
function Landing() {
  const [active, setAtive] = useState("signin")
  const [animation, setAnimation] = useState("")

  const switchpage = (formName) => {
    setAnimation("slide-out")
    setTimeout(() => {
      setAtive(formName)
      setAnimation("slide-in")
    }, 500)
  }
  return (
    <LayOut>
      <section className={style.index_container}>
        <div className={style.index_content}>
          <div className={style.sinin_create_account}>
            {active === "signin" && (
              <div className={`form ${animation}`}>
                <LoginPage switchpage={setAtive} />
              </div>
            )}
            {active === "createAccount" && (
              <div className={`form ${animation}`}>
                <SigninPage switchpage={setAtive} />
              </div>
            )}
            {/* {active === "forget" && (
            <div className={`form ${animation}`}>
              <ForgetPassword switchpage={setAtive} />
            </div>
          )} */}
          </div>
          <div className={style.about}>about</div>
        </div>
      </section>
    </LayOut>
  )
}

export default Landing
