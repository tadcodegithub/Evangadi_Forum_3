const DBConnection = require('../db/dbConfig');
const bcrypt = require('bcrypt');

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


module.exports = { register };
