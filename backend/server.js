const express = require("express")
const mongoose = require("mongoose")
const path = require('path')
const cors = require('cors')

const { getProducts, getProduct, addProduct } = require("./controllers/Product")
const { getBasket, addBasket } = require("./controllers/Basket")

const port = 3000

const server = express()

server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

server.use(express.json())


server.get("/api/products", async (req, res) => {
    const products = await getProducts(req, res)

    res.json(products)
})

server.get("/api/product/:category/:id", async (req, res) => {
    const product = await getProduct(req, res)

    res.json(product)
})

server.post("/product", async (req, res) => {
    const product = await addProduct(req, res)

    res.json(product)
})

server.get("/api/basket/:userId", async (req, res) => {
    const basket = await getBasket(req, res)

    res.json(basket)

})

server.post("/basket", async (req, res) => {
    const basket = await addBasket(req, res)

    res.json(basket)
})

mongoose.connect("mongodb://user:mongopass@localhost:27017/").then(
    () => {
        console.log("Connect mongoDb")
        server.listen(port, () => {
            console.log(`Server started on port: ${port}`)
        })
    }
)