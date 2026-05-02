const transformerProducts = (products) => {
    const newProducts = []
    products.map(product => {
        const { _id, title, price, image_url } = product
        newProducts.push({ _id, title, price, image_url })
    })

    return newProducts
}

module.exports = { transformerProducts }