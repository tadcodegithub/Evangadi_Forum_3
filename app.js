const express = require("express");
const connectDB = require("./db");
const questionRoutes =require("./routes/questionRoutes");
const app = express();

connectDB();

//middleware
app.use(express.json());

//Routes
app.use("/api/questions",questionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));