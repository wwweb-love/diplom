const Category = require("../models/Category")


const getCategories = async () => {
    const categories = await Category.find()
    return categories
}

module.exports = { getCategories };