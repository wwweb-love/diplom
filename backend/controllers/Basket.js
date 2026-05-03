const Product = require("../models/Product")
const Category = require("../models/Category");
const Basket = require("../models/Basket")
const mongoose = require("mongoose")


const getBasket = async (data) => {
    const { userId } = data
    const basket = await Basket.findOne({ user: userId }).populate({path: "products.product", populate: { path: "category" }})
    return basket
}

const updateBasket = async (req, res) => {
}

const addProductOnBasket = async (data) => {
    let { userId, productAndSelectedCount } = data

    await Basket.updateOne(
        { user: userId },
        { $push: { products: productAndSelectedCount } }
    );
    const basket = await getBasket({ userId })
        
    return basket
}

const deleteProductOnBasket = async (data) => {
    const { userId, productId } = data

    await Basket.updateOne(
        { user: userId },
        { $pull: { products: { product: productId } } } 
    );

    const basket = await getBasket({ userId })

    return basket
}


module.exports = {
    getBasket,
    updateBasket,
    addProductOnBasket,
    deleteProductOnBasket
};