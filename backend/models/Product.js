const mongoose = require("mongoose")
const validator = require("validator")

const ProductSchema = mongoose.Schema(
    {
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            image_url: {
                type: String,
                required: true,
                validate: {
                    validator: validator.isURL,
                    message: "Image should be a valid url",
                }
            },
            count: {
                type: Number,
                required: true
            },
            category: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Category"
            },
            discount: {
                type: Number,
                required: true
            }

    }, { timestamps: true },
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product