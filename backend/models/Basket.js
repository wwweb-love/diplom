const mongoose = require("mongoose")

const BasketSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                selected_count: {
                    type: Number,
                    required: true,
                    min: 1,
                    default: 1
                }
            }
        ]
    }
)


const Basket = mongoose.model("Basket", BasketSchema)

module.exports = Basket