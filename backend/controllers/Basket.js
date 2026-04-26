const Product = require("../models/Product")
const Category = require("../models/Category");
const Basket = require("../models/Basket")

// Корзина с расписанным Product -> Category
const getBasket = async (req, res) => {
    const basket = await Basket.findOne({ user: req.params.userId }).populate({path: "products", populate: { path: "category" }})
    return basket
}

const addBasket = async (req, res) => {
    const basket = await Basket.create(req.body)
    return basket
}


module.exports = {
    getBasket,
    addBasket
};