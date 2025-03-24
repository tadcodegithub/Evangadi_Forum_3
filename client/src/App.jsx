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
import Landing from "./Pages/Landing/Landing"
import AnswerPage from "./Pages/AnswerPage/AnswerPage"
export const AppState = createContext()
function App() {
  const [user, setUser] = useState({})
  const token = localStorage.getItem("token")
  const [userFullName, setUserFullName] = useState("")
  const navigate = useNavigate()

  async function checkUser() {
    try {
      const token = localStorage.getItem("token")
      const { data } = await axios.get(
        "/api/users/check",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the JWT token
          },
        } // Config object for headers
      )
      console.log(data)
      setUser(data)
    } catch (error) {
      console.log(error)
      setUser({})
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
          Authorization: `Bearer ${token}`, // Include the JWT token
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
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ask" element={<QuestionForm />} />
        <Route path="/answer/:questionid" element={<AnswerPage/>} />
      </Routes>
    </AppState.Provider>
  )
}

export default App
