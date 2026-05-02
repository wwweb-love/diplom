const User = require("../models/User")
const { verify } = require("../helpers/token")

module.exports = function(req, res, next) {
    const tokenData = req.cookies.token

    const user = User.findOne({ _id: tokenData.id })

    if (!user) {
        throw new Error("Authenticated user not found")
        return
    }

    req.user = user

    next()
}