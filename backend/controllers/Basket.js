const Product = require("../models/Product")
const Category = require("../models/Category");
const Basket = require("../models/Basket")
const mongoose = require("mongoose")
// Корзина с расписанным Product -> Category
const getBasket = async (req, res) => {
    // const basket = await Basket.findOne({ user: req.params.userId }).populate({ path: "products", populate: { path: "category" } })
    const basket = await Basket.findOne({ user: req.params.userId })
        .populate("products.productId")
        .populate('products.productId.category');

    return basket
}

const addProductOnBasket = async (req, res) => {
    let { userId, product } = req.body

    await Basket.updateOne(
        { user: userId },
        { $push: { products: product } }
    );
    
    const basket = await Basket.findOne({ user: userId })
        .populate('products.productId')
        .populate('products.productId.category');
   
    return basket
}

const deleteProductOnBasket = async (req, res) => {
    const { userId, productId } = req.params

    await Basket.updateOne(
        { user: userId },
        { $pull: { products: { productId: productId } } }  // Указываем поле внутри объекта
    );

    const basket = await Basket.findOne({ user: userId }).populate({ path: "products", populate: { path: "category" } })

    return basket
}


module.exports = {
    getBasket,
    addProductOnBasket,
    deleteProductOnBasket
};