import React, { useRef, useState, useContext } from "react"
import Instance from "../../../utility/axios"
import { useNavigate } from "react-router-dom"
import styles from "./LoginPage.module.css"
import { FaRegEyeSlash } from "react-icons/fa"
import { GoEye } from "react-icons/go"
import { AppState } from "../../../App"

function LoginPage({ setShowLogin }) {
  const emailDom = useRef(null)
  const passwordDom = useRef(null)
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(true)
  const [textpass, setTextPass] = useState("password")
  const [error, setError] = useState("")
  const { user, setUser } = useContext(AppState)

  const passToggler = () => {
    setShowPass(!showPass)
    setTextPass(showPass ? "text" : "password")
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const emailValue = emailDom.current.value
    const passwordValue = passwordDom.current.value

    if (!emailValue || !passwordValue) {
      setError("Please provide both email and password.")
      return
    }

    try {
      const { data } = await Instance.post("/api/users/login", {
        email: emailValue,
        password: passwordValue,
      })
      const token = data.token
      localStorage.setItem("token", token)
      setError("")
      setUser(data)
      navigate("/home")
    } catch (apiError) {
      setError(apiError.response?.data?.msg || "Invalid email or password.")
      console.error("Login error:", apiError)
    }
  }

  return (
    <section className={`${styles.input_container} ${styles.login_container}`}>
      <section className={styles.input_form}>
        <h2>Login to your account</h2>
        <p className={styles.create_account}>
          Don't have an account?{" "}
          <span
            className={styles.clickable}
            onClick={() => setShowLogin(false)}
          >
            Create a new account
          </span>
        </p>
        <form onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          <div>
            <input ref={emailDom} type="email" placeholder="Your Email" />
          </div>
          <div className={styles.password_container}>
            <input
              ref={passwordDom}
              type={textpass}
              placeholder="Your Password"
            />
            <span onClick={passToggler}>
              {showPass ? <FaRegEyeSlash /> : <GoEye color="#ff8000" />}
            </span>
          </div>

          <button className={styles.login_btn} type="submit">
            Submit
          </button>
        </form>
        <div>
          <a className={styles.clickable} href="/forgot-password">
            Forgot password?
          </a>
        </div>
      </section>
    </section>
  )
}

export default LoginPage
