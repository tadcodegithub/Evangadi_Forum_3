const express = require("express")
const router = express.Router()

// usercontroller

const { register } = require("../controller/userController")

router.post("/register", register)

const { login } = require("../controller/userController")

router.post("/login", login)

module.exports = router
