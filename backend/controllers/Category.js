const Category = require("../models/Category")

// Create category
const createCategory = async (req, res) => {
    try {
        const { title, slug } = req.body;
        
        const category = await Category.create({
            title,
            slug: slug || title.toLowerCase(),
        });
        
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Получить все категории
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ title: 1 });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Получить категорию по IDww
const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ error: "Категория не найдена" });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createCategory, getCategories, getCategoryById };