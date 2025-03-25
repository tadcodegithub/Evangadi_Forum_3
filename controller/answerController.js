const dbConnection = require("../db/dbConfig")
const { StatusCodes } = require("http-status-codes")

async function postAnswer(req, res) {
  const { questionid, answer, userid } = req.body
  if (!answer) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide answer" })
  }
  try {
    dbConnection.query(
      "INSERT INTO answers (userid,questionid,answer) VALUES (?,?,?)",
      [userid, questionid, answer]
    )

    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Answer posted successfully" })
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An unexpected error occurred." })
  }
}
async function getAnswer(req, res) {
  const { questionid } = req.params
  try {
    const [answers] = await dbConnection.query(
      `SELECT a.answerid,a.userid,a.questionid,a.answer,u.username from answers a join users u on a.userid=u.userid WHERE questionid = '${questionid}'`
    )
    return res
      .status(StatusCodes.OK)
      .json({ message: "Answers retrieved successfully", answers })
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An unexpected error occurred." })
  }
}

module.exports = { postAnswer, getAnswer }
