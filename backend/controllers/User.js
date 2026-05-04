const User = require("../models/User")
const Basket = require("../models/Basket")
const bcrypt = require("bcrypt")
const { generate } = require("../helpers/token")

const register = async (req, res) => {
    const { name, login, password } = req.body

    if (!password) throw new Error("Password is empty")

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await User.create({name, login, password: passwordHash})

    const token = generate({id: user.id})

    const isBasket = await Basket.findOne({ user: user.id })
    if (!isBasket) {
        const basket = await Basket.create({ user: user.id, products: [] })
    }
    
    return {user, token}
}

const login = async (req, res) => {
    const { login, password } = req.body

    const user = await User.findOne({ login })

    if (!user) throw new Error("User not defined")

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) throw new Error("Password invalid")

    const token = generate({id: user.id})

    const isBasket = await Basket.findOne({ user: user.id })
    if (!isBasket) {
        const basket = await Basket.create({ user: user.id, products: [] })
    }

    return { token, user }
}

const getUsers = async () => {
    const users = await User.find()
    return users
}


module.exports = {
    register,
    login,
    getUsers
}