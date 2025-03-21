const { StatusCodes } = require("http-status-codes")

const dotenv = require("dotenv")
dotenv.config()

const jwt = require("jsonwebtoken")
async function autMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authentication Invalid" })
  }
  //this is to get specific token from header  eg. {"Bearer mytoken"}
  //after split by ' '  the first is Bearer and the second in index 1 is token
  const token = authHeader.split(" ")[1]

  try {
    const { username, userid } = jwt.verify(token, process.env.JWT_SECRET)
    // return res.status(StatusCodes.OK).json({ data })
    req.user = { username, userid }
    next()
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Authentication Invalid" })
  }
}
module.exports = autMiddleware
