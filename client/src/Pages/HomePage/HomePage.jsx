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

  console.log("now seach for ", search)

  async function getSearchedQuesion() {
    if (search) {
      try {
        const token = localStorage.getItem("token")
        const { data } = await axios.get(
          `/api/question/search/${search}`,

          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Include the JWT token
            },
          } // Config object for headers
        )
        console.log(data.allQuestion)
        setAllQuestion(data.allQuestion)
      } catch (error) {
        console.log(error)
      }
    }
  }
  async function getAllQuestion() {
    try {
      const token = localStorage.getItem("token")
      const { data } = await axios.get(
        "/api/question",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the JWT token
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
    if (search) getSearchedQuesion()
    else getAllQuestion()
  }, [search])
  return (
    <LayOut>
      <div className={style.home_container}>
        <div className={style.ask_and_username}>
          <Link to="/ask">Ask Question</Link>
          <p>Welcome: {user.username}</p>
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
          <div className={style.qustion_sinlQustion_a}>
            {allQuestion?.map((sinlQustion, index) => {
              return (
                <Link to={`/answer/${sinlQustion.questionid}`}>
                  <section className={style.qustion_sinlQustion}>
                    <div className={style.qustion_container} key={index}>
                      <div className={style.qustion_container_logo}>
                        <div className={style.userInfo}>
                          <FaCircleUser className={style.userIcon} size={60} />
                          <p>{sinlQustion?.username || "Anonymous"}</p>
                        </div>
                        <p>{sinlQustion?.title || "No title available"}</p>
                      </div>
                      <FaChevronRight className={style.chevronIcon} />
                    </div>
                    <hr />
                  </section>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </LayOut>
  )
}

export default HomePage
