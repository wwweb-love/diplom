const Product = require("../models/Product")
const Category = require("../models/Category");
const Basket = require("../models/Basket")
const mongoose = require("mongoose")
const chalk = require("chalk")

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

const putProductOnBasketSelectedCount = async (data) => {
    
    const { userId, productId, selected_count } = data
    console.log(chalk.bgGreen(userId, productId, selected_count))


    console.log("basket", await Basket.findOne({user: userId, 'products.product': productId}))

    const basketUpdate = await Basket.updateOne(
        { 
            user: userId,
            'products.product': productId
        },
        { 
            $set: { 'products.$.selected_count': Number(selected_count) } 
        }
    );

    console.log("basketUpdate", basketUpdate)

    const basket = await getBasket({ userId })
    console.log("basket", basket)
    return basket
}


module.exports = {
    getBasket,
    updateBasket,
    addProductOnBasket,
    deleteProductOnBasket,
    putProductOnBasketSelectedCount
};