const Product = require("../models/Product")
const Category = require("../models/Category");


const getProducts = async (req, res) => {
    const products = await Product.find().populate({path: "category" })


    return products
}

const getProduct = async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id }).populate({path: "category" })
    return product
}

const addProduct = async (req, res) => {
    const product = await Product.create(req.body)

    return product
}

module.exports = {
    getProducts,
    getProduct,
    addProduct
};