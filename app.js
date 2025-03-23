//require("dotenv").config();
const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
const usersRoutes = require("./routes/userRoutes")
const questionRoutes = require("./routes/questionRoute")
const authMiddleWare = require("./middleware/AuthMiddleware")
PORT = 5500
const dbcon = require("./db/dbConfig")
//login route

app.use(express.json())
app.use("/api/users", usersRoutes)

//question router
app.use("/api/question",authMiddleWare, questionRoutes)

async function start() {
  try {
    console.log("start database connection")
    const result = await dbcon.execute("select 'test'")
    console.log(result)
    console.log("end database connection")
  } catch (error) {
    console.log(error.message)
  }
}

start()

app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log("Litsenning on http://localhost:5500")
  }
})
