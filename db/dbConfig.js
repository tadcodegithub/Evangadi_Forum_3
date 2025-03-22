const mysql2 = require("mysql2")
const dotenv = require("dotenv")
dotenv.config()
console.log("DB Password:", process.env.PASSWORD);
const dbcon = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10,
})

module.exports = dbcon.promise()
