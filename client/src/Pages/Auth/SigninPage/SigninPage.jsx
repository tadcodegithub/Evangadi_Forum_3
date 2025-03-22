import React, { useRef, useState } from "react"
import axios from "../../../axiosConfig"
import { Link, useNavigate } from "react-router-dom"
import classes from "./SigninPage.module.css"

const SigninPage = () => {
  const navigate = useNavigate()
  const userNameDom = useRef()
  const firstNameDom = useRef()
  const lastNameDom = useRef()
  const emailDom = useRef()
  const passwordDom = useRef()
  const [showPassword, setShowPassword] = useState(false)

  // State to store validation errors
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const errors = {}
    const username = userNameDom.current.value.trim()
    const firstName = firstNameDom.current.value.trim()
    const lastName = lastNameDom.current.value.trim()
    const email = emailDom.current.value.trim()
    const password = passwordDom.current.value.trim()

    if (!username) errors.username = "Username is required."
    if (!firstName) errors.firstName = "First name is required."
    if (!lastName) errors.lastName = "Last name is required."
    if (!email) {
      errors.email = "Email address is required."
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format."
    }
    if (!password) {
      errors.password = "Password is required."
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters."
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!validateForm()) {
      return // Stop submission if validation fails
    }

    try {
      await axios.post("/api/users/register", {
        username: userNameDom.current.value.trim(),
        firstname: firstNameDom.current.value.trim(),
        lastname: lastNameDom.current.value.trim(),
        email: emailDom.current.value.trim(),
        password: passwordDom.current.value.trim(),
      })
      navigate("/login")
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <section className={classes.registerContainer}>
      <h2>Join the Network</h2>
      <form className={classes.siginForm} onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <input ref={userNameDom} type="text" placeholder="Username" />
          {errors.username && (
            <p className={classes.error}>{errors.username}</p>
          )}
        </div>

        <div className={classes.inputContainer}>
          <input ref={firstNameDom} type="text" placeholder="First Name" />
          {errors.firstName && (
            <p className={classes.error}>{errors.firstName}</p>
          )}
        </div>

        <div className={classes.inputContainer}>
          <input ref={lastNameDom} type="text" placeholder="Last Name" />
          {errors.lastName && (
            <p className={classes.error}>{errors.lastName}</p>
          )}
        </div>

        <div className={classes.inputContainer}>
          <input ref={emailDom} type="email" placeholder="Email Address" />
          {errors.email && <p className={classes.error}>{errors.email}</p>}
        </div>

        <div className={classes.passwordContainer}>
          <input
            ref={passwordDom}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span
            className={classes.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        {errors.password && <p className={classes.error}>{errors.password}</p>}

        <button className={classes.signinButton} type="submit">
          Agree and Join
        </button>
        <h3>Alredy Have An Account</h3>
        <Link to={"/login"}>
          <button className={classes.signinButton}>login</button>
        </Link>
      </form>
    </section>
  )
}

export default SigninPage
