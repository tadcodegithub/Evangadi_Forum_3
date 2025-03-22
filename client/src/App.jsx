
import React, { useEffect, useState, createContext } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import axios from "./utility/axios"
import QuestionForm from "./Pages/QuestionForm/QuestionForm"
export const AppState = createContext()
function App() {
  const [user, setUser] = useState({})
  const token = localStorage.getItem("token")
  const [userFullName, setUserFullName] = useState("")
  const navigate = useNavigate()
  async function checkUser() {
    try {
      const { data } = await axios.get(
        "/api/users/check",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhZCIsInVzZXJpZCI6MSwiaWF0IjoxNzQyNjI3MDYwLCJleHAiOjE3NDI3MTM0NjB9.MEJa2BJznxhrYbJNtudWJ5nWvgYWAxUe3jBOSjlKtF8`, // Include the JWT token
          },
        } // Config object for headers
      )
      console.log(data)
      setUser(data)
    } catch (error) {
      console.log(error)
      navigate("/landing")
    }
  }
  console.log(user.userid)
  async function getFullname() {
    const userid = user.userid
    const fullname = await axios.get(
      "/api/users/getFullName",
      { userid },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhZCIsInVzZXJpZCI6MSwiaWF0IjoxNzQyNjI3MDYwLCJleHAiOjE3NDI3MTM0NjB9.MEJa2BJznxhrYbJNtudWJ5nWvgYWAxUe3jBOSjlKtF8`, // Include the JWT token
        },
      }
    )
    // setUserFullName(fullname)
  }
  useEffect(() => {
    checkUser()
    // getFullname()
  }, [])
  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ask" element={<QuestionForm />} />
      </Routes>
    </AppState.Provider>
  )
}

export default App
