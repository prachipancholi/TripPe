const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    pass: {
        required: true,
        type: String
    },
    conPass: {
        required: true,
        type: String
    },
    tokens: [{
        token: {
            required: true,
            type: String
        }
    }]

})

const friendsInfo = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    }


})



userSchema.pre('save', async function(next) {
    if (this.isModified('pass')) {
        this.pass = await bcrypt.hash(this.pass, 12);
        this.conPass = await bcrypt.hash(this.conPass, 12);
    }
    next();
})

userSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token
    } catch (err) {
        console.log(err)
    }
}

const User = mongoose.model("Login", userSchema)
const Friend = mongoose.model("Detail", friendsInfo)


module.exports = { User, Friend };