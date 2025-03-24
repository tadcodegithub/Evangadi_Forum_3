import React, { useRef, useState } from "react"
import Instance from "../../../utility/axios"
import { useNavigate } from "react-router-dom"
import styles from "./SigninPage.module.css"
import { FaRegEyeSlash } from "react-icons/fa"
import { GoEye } from "react-icons/go"

function SigninPage({ setShowLogin }) {
  const userNameDom = useRef(null)
  const firstNameDom = useRef(null)
  const lastNameDom = useRef(null)
  const emailDom = useRef(null)
  const passwordDom = useRef(null)
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(true)
  const [textpass, setTextPass] = useState("password")
  const [error, setError] = useState("")

  const passToggler = () => {
    setShowPass(!showPass)
    setTextPass(showPass ? "text" : "password")
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const userNameValue = userNameDom.current.value
    const firstNameValue = firstNameDom.current.value
    const lastNameValue = lastNameDom.current.value
    const emailValue = emailDom.current.value
    const passwordValue = passwordDom.current.value

    if (
      !userNameValue ||
      !firstNameValue ||
      !lastNameValue ||
      !emailValue ||
      !passwordValue
    ) {
      setError("Please provide all required information.")
      return
    }

    try {
      const response = await Instance.post("api/users/register", {
        username: userNameValue,
        firstname: firstNameValue,
        lastname: lastNameValue,
        email: emailValue,
        password: passwordValue,
      })

      console.log(response.data)
      setError("")
      // alert("User registered successfully. Please login to continue.")
      setShowLogin(true)
      navigate("/landing")
    } catch (apiError) {
      setError(
        apiError.response?.data?.msg || "An error occurred during registration."
      )
      console.error("Registration error:", apiError)
    }
  }

  return (
    <section className={`${styles.input_container} ${styles.signup_container}`}>
      <section className={styles.input_form}>
        <h2>Join the network</h2>
        <p className={styles.create_account}>
          Already have an account?
          <span className={styles.clickable} onClick={() => setShowLogin(true)}>
            Sign in
          </span>
        </p>
        <form onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          <div>
            <input ref={userNameDom} type="text" placeholder="Username" />
          </div>
          <div className={styles.names}>
            <input ref={firstNameDom} type="text" placeholder="First name" />
            <input ref={lastNameDom} type="text" placeholder="Last name" />
          </div>
          <div>
            <input ref={emailDom} type="email" placeholder="Email address" />
          </div>
          <div className={styles.password_container}>
            <input ref={passwordDom} type={textpass} placeholder="Password" />
            <span onClick={passToggler}>
              {showPass ? <FaRegEyeSlash /> : <GoEye color="#ff8000" />}
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <p className={styles.center}>
              <span>
                I agree to the{" "}
                <a href="/privacy-policy" className={styles.clickable}>
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms-of-service" className={styles.clickable}>
                  terms of service
                </a>
              </span>
            </p>
            <button
              className={`${styles.login} ${styles.signup_btn}`}
              type="submit"
            >
              Agree and Join
            </button>
            <a href="/landing" className={`${styles.clickable} ${styles.center}`}>
              Already have an account?
            </a>
          </div>
        </form>
      </section>
    </section>
  )
}

export default SigninPage
