const express = require("express")
const router = express.Router()

// usercontroller

const { register, login, checkUser } = require("../controller/userController")

router.post("/register", register)
router.post("/login", login)
router.get("/checkUser", autMiddleware, checkUser)

module.exports = router
