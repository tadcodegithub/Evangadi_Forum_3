const db = require("../db"); // Import database connection
const Question = require("../models/Question"); // Import Question model

// Controller to get a single question by ID
const getSingleQuestion = async (req, res) => {
  try {
    const { question_id } = req.params;

    // Fetch question from database
    const question = await Question.findById(question_id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json({ question });
  } catch (error) {
    console.error("Error fetching question:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getSingleQuestion };
