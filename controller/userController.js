const DBConnection = require('../db/dbConfig');
const bcrypt = require('bcrypt');

const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { username, email, password ,firstname , lastname} = req.body;
    if (!username || !email || !password || !firstname || !lastname) {
      return   res.status(400).json({ msg: "All input is required" });
    }

    if (password.length < 8) {
        return res.status(400).json({ msg: "Password must be at least 8 characters" });
    }
    try{
        const [user] = await DBConnection.query('SELECT username,userid FROM users WHERE email = ? or username = ?',[email,username]);
        if(user.length> 0){
            return res.status(400).json({ msg: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await DBConnection.query('INSERT INTO users (username,email,password,firstname,lastname) VALUES (?,?,?,?,?)',[username,email,hashedPassword,firstname,lastname]);
        return res.status(201).json({ msg: "User created" });

    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(401).json({ msg: "Please enter all the fields" });
    }

    try {
        const [user] = await DBConnection.query(
            "SELECT username, userid, password FROM users WHERE email = ?",
            [email]
        );

        if (user.length == 0) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Unauthorized" });
        }

        const username = user[0].username;
        const userid = user[0].userid;
        const token = jwt.sign({ username, userid },process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.status(200).json({ msg: "User login successful", token });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server faced an error" });
    }
};



module.exports = { login,register};

