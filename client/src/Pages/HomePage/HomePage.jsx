import React, { useContext, useEffect, useState } from "react"
import { AppState } from "../../App"
import style from "./hompage.module.css"
import axios from "../../utility/axios"
import { FaCircleUser } from "react-icons/fa6"
import { FaChevronRight } from "react-icons/fa6"
import LayOut from "../../Component/LayOut/LayOut"
import QuestionForm from "../QuestionForm/QuestionForm"
import { Link } from "react-router-dom"
function HomePage() {
  const { user } = useContext(AppState)
  const [allQuestion, setAllQuestion] = useState([])
  const [search, setSeach] = useState("")

  console.log("now seach for ",search)


  async function getSearchedQuesion() 
  {
    if(search){
    try {
      const { data } = await axios.get(
        `/api/question/search/${search}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhZCIsInVzZXJpZCI6MSwiaWF0IjoxNzQyNjI3MDYwLCJleHAiOjE3NDI3MTM0NjB9.MEJa2BJznxhrYbJNtudWJ5nWvgYWAxUe3jBOSjlKtF8`, // Include the JWT token
          },
        } // Config object for headers
      )
      console.log(data.allQuestion)
      setAllQuestion(data.allQuestion)
    } catch (error) {
      console.log(error)
    }}
  }
  async function getAllQuestion() {
    try {
      const { data } = await axios.get(
        "/api/question",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhZCIsInVzZXJpZCI6MSwiaWF0IjoxNzQyNjI3MDYwLCJleHAiOjE3NDI3MTM0NjB9.MEJa2BJznxhrYbJNtudWJ5nWvgYWAxUe3jBOSjlKtF8`, // Include the JWT token
          },
        } // Config object for headers
      )
      console.log(data.allQuestion)
      setAllQuestion(data.allQuestion)
    } catch (error) {
      console.log(error)
    }
    // console.log(response)
  }
  useEffect(() => {
    if(search)   getSearchedQuesion()
      else
    getAllQuestion()
 
  }, [search])
  return (
    <LayOut>
      <div className={style.home_container}>
        <div className={style.ask_and_username}>
          <Link to="/ask">Ask Question</Link>
          <p>{user.username}</p>
        </div>
        <div className={style.qustion_and_search}>
          <p>Questions</p>
          <input
            type="text"
            placeholder="Search Questions"
            value={search}
            onChange={(e) => setSeach(e.target.value)}
            id="search"
          />
        </div>
        <hr />
        {allQuestion.length <= 0 ? (
          <p>No Question!!</p>
        ) : (
          <div>
            {allQuestion?.map((sinlQustion, index) => {
              return (
                <section className={style.qustion_sinlQustion}>
                  <div className={style.qustion_container} key={index}>
                    <div className={style.qustion_container_logo}>
                      <div>
                        <FaCircleUser size={60} color="gray" />
                        {/* user with flex column */}
                        <p>{sinlQustion.username}</p>
                      </div>
                      {/* icon */}

                      <p>{sinlQustion.title}</p>
                    </div>
                    <FaChevronRight />
                  </div>
                  <hr />
                </section>
              )
            })}
          </div>
        )}
      </div>
    </LayOut>
  )
}

export default HomePage
