const dbConnection = require("../db/dbConfig")
const { v4: uuidv4 } = require("uuid")
const { StatusCodes } = require("http-status-codes")
const jwt = require("jsonwebtoken")

async function createQuestion(req, res) {
  const questionid = uuidv4() // Generate a unique question ID using uuid
  const { title, description, tag } = req.body
  const { userid } = req.user
  // Validate required fields
  if (!title || !description) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please provide all required fields (title and description)",
    })
  }
  try {
    // Insert question into the database
    await dbConnection.query(
      "INSERT INTO questions (title, description, questionid, userid,tag) VALUES (?, ?, ?, ?,?)",
      [title, description, questionid, userid, tag || null]
    )

    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Question created successfully", questionid })
  } catch (error) {
    console.error("Error creating question:", error.message)
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An unexpected error occurred", error: error.message })
  }
}

async function singleQuestion(req, res) {
  res.send(`specific question for id=${req.params.question_id}`)
}
async function getAllQuestion(req, res) {}
module.exports = { createQuestion, getAllQuestion, singleQuestion }
