const express = require("express")
const mongoose = require("mongoose")
const path = require('path')
const cors = require('cors')
const cookieParser = require("cookie-parser")



const { register, login, getUsers } = require("./controllers/User")
const { getProducts, getProduct, addProduct } = require("./controllers/Product")
const { getBasket, addProductOnBasket, deleteProductOnBasket, putProductOnBasketSelectedCount } = require("./controllers/Basket")
const { getCategories } = require("./controllers/Category")
const { transformerProducts } = require("./transformers/transformer-products")
const { transformerProduct } = require("./transformers/transformer-product")
const authenticated = require("./middlewares/authenticated")
const { error } = require("console")

const port = 3000

const server = express()

server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
server.use(cookieParser())
server.use(express.json())

server.post("/register", async (req, res) => {
    try {
        const { token, user } = await register(req, res)

        res.cookie("token", token, { httpOnly: true })
            .send({ error: null, data: user })
    } catch (e) {
        res.send({ error: e.message, data: null })
    }
})

server.post("/login", async (req, res) => {
    try {
        const { token, user } = await login(req, res)
        console.log(token)
        console.log(user)

        res.cookie("token", token, { httpOnly: true })
            .send({ error: null, data: user })

    } catch (e) {
        res.send({ error: e.message, data: null })
    }
})


server.post("/logout", (req, res) => {
    try {
        res.cookie("token", "", { httpOnly: true })
            .send({ error: null, data: null })
    } catch (e) {
        res.send({ error: e.message, data: null })
    }
})

// page Products

server.get("/products", async (req, res) => {
    try {
        const products = await getProducts()

        res.send({ error: null, data: products })

    } catch (e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})

server.get("/categories", async (req, res) => {
    try {
        const categories = await getCategories()

        res.send({ error: null, data: categories })

    } catch (e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})

// page Product

server.get("/product/:id", async (req, res) => {
    try {
        const data = req.params
        const product = await getProduct(data)
        res.send({ error: null, data: product })

    } catch (e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})

server.get("/basket/:userId", async (req, res) => {
    try {
        const data = req.params
        const basket = await getBasket(data)
        res.send({ error: null, data: basket })
    } catch (e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})

// page Basket

server.post("/basket/:userId/:productId", async (req, res) => {
    try {
        const data = { userId: req.params.userId, productAndSelectedCount: req.body }
        const basket = await addProductOnBasket(data)

        res.send({ error: null, data: basket })
    } catch (e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})

server.delete("/basket/:userId/:productId", async (req, res) => {
    try {
        const data = req.params
        const basket = await deleteProductOnBasket(data)

        res.send({ error: null, data: basket })
    } catch (e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})

server.put("/basket/:userId/:productId/selected_count", async (req, res) => {
    try {
        const data = { userId: req.params.userId, productId: req.params.productId, selected_count: req.body.selected_count }

        const basket = await putProductOnBasketSelectedCount(data)
        
        res.send({ error: null, data: basket })
    } catch (e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})

// page Admin

server.get("/admin/:model", authenticated, async (req, res) => {
    try {
        const { model } = req.params

        if (model == "users") {
            res.send({error: null, data: await getUsers()})
        } else if (model == "products") {
            res.send({error: null, data: await getProducts()})
        } else if (model == "categories") {
            res.send({error: null, data: await getCategories()})
        } else {
            res.send({ error: "No data model", data: null })
        }
    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})


// admin Panel. Future

// server.post("/product", async (req, res) => {
//     try{
//         const product = await addProduct(req, res)

//         res.send({ error: null, data: product })

//     } catch(e) {
//         res.send({ error: e.message || "Unknown error", data: null  })
//     }
// })


// try {} catch(e) {res.send({ error: e.message || "Unknown error" })}

mongoose.connect("mongodb://user:mongopass@localhost:27017/").then(
    () => {
        console.log("Connect mongoDb")
        server.listen(port, () => {
            console.log(`Server started on port: ${port}`)
        })
    }
)