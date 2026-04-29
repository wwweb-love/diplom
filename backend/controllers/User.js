const User = require("../models/User")
const bcrypt = require("bcrypt")
const { generate } = require("../helpers/token")

const register = async (req, res) => {
    const { name, login, password } = req.body

    if (!password) throw new Error("Password is empty")

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await User.create({name, login, password: passwordHash})

    const token = generate({id: user.id})

    return {user, token}
}

const login = async (req, res) => {
    const { login, password } = req.body

    const user = await User.findOne({ login })

    if (!user) throw new Error("User not defined")

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) throw new Error("Password invalid")

    const token = generate({id: user.id})

    return { token, user }
}


module.exports = {
    register,
    login
}