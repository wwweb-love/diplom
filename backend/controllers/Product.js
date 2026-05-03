const Product = require("../models/Product")
const Category = require("../models/Category");
const chalk = require("chalk")


const getProducts = async () => {
    const products = await Product.find().populate({path: "category" })
    return products
}

const getProduct = async (data) => {
    const { id } = data
    const product = await Product.findOne({ _id: id }).populate({path: "category" })
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