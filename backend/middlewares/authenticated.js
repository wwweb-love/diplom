const User = require("../models/User")
const { verify } = require("../helpers/token")

module.exports = function(req, res, next) {
    const tokenData = req.cookies.token
    console.log(tokenData)

    const user = User.findOne({ _id: tokenData.id })

    if (!user) {
        throw new Error("Authenticated user not found 2")
        return
    }

    req.user = user

    next()
}