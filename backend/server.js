const express = require("express")
const mongoose = require("mongoose")
const path = require('path')
const cors = require('cors')

const { getProducts, getProduct, addProduct } = require("./controllers/Product")
const { getBasket, addBasket } = require("./controllers/Basket")
const { getCategories } = require("./controllers/Category")

const port = 3000

const server = express()

server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

server.use(express.json())


server.get("/api/products", async (req, res) => {
    try {

        const products = await getProducts(req, res)
    
        res.send({ error: null, data: products })

    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null })
    }
})


server.get("/api/product/:category/:id", async (req, res) => {
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

    try{

        const basket = await getBasket(req, res)
        
        res.send({ error: null, data: basket })
        
    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null  })
    }
    
})

server.post("/basket", async (req, res) => {
    try {

        const basket = await addBasket(req, res)
        
        res.send({ error: null, data: basket })


    } catch(e) {
        res.send({ error: e.message || "Unknown error", data: null  })
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