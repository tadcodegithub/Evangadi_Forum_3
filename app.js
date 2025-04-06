//require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
PORT = 5002;

app.use(cors());
const usersRoutes = require("./routes/userRoutes");
const questionRoutes = require("./routes/questionRoute");
const answerRoutes = require("./routes/answerRoutes");
const authMiddleWare = require("./middleware/AuthMiddleware");
const dbcon = require("./db/dbConfig");
//login route

app.use(express.json());

app.get("/", (req, res) => {
  res.send("done!");
});

app.use("/api/users", usersRoutes);

//question router
app.use("/api/question", authMiddleWare, questionRoutes);

//answer router
app.use("/api/answer", authMiddleWare, answerRoutes);

async function start() {
  try {
    const result = await dbcon.execute("select 'test'");

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
}

start();
