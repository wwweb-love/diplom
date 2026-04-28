const Category = require("../models/Category")


const getCategories = async (req, res) => {
    const categories = await Category.find()
    return categories
}

module.exports = { getCategories };