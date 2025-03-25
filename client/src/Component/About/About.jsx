import React from "react"
import Style from "./about.module.css"
function About() {
  return (
    <div className={Style.homePageContainer}>
      <div className={Style.aboutPage}>
        <h4>About</h4>
        <h2 className={Style.aboutPageTitle}>Evangadi Networks Q&A</h2>
        <p>
          A Question and Answer (Q&A) page is a platform where users can ask
          questions and receive answers from a community of people. It helps
          users find solutions to problems, learn new information, and share
          knowledge on various topics.
        </p>
        <p>
          These pages encourage collaboration by allowing multiple users to
          contribute answers. Experts, enthusiasts, and general users can
          provide different perspectives, making the discussion more insightful.
        </p>
        <p>
          A well-organized Q&A page becomes a valuable resource over time.
          Instead of repeatedly answering the same questions, users can refer to
          previous discussions. 
        </p>
        <button className={Style.aboutPageButton}>How It Works</button>
      </div>
    </div>
  )
}

export default About
