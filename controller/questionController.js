// const dbConnection = require("../db/dbConfig");
const { StatusCodes } = require("http-status-codes");

async function createQuestion(req, res) {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide all required fields" });
  }
  try {
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Question created successfully" });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An unexpected error occurred." });
  }
}
async function singleQuestion(req,res) {
  res.send(`specific question for id=${req.params.question_id}`)
  
}
async function getAllQuestion(req,res){
  
}
module.exports = { createQuestion,getAllQuestion,singleQuestion};
