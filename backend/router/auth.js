const express = require("express")
const cookie = require('cookie-parser');

const app = express();
const router = express.Router()
const bcrypt = require("bcryptjs")
const authenticate = require("../middleware/authenticate")
require("../db/conn")
app.use(express.json())
app.use(cookie());
const { User } = require("../model/schema")
const { Friend } = require("../model/schema")
const jwt = require("jsonwebtoken")

router.post("/friendAdd", async(req, res) => {

    const { name, email, amount, description } = await req.body;

    if (!name || !amount || !description) {
        return res.status(422).json({ error: "Field/s are empty" });
    }
    try {

        const user1 = new Friend({ name, email, amount, description })

        const friendLog = await user1.save();
        if (friendLog) {
            res.status(201).json({ message: "Added friend" })
        }

    } catch (err) {
        console.log(err)
    }


})


router.post("/register", async(req, res) => {

    const { email, pass, conPass } = await req.body;

    if (!email || !pass || !conPass) {
        return res.status(422).json({ error: "Field/s are empty" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exixt" });
        } else if (pass != conPass) {
            return res.status(422).json({ error: "Invalid input" });
        }
        const user = new User({ email, pass, conPass })

        const userRegister = await user.save();
        if (userRegister) {
            res.status(201).json({ message: "Registered" })
        }

    } catch (err) {
        console.log(err)
    }


})

router.post("/login", async(req, res) => {
    let token;
    try {
        const { email, pass } = req.body;
        if (!email || !pass) {
            return res.status(400).json({ error: "Fill in the data" })
        }

        const userLogin = await User.findOne({ email: email });


        if (userLogin) {
            const isMatch = await bcrypt.compare(pass, userLogin.pass)

            token = await userLogin.generateAuthToken()
            console.log(token)

            res.cookie("jwtToken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: "Signin unsuccessful" })
            } else {
                res.status(200).json({ error: "Signin successful" })
            }
        } else {
            res.status(400).json({ error: "Signin unsuccessful" })
        }


    } catch (err) {
        console.log(err)
    }
})

router.get('/profile', (req, res) => {
    console.log("hello");
    const rootUser = User.findOne({ _id: verifyToken._id })
    res.send(rootUser)
});

module.exports = router;