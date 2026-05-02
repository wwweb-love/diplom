import { discountCalculation } from "./discount-calculation"

export const selectPriceToBasket = (products) => {
    let priceResult = 0
    let priceDiscountResult = 0
    
    products.map((product) => {
        console.log("UTILS Product", product)
        console.log("UTILS Price", product.productId.price)
        console.log("UTILS discount", product.productId.discount)

        let price = product.productId.price
        let discount = product.productId.discount
        let selected_count = product.selected_count

        priceResult += (price * selected_count)
        priceDiscountResult += (discountCalculation(price, discount) * selected_count)
    })

    return { priceResult, priceDiscountResult }
}