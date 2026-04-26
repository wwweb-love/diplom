const mongoose = require("mongoose")

const BasketSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        ]
    }
)


const Basket = mongoose.model("Basket", BasketSchema)

module.exports = Basket