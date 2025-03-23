import React, { useRef, useState,useContext } from "react"
import axios from "../../../utility/axios"
import { useNavigate } from "react-router-dom"
import classes from "./LoginPage.module.css"
import { AppState } from "../../../App"

function LoginPage() {
  const navigate = useNavigate()
  const emailDom = useRef()
  const passwordDom = useRef()
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })
  const { user, setUser } = useContext(AppState)
  function validateForm() {
    const emailValue = emailDom.current.value.trim()
    const passwordValue = passwordDom.current.value.trim()
    let isValid = true
    let newErrors = { email: "", password: "" }

    // Email validation
    if (!emailValue) {
      newErrors.email = "Email is required!"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      newErrors.email = "Invalid email format!"
      isValid = false
    }

    // Password validation
    if (!passwordValue) {
      newErrors.password = "Password is required!"
      isValid = false
    } else if (passwordValue.length < 6) {
      newErrors.password = "Password must be at least 6 characters!"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validateForm()) return

    try {
      const { data } = await axios.post("/api/users/login", {
        email: emailDom.current.value,
        password: passwordDom.current.value,
      })
      // alert("Successfully Logged In");
      localStorage.setItem("token", data.token)
      console.log(data)
      setUser(data)
      navigate("/home")
    } catch (error) {
      console.log(error.response)
      setErrors({ ...errors, password: "Invalid email or password!" })
    }
  }

  return (
    <section className={classes.loginSection}>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <div>
          <span>Email:</span>
          <input ref={emailDom} type="email" placeholder="Email" />
          {errors.email && <p className={classes.error}>{errors.email}</p>}
        </div>

        <div className={classes.loginPasswordContainer}>
          <span>Password:</span>
          <input
            ref={passwordDom}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span
            className={classes.loginTogglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
          {errors.password && (
            <p className={classes.error}>{errors.password}</p>
          )}
        </div>

        <button className={classes.loginButton} type="submit">
          Login
        </button>
      </form>
    </section>
  )
}

export default LoginPage
