const jwt = require("jsonwebtoken");
const User = require("../model/schema")

const authenticate = async(req, res, next) => {
    try {
        const token = req.cookies.jwtToken

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        const rootUser = await User.findOne({ _id: verifyToken._id })

        if (!rootUser) {
            console.log(token)
            console.log(rootUser)
            throw new Error("User not found")
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();
    } catch (err) {

        res.status(401).send("Unauthorized: No token provided");

    }
}
module.exports = authenticate