const Product = require("../models/Product")
const Category = require("../models/Category");


// Создание продукта
const createProduct = async (req, res) => {
    try {
        const { title, price, image_url, count, category, discount } = req.body;
        
        // 1. Находим категорию по названию или slug
        const categoryDoc = await Category.findOne({
            $or: [
                { title: category },
                { slug: category },
                { _id: category } // если передан ID
            ]
        });
        
        if (!categoryDoc) {
            return res.status(404).json({ error: "Категория не найдена" });
        }
        
        // 2. Создаём продукт с category_id
        const product = await Product.create({
            title,
            price,
            image_url,
            count,
            category_id: categoryDoc._id,  // 👈 БЕРЁМ ID ИЗ КАТЕГОРИИ
            discount: discount || 0
        });
        
        // 3. Возвращаем продукт с подтянутой категорией
        const populatedProduct = await product.populate("category_id");
        
        res.status(201).json(populatedProduct);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Получить ВСЕ продукты с их категориями
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
            .populate("category_id")  // 👈 ЗАМЕНЯЕТ category_id на объект категории
            .sort({ createdAt: -1 }); // сначала новые
        
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Получить продукт по ID с его категорией
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate("category_id");
        
        if (!product) {
            return res.status(404).json({ error: "Продукт не найден" });
        }
        
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Получить продукты КОНКРЕТНОЙ категории
const getProductsByCategory = async (req, res) => {
    try {
        const { categorySlug } = req.params;
        
        // 1. Находим категорию по slug
        const category = await Category.findOne({ slug: categorySlug });
        
        if (!category) {
            return res.status(404).json({ error: "Категория не найдена" });
        }
        
        // 2. Находим все продукты с этой категорией
        const products = await Product.find({ category_id: category._id })
            .populate("category_id");
        
        res.json({
            category,
            products
        });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Обновление продукта
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        // Если обновляют категорию по названию
        if (updateData.category) {
            const category = await Category.findOne({
                $or: [
                    { title: updateData.category },
                    { slug: updateData.category }
                ]
            });
            
            if (!category) {
                return res.status(404).json({ error: "Категория не найдена" });
            }
            
            updateData.category_id = category._id;
            delete updateData.category;
        }
        
        const product = await Product.findByIdAndUpdate(id, updateData, {
            new: true,  // вернуть обновлённый документ
            runValidators: true
        }).populate("category_id");
        
        if (!product) {
            return res.status(404).json({ error: "Продукт не найден" });
        }
        
        res.json(product);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Удаление продукта
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        
        if (!product) {
            return res.status(404).json({ error: "Продукт не найден" });
        }
        
        res.json({ message: "Продукт удалён", product });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    getProductsByCategory,
    updateProduct,
    deleteProduct
};