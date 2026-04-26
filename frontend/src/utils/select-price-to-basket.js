import { discountCalculation } from "./discount-calculation"

export const selectPriceToBasket = (products) => {
    let priceResult = 0
    let priceDiscountResult = 0
    
    products.map(({ price, discount }) => {
        priceResult += price
        priceDiscountResult += discountCalculation(price, discount)
    })

    return { priceResult, priceDiscountResult }
}