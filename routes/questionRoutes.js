const express = require("express");
const { getSingleQuestion } = require("../controller/questionController");

const router = express.Router();

// Define the route to fetch a single question
router.get("/:question_id", getSingleQuestion);

module.exports = router;
