const express = require('express')
const router = express.Router({ mergeParams: true })
const { register, login } = require("./controllers/User")

server.post("/register", async (req, res) => {
    try {
        const { token, user } = await register(req, res)
        
        res.cookie("token", token, { httpOnly: true })
        .send({error: null, data: user})
    } catch(e) {
        res.send({error: e.message, data: null})
    }
})

server.post("/login", async (req, res) => {
    try {
        const { token, user } = await login(req, res)
        console.log(token)
        console.log(user)

        res.cookie("token", token, { httpOnly: true })
            .send({error: null, data: user})

    } catch(e) {
        res.send({error: e.message, data: null})
    }
})


server.post("/logout", (req, res) => {
    try {
        res.cookie("token", "", { httpOnly: true })
        .send({error: null, data: null})
    } catch (e) {
        res.send({error: e.message, data: null})
    }
})

module.exports = router