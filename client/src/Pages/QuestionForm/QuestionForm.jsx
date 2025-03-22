import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./question.module.css";
import axios from "../../utility/axios";
const QuestionForm = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const token = localStorage.getItem("token"); // Get the token for authentication

    // Check if the user is authenticated before sending the request
    if (!token) {
      alert("Please log in to ask a question");
      return;
    }

    try {
      const response = await axios.post(
        "/api/questions",
        {
          title,
          description,
        }, // Data payload
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the JWT token
          },
        } // Config object for headers
      );

      console.log("Question submitted:", { title, description });
      console.log("Response from server:", response.data);

      // Clear the form
      titleRef.current.value = "";
      descriptionRef.current.value = "";
    } catch (error) {
      console.error("Error submitting question:", error.message);
      alert("Failed to submit question. Please try again.");
    }
  };
  return (
    <div className={styles.question_page}>
      <div className={styles.steps}>
        <h2>Steps to write a good question</h2>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <div className={styles.question_form_container}>
        <h2>Ask a public question</h2>
        <Link to="/questions" className={styles.go_to_questions}>
          Go to Question page
        </Link>
        <form onSubmit={handleSubmit} className={styles.question_form}>
          <input
            type="text"
            placeholder="Title"
            ref={titleRef}
            required
            className="title-input"
          />
          <textarea
            placeholder="Question Description..."
            ref={descriptionRef}
            required
            rows="6"
            className="description-input"
          />
          <button type="submit" className={styles.post_button}>
            Post Your Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
