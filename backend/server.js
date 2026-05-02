const express = require("express")
const mongoose = require("mongoose")
const path = require('path')
const cors = require('cors')
const cookieParser = require("cookie-parser")


const { register, login } = require("./controllers/User")
const { getProducts, getProduct, addProduct } = require("./controllers/Product")
const { getBasket, addProductOnBasket, deleteProductOnBasket } = require("./controllers/Basket")
const { getCategories } = require("./controllers/Category")
const { transformerProducts } = require("./transformers/transformer-products")
const { transformerProduct } = require("./transformers/transformer-product")

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

server.get("/products", async (req, res) => {
    try {

        const products = await getProducts(req, res)
    
        res.send({ error: null, data: products })

    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})


server.get("/product/:id", async (req, res) => {
    try{

        const product = await getProduct(req, res)
        res.send({ error: null, data: product })

    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null  })
    }
})

server.post("/product", async (req, res) => {
    try{
        
        const product = await addProduct(req, res)
        
        res.send({ error: null, data: product })

    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null  })
    }
})

server.get("/categories", async (req, res) => {
    try{

        const categories = await getCategories(req, res)
        
        res.send({ error: null, data: categories })

    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null  })
    }
})

server.get("/api/basket/:userId", async (req, res) => {
    console.log(req.params.userId)
    try{
        const basket = await getBasket(req, res)
        
        res.send({ error: null, data: basket })
        
    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null  })
    }
    
})

server.post("/basket/:userId/product", async (req, res) => {
    console.log("Frontend", req.body)
    try {

        const basket = await addProductOnBasket(req, res)

        res.send({ error: null, data: basket })
    } catch(e) {
        res.send({ error: e, data: null })
    }
})

server.delete("/basket/:userId/:productId", async (req, res) => {
    try {
        const basket = await deleteProductOnBasket(req, res)
        
        res.send({ error: null, data: basket })
    } catch(e) {
        res.send({ error: e, data: null })
    }
})


// try {} catch(e) {res.send({ error: e.message || "Unknown error" })}

mongoose.connect("mongodb://user:mongopass@localhost:27017/").then(
    () => {
        console.log("Connect mongoDb")
        server.listen(port, () => {
            console.log(`Server started on port: ${port}`)
        })
    }
)