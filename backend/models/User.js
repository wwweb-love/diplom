const mongoose = require("mongoose")
const roles = require("../constants/roles")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true, // Уникальный ключ
        index: true // Адаптирует поиск
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: roles.USER
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User