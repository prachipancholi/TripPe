const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const app = express()


dotenv.config({ path: "./config.env" })
require("./db/conn")
    // app.get("/regiter", (req, res) => {
    //     res.send("hello from register")
    // })
app.use(express.json())
app.use(require("./router/auth"))

const User = require("./model/schema")
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Working")
})
